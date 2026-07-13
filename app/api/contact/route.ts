import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error('Missing RESEND_API_KEY environment variable.')
      return NextResponse.json(
        { error: 'Email service configuration error.' },
        { status: 500 }
      )
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Kids Room Site <onboarding@resend.dev>',
        to: ['hello@kidsroomfoundation.com'],
        reply_to: email,
        subject: `[Contact Form] ${subject || 'New Message'}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2>New Message from Kids Room Website</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="white-space: pre-wrap;"><strong>Message:</strong><br />${message}</p>
          </div>
        `,
      }),
    })

    const resendData = await resendResponse.json()

    if (!resendResponse.ok) {
      console.error('Resend API error payload:', resendData)
      return NextResponse.json(
        { error: 'Failed to dispatch email through partner server.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, id: resendData.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form API engine crash:', error)
    return NextResponse.json(
      { error: 'An unexpected internal error occurred.' },
      { status: 500 }
    )
  }
}
