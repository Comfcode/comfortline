import { Router, type IRouter } from "express";
import { Resend } from "resend";

const router: IRouter = Router();
const resend = new Resend(process.env["RESEND_API_KEY"]);

const TO_EMAIL = "vitali.restor@gmail.com";

router.post("/booking", async (req, res) => {
  const {
    from, to, date,
    adults, children, babies, pets, suitcases, vehicleClass,
    lang,
    name, email, phone, comment,
  } = req.body;

  const isRu = lang === "ru";
  const classMap: Record<string, string> = {
    any:      isRu ? "Любой"   : "Any",
    comfort:  isRu ? "Комфорт" : "Comfort",
    business: isRu ? "Бизнес"  : "Business",
    premium:  isRu ? "Премиум" : "Premium",
  };

  const subject = isRu
    ? `Новая заявка на трансфер: ${from} → ${to}`
    : `New transfer request: ${from} → ${to}`;

  const html = `
    <div style="font-family: sans-serif; max-width: 620px; margin: 0 auto; color: #1a1a1a;">
      <h2 style="color: #B59C73; border-bottom: 2px solid #B59C73; padding-bottom: 8px; margin-top: 0;">
        ${isRu ? "Новая заявка на трансфер" : "New Transfer Request"}
      </h2>

      <h3 style="margin-bottom: 8px; color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">
        ${isRu ? "Маршрут" : "Route"}
      </h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px 16px; font-weight: bold; width: 40%; border: 1px solid #eee;">${isRu ? "Откуда" : "From"}</td>
          <td style="padding: 10px 16px; border: 1px solid #eee;">${from || "—"}</td>
        </tr>
        <tr>
          <td style="padding: 10px 16px; font-weight: bold; border: 1px solid #eee;">${isRu ? "Куда" : "To"}</td>
          <td style="padding: 10px 16px; border: 1px solid #eee;">${to || "—"}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px 16px; font-weight: bold; border: 1px solid #eee;">${isRu ? "Дата" : "Date"}</td>
          <td style="padding: 10px 16px; border: 1px solid #eee;">${date || "—"}</td>
        </tr>
        <tr>
          <td style="padding: 10px 16px; font-weight: bold; border: 1px solid #eee;">${isRu ? "Взрослые" : "Adults"}</td>
          <td style="padding: 10px 16px; border: 1px solid #eee;">${adults ?? 1}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px 16px; font-weight: bold; border: 1px solid #eee;">${isRu ? "Дети (2–12 лет)" : "Children (2–12)"}</td>
          <td style="padding: 10px 16px; border: 1px solid #eee;">${children ?? 0}</td>
        </tr>
        <tr>
          <td style="padding: 10px 16px; font-weight: bold; border: 1px solid #eee;">${isRu ? "Младенцы" : "Babies"}</td>
          <td style="padding: 10px 16px; border: 1px solid #eee;">${babies ?? 0}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px 16px; font-weight: bold; border: 1px solid #eee;">${isRu ? "Питомцы" : "Pets"}</td>
          <td style="padding: 10px 16px; border: 1px solid #eee;">${pets ?? 0}</td>
        </tr>
        <tr>
          <td style="padding: 10px 16px; font-weight: bold; border: 1px solid #eee;">${isRu ? "Чемоданы" : "Suitcases"}</td>
          <td style="padding: 10px 16px; border: 1px solid #eee;">${suitcases ?? 1}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px 16px; font-weight: bold; border: 1px solid #eee;">${isRu ? "Класс" : "Class"}</td>
          <td style="padding: 10px 16px; border: 1px solid #eee;">${classMap[vehicleClass] ?? vehicleClass}</td>
        </tr>
      </table>

      <h3 style="margin-bottom: 8px; color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">
        ${isRu ? "Контактные данные" : "Contact Details"}
      </h3>
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
        ${comment ? `
        <tr>
          <td style="padding: 10px 16px; font-weight: bold; border: 1px solid #eee;">${isRu ? "Комментарий" : "Comment"}</td>
          <td style="padding: 10px 16px; border: 1px solid #eee;">${comment}</td>
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
