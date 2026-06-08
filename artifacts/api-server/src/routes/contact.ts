import { Router, type IRouter } from "express";
import { Resend } from "resend";

const router: IRouter = Router();
const resend = new Resend(process.env["RESEND_API_KEY"]);

const TO_EMAIL = "info@comfortline.by";

router.post("/contact", async (req, res) => {
  const { name, phone, email, message, lang } = req.body;

  const isRu = lang === "ru";

  const subject = isRu
    ? `Новое сообщение с сайта от ${name || "—"}`
    : `New contact message from ${name || "—"}`;

  const html = `
    <div style="font-family: sans-serif; max-width: 620px; margin: 0 auto; color: #1a1a1a;">
      <h2 style="color: #B59C73; border-bottom: 2px solid #B59C73; padding-bottom: 8px; margin-top: 0;">
        ${isRu ? "Новое обращение с сайта" : "New Contact Form Submission"}
      </h2>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px 16px; font-weight: bold; width: 40%; border: 1px solid #eee;">${isRu ? "Имя" : "Name"}</td>
          <td style="padding: 10px 16px; border: 1px solid #eee;">${name || "—"}</td>
        </tr>
        <tr>
          <td style="padding: 10px 16px; font-weight: bold; border: 1px solid #eee;">${isRu ? "Телефон" : "Phone"}</td>
          <td style="padding: 10px 16px; border: 1px solid #eee;">${phone || "—"}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px 16px; font-weight: bold; border: 1px solid #eee;">Email</td>
          <td style="padding: 10px 16px; border: 1px solid #eee;">${email || "—"}</td>
        </tr>
        ${message ? `
        <tr>
          <td style="padding: 10px 16px; font-weight: bold; border: 1px solid #eee;">${isRu ? "Сообщение" : "Message"}</td>
          <td style="padding: 10px 16px; border: 1px solid #eee;">${message}</td>
        </tr>
        ` : ""}
      </table>

      <p style="margin-top: 24px; color: #aaa; font-size: 12px;">
        ComfortLine Transfer — comfortline.by
      </p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: "ComfortLine <onboarding@resend.dev>",
      to: [TO_EMAIL],
      subject,
      html,
    });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, error: String(err) });
  }
});

export default router;
