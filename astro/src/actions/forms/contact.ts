// src/actions/forms/contact.ts
import { Resend } from "resend";
import { defineAction } from "astro:actions";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const contactForm = defineAction({
  accept: "form",
  handler: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const message = formData.get("message")?.toString();
    const honeypot = formData.get("bot-field");

    if (honeypot) return { error: "Bot detected." };
    if (!name || !email || !message) return { error: "Missing fields" };

    try {
      await resend.emails.send({
        from: "Contact Form <noreply@dontasmith.com>",
        to: "contact@dontasmith.com",
        subject: `New message from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
        `,
      });

      return { success: true };
    } catch (err) {
      console.error(err);
      return { error: "Failed to send message." };
    }
  },
});
