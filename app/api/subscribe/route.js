export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const res = await fetch('https://surajsakaria.substack.com/api/v1/free', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (!res.ok) {
      return Response.json(
        { error: 'Subscription failed. Please try again.' },
        { status: res.status }
      )
    }

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
