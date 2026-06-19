"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const arrival = formData.get("arrival") as string;
  const guests = formData.get("guests") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Name, email, and message are required." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "reservations@evansvilleinn.com",
      to: "reservations@evansvilleinn.com",
      replyTo: email,
      subject: `New Reservation Inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Arrival Date: ${arrival || "N/A"}
Guests: ${guests || "N/A"}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { error: error.message || "Failed to send email." };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Failed to send email:", err);
    return { error: "Failed to send email due to an unexpected error." };
  }
}
