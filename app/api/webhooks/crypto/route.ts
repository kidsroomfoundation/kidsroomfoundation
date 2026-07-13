import { NextResponse } from 'next/server'

// This defines the expected payload from your crypto processor
interface CryptoDonationPayload {
  donorName?: string
  donorEmail: string
  amountCrypto: string
  cryptoSymbol: string // e.g., 'ETH', 'BTC'
  amountUsdValue: string // The IRS requires the USD value at the time of donation
  transactionHash: string
  donationDate: string
}

export async function POST(request: Request) {
  try {
    // 1. Security Check: Verify this request is actually from your payment processor
    const authHeader = request.headers.get('x-webhook-secret')
    const webhookSecret = process.env.CRYPTO_WEBHOOK_SECRET

    if (!webhookSecret || authHeader !== webhookSecret) {
      console.error('Unauthorized webhook attempt.')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // 2. Parse the incoming donation data
    const payload: CryptoDonationPayload = await request.json()
    const { 
      donorName = 'Generous Donor', 
      donorEmail, 
      amountCrypto, 
      cryptoSymbol, 
      amountUsdValue, 
      transactionHash, 
      donationDate 
    } = payload

    if (!donorEmail || !amountCrypto || !amountUsdValue) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error('Missing RESEND_API_KEY environment variable.')
      return NextResponse.json({ error: 'Email service unconfigured' }, { status: 500 })
    }

    // 3. Format the IRS-Compliant Tax Receipt Email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-w: 600px; margin: 0 auto; color: #333; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #4F46E5; padding: 30px 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Donation Receipt</h1>
          <p style="color: #e0e7ff; margin-top: 5px; font-size: 14px;">Kids Room Foundation</p>
        </div>

        <div style="padding: 30px 20px;">
          <p>Dear ${donorName},</p>
          <p>Thank you for your generous cryptocurrency donation to the Kids Room Foundation. Your support allows us to continue our mission of providing transparent, direct aid to children worldwide.</p>
          
          <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h3 style="margin-top: 0; color: #111827; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Donation Details</h3>
            <table style="width: 100%; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #6b7280;">Date Received:</td>
                <td style="padding: 6px 0; font-weight: bold; text-align: right;">${new Date(donationDate).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #6b7280;">Amount (Crypto):</td>
                <td style="padding: 6px 0; font-weight: bold; text-align: right;">${amountCrypto} ${cryptoSymbol}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #6b7280;">Assessed USD Value:</td>
                <td style="padding: 6px 0; font-weight: bold; text-align: right; color: #059669;">$${amountUsdValue}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #6b7280;">Transaction Hash:</td>
                <td style="padding: 6px 0; font-family: monospace; font-size: 12px; text-align: right;">
                  ${transactionHash.substring(0, 10)}...${transactionHash.substring(transactionHash.length - 8)}
                </td>
              </tr>
            </table>
          </div>

          <p style="font-size: 12px; color: #6b7280; line-height: 1.5; border-top: 1px solid #eee; pt-4;">
            <strong>Tax Information:</strong> Kids Room Foundation is a registered 501(c)(3) non-profit organization (EIN: XX-XXXXXXX). 
            No goods or services were provided in exchange for this contribution. Please keep this receipt for your tax records.
          </p>
        </div>
        
        <div style="background-color: #f3f4f6; padding: 15px 20px; text-align: center; font-size: 12px; color: #9ca3af;">
          &copy; ${new Date().getFullYear()} Kids Room Foundation. All rights reserved.<br/>
          123 Charity Lane, Suite 400, New York, NY 10001
        </div>
      </div>
    `

    // 4. Send the Receipt via Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Kids Room Receipts <onboarding@resend.dev>', // Change to receipts@kidsroomfoundation.com after domain verification
        to: [donorEmail],
        subject: `Your Tax Receipt from Kids Room Foundation ($${amountUsdValue})`,
        html: emailHtml,
      }),
    })

    const resendData = await resendResponse.json()

    if (!resendResponse.ok) {
      console.error('Failed to send receipt:', resendData)
      return NextResponse.json({ error: 'Failed to send receipt email' }, { status: 500 })
    }

    // 5. Respond to the Webhook Provider with a Success Status
    return NextResponse.json({ success: true, receiptId: resendData.id }, { status: 200 })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
