import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const resendApiKey = process.env.RESEND_API_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey)
const resend = new Resend(resendApiKey)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, date, time, businessType, message } = body

    // Validate the request
    if (!name || !email || !date || !time || !businessType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        { 
          name, 
          email, 
          phone, 
          company, 
          date, 
          time, 
          business_type: businessType, 
          message 
        }
      ])
      .select()

    if (error) {
      console.error("Error saving booking:", error)
      return NextResponse.json({ error: "Failed to save booking" }, { status: 500 })
    }

    // Send email notification
    await resend.emails.send({
      from: 'Expandly <notifications@yourdomain.com>',
      to: 'expandly.site@gmail.com', 
      subject: 'New Booking Request',
      html: `
        <h1>New Booking Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Message:</strong> ${message || 'Not provided'}</p>
        <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/bookings">View in Dashboard</a></p>
      `
    })

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'Expandly <notifications@yourdomain.com>',
      to: email,
      subject: 'Consultation Booking Confirmation',
      html: `
        <h1>Booking Confirmation</h1>
        <p>Dear ${name},</p>
        <p>Thank you for booking a consultation with Expandly. We've received your request for a call on ${date} at ${time}.</p>
        <p>We'll be in touch shortly to confirm your appointment.</p>
        <p>Best regards,<br>Expandly Team</p>
      `
    })

    return NextResponse.json({
      success: true,
      message: "Booking confirmed",
      booking: data[0]
    }, { status: 200 })
  } catch (error) {
    console.error("Error processing booking:", error)
    return NextResponse.json({ error: "Failed to process your booking" }, { status: 500 })
  }
}