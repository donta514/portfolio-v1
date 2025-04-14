// src/pages/api/contact.ts
export const prerender = false;


import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const message = formData.get("message")?.toString();
  const honeypot = formData.get("website")?.toString();

  if (honeypot) {
    return new Response("Spam detected", { status: 400 });
  }

  if (!name || !email || !message) {
    return new Response("Missing fields", { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "donta.jamel.smith@gmail.com",
      subject: `Contact Form Submission`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return new Response("Message sent!", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Error sending message", { status: 500 });
  }
};
