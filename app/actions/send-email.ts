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
        const arrivalText = arrival ? new Date(arrival).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : "Not specified";
        const guestsText = guests || "Not specified";

        const { data, error } = await resend.emails.send({
            from: "reservations@evansvilleinn.com",
            to: "reservations@evansvilleinn.com",
            replyTo: email,
            subject: `New Reservation Inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nArrival Date: ${arrivalText}\nGuests: ${guestsText}\n\nMessage:\n${message}`,
            html: `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Reservation Inquiry</title>
    <!--[if mso]>
    <style type="text/css">
        body, table, td, p, a { font-family: Arial, sans-serif !important; }
    </style>
    <![endif]-->
    <style type="text/css">
        /* Responsive adjustments for mobile clients */
        @media screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                max-width: 100% !important;
            }
            .content-padding {
                padding: 30px 20px 20px 20px !important;
            }
            .summary-table td {
                padding: 12px 15px !important;
            }
            .label-cell {
                width: 120px !important;
                font-size: 13px !important;
            }
            .value-cell {
                font-size: 13px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">

    <!-- Main Wrapper Table -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="background-color: #f8fafc; table-layout: fixed;">
        <tr>
            <td align="center" style="padding: 40px 10px;">
                
                <!-- Email Container -->
                <table class="email-container" border="0" cellpadding="0" cellspacing="0" width="600" role="presentation" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0; width: 100%; max-width: 600px;">
                    
                    <!-- Header Block -->
                    <tr>
                        <td align="center" style="background-color: #0b132b; padding: 45px 20px; text-align: center;">
                            <h1 style="margin: 0; font-family: Georgia, Cambria, 'Times New Roman', Times, serif; color: #ffffff; font-size: 30px; font-weight: normal; letter-spacing: 0.5px; line-height: 1.3;">
                                New Reservation Inquiry
                            </h1>
                            <p style="margin: 12px 0 0 0; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; color: #8da9c4; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">
                                System Notification
                            </p>
                        </td>
                    </tr>

                    <!-- Body Content Block -->
                    <tr>
                        <td class="content-padding" style="padding: 40px 50px 30px 50px;">
                            
                            <!-- Section Title -->
                            <h2 style="margin: 0 0 12px 0; font-family: Georgia, Cambria, 'Times New Roman', Times, serif; color: #0b132b; font-size: 22px; font-weight: bold;">
                                Guest Details
                            </h2>
                            
                            <!-- Decorative Divider -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="margin-bottom: 25px;">
                                <tr>
                                    <td height="2" style="background-color: #2563eb; width: 40px; font-size: 0; line-height: 0;">&nbsp;</td>
                                    <td height="1" style="background-color: #e2e8f0; font-size: 0; line-height: 0;">&nbsp;</td>
                                </tr>
                            </table>

                            <!-- Reservation Summary Table -->
                            <table class="summary-table" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="width: 100%; border-collapse: separate; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; margin-bottom: 30px; background-color: #ffffff;">
                                
                                <!-- Table Main Header -->
                                <tr>
                                    <td colspan="2" style="padding: 16px 20px; background-color: #ffffff; border-bottom: 1px solid #e2e8f0; vertical-align: middle;">
                                        <span style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; color: #0b132b; font-size: 15px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">
                                            Reservation Summary
                                        </span>
                                    </td>
                                </tr>

                                <!-- Row 1: Guest Name -->
                                <tr>
                                    <td class="label-cell" style="width: 160px; padding: 14px 20px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; color: #1e293b; vertical-align: middle;">Guest Name</td>
                                    <td class="value-cell" style="padding: 14px 20px; background-color: #ffffff; border-bottom: 1px solid #e2e8f0; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px; color: #1e293b; font-weight: 500; vertical-align: middle;">${name}</td>
                                </tr>

                                <!-- Row 2: Email Address -->
                                <tr>
                                    <td class="label-cell" style="width: 160px; padding: 14px 20px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; color: #1e293b; vertical-align: middle;">Email Address</td>
                                    <td class="value-cell" style="padding: 14px 20px; background-color: #ffffff; border-bottom: 1px solid #e2e8f0; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px; vertical-align: middle;">
                                        <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${email}</a>
                                    </td>
                                </tr>

                                <!-- Row 3: Arrival Date -->
                                <tr>
                                    <td class="label-cell" style="width: 160px; padding: 14px 20px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; color: #1e293b; vertical-align: middle;">Arrival Date</td>
                                    <td class="value-cell" style="padding: 14px 20px; background-color: #ffffff; border-bottom: 1px solid #e2e8f0; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px; color: #1e293b; font-weight: 500; vertical-align: middle;">${arrivalText}</td>
                                </tr>

                                <!-- Row 4: Number of Guests -->
                                <tr>
                                    <td class="label-cell" style="width: 160px; padding: 14px 20px; background-color: #f8fafc; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; color: #1e293b; vertical-align: middle;">Number of Guests</td>
                                    <td class="value-cell" style="padding: 14px 20px; background-color: #ffffff; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px; color: #1e293b; font-weight: 500; vertical-align: middle;">${guestsText}</td>
                                </tr>

                            </table>

                            <!-- Message / Requests Container Box -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
                                <tr>
                                    <td style="padding: 20px 24px;">
                                        <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: 700; color: #64748b; letter-spacing: 1px; text-transform: uppercase;">
                                            Message / Requests
                                        </p>
                                        <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.6; font-weight: 400; white-space: pre-line;">
                                            ${message}
                                        </p>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>
                    
                    <!-- Footer Spacing -->
                    <tr>
                        <td style="padding-bottom: 20px;"></td>
                    </tr>
                </table>

                <!-- Institutional Footer -->
                <table border="0" cellpadding="0" cellspacing="0" width="600" role="presentation" style="width: 100%; max-width: 600px; text-align: center;">
                    <tr>
                        <td style="padding: 20px 10px 0 10px; font-size: 12px; color: #94a3b8; line-height: 1.5;">
                            This is an automated operational notification generated by your website's reservation engine. Please do not reply directly to this system message.
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>

</body>
</html>
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
