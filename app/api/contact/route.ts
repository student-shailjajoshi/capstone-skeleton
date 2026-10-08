import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_RECEIVER_EMAIL!],
      subject: `New portfolio message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact error:", error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}