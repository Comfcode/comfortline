import { Router, type IRouter } from "express";
import { Resend } from "resend";

const router: IRouter = Router();
const resend = new Resend(process.env["RESEND_API_KEY"]);

const TO_EMAIL = "vitali.restor@gmail.com";

router.post("/booking", async (req, res) => {
  const { from, to, date, adults, children, babies, pets, suitcases, vehicleClass, lang } = req.body;

  const isRu = lang === "ru";
  const classMap: Record<string, string> = {
    any: isRu ? "Любой" : "Any",
    comfort: isRu ? "Комфорт" : "Comfort",
    business: isRu ? "Бизнес" : "Business",
    premium: isRu ? "Премиум" : "Premium",
  };

  const subject = isRu
    ? `Новая заявка на трансфер: ${from} → ${to}`
    : `New transfer request: ${from} → ${to}`;

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #B59C73; border-bottom: 2px solid #B59C73; padding-bottom: 8px;">
        ${isRu ? "Новая заявка на трансфер" : "New Transfer Request"}
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px 16px; font-weight: bold; width: 40%;">${isRu ? "Откуда" : "From"}</td>
          <td style="padding: 10px 16px;">${from || "—"}</td>
        </tr>
        <tr>
          <td style="padding: 10px 16px; font-weight: bold;">${isRu ? "Куда" : "To"}</td>
          <td style="padding: 10px 16px;">${to || "—"}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px 16px; font-weight: bold;">${isRu ? "Дата" : "Date"}</td>
          <td style="padding: 10px 16px;">${date || "—"}</td>
        </tr>
        <tr>
          <td style="padding: 10px 16px; font-weight: bold;">${isRu ? "Взрослые" : "Adults"}</td>
          <td style="padding: 10px 16px;">${adults ?? 1}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px 16px; font-weight: bold;">${isRu ? "Дети (2–12 лет)" : "Children (2–12)"}</td>
          <td style="padding: 10px 16px;">${children ?? 0}</td>
        </tr>
        <tr>
          <td style="padding: 10px 16px; font-weight: bold;">${isRu ? "Младенцы" : "Babies"}</td>
          <td style="padding: 10px 16px;">${babies ?? 0}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px 16px; font-weight: bold;">${isRu ? "Питомцы" : "Pets"}</td>
          <td style="padding: 10px 16px;">${pets ?? 0}</td>
        </tr>
        <tr>
          <td style="padding: 10px 16px; font-weight: bold;">${isRu ? "Чемоданы" : "Suitcases"}</td>
          <td style="padding: 10px 16px;">${suitcases ?? 1}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px 16px; font-weight: bold;">${isRu ? "Класс" : "Class"}</td>
          <td style="padding: 10px 16px;">${classMap[vehicleClass] ?? vehicleClass}</td>
        </tr>
      </table>
      <p style="margin-top: 24px; color: #888; font-size: 12px;">
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
