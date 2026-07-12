from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    Image,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "brand"
TMP = ROOT / "tmp" / "pdfs"
OUT.mkdir(parents=True, exist_ok=True)
TMP.mkdir(parents=True, exist_ok=True)

CHARCOAL = colors.HexColor("#0E0D13")
SURFACE = colors.HexColor("#1C1B24")
GOLD = colors.HexColor("#B59C73")
GOLD_LIGHT = colors.HexColor("#D4B07A")
WARM_WHITE = colors.HexColor("#F5F0E8")
PAPER = colors.HexColor("#F8F7F5")
INK = colors.HexColor("#131218")
MUTED = colors.HexColor("#69636F")
PAGE_W, PAGE_H = A4

FONT_REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
pdfmetrics.registerFont(TTFont("ComfortSans", FONT_REG))
pdfmetrics.registerFont(TTFont("ComfortSans-Bold", FONT_BOLD))

COPY = {
    "ru": {
        "name": "Русский",
        "cover": "Спокойная уверенность\nв каждой поездке",
        "intro": "Официальная система визуальной и словесной идентичности ComfortLine",
        "strategy": "01  Стратегия бренда",
        "promise": "Обещание",
        "promise_text": "Личная поездка без неопределённости - от двери до двери.",
        "character": "Характер",
        "character_text": "Спокойный, надёжный, внимательный, международный.",
        "difference": "Отличие",
        "difference_text": "Человеческое сопровождение там, где маршрут сложнее обычного такси.",
        "logo": "02  Логотип и знак",
        "logo_text": "Знак - направленная вперёд лента в форме C. Он выражает движение, маршрут и личное сопровождение. Горизонтальная версия является основной.",
        "clear": "Защитное поле",
        "clear_text": "Не менее высоты заглавной буквы wordmark со всех сторон.",
        "sizes": "Минимальные размеры",
        "sizes_text": "Цифровой логотип: 120 px. Знак: 24 px. Печать: 32 мм и 7 мм соответственно.",
        "color": "03  Цветовая система",
        "color_text": "Цвета применяются по смысловым ролям. Золото обозначает действие и премиальное внимание; не используйте его для длинного текста.",
        "type": "04  Типографика",
        "type_text": "Montserrat - основной шрифт. Используйте 800 для дисплейных заголовков, 700 для заголовков, 600 для подзаголовков и кнопок, 400 для основного текста.",
        "voice": "05  Голос бренда",
        "do": "Использовать",
        "do_text": "Конкретные факты, спокойные короткие предложения, ясные действия и честное описание переменных условий границы.",
        "dont": "Не использовать",
        "dont_text": "Непроверенные обещания, крикливый люкс, давление, превосходные степени и повторение ключевых слов.",
        "photo": "06  Фотостиль",
        "photo_text": "Реальные автомобили и водители, естественный свет, спокойный цвет и контекст маршрута. Избегайте стокового люкса и чрезмерной обработки.",
        "rules": "07  Правила применения",
        "rules_text": "Не растягивать, не поворачивать, не перекрашивать, не добавлять эффекты, не менять композицию и не размещать на шумном фоне.",
        "access": "08  Доступность",
        "access_text": "Интерфейс следует WCAG 2.2 AA: контраст 4.5:1 для обычного текста и 3:1 для крупного текста и важных элементов управления.",
        "assets": "09  Форматы файлов",
        "assets_text": "SVG - цифровой мастер; PDF/EPS - печать; PNG - прозрачный растр; JPEG - фиксированный фон; WebP - компактная веб-доставка.",
    },
    "en": {
        "name": "English",
        "cover": "Quiet confidence\nin every journey",
        "intro": "The official ComfortLine visual and verbal identity system",
        "strategy": "01  Brand strategy", "promise": "Promise", "promise_text": "A personal journey without uncertainty, door to door.",
        "character": "Character", "character_text": "Calm, dependable, attentive and international.",
        "difference": "Difference", "difference_text": "Human guidance where the journey is more complex than an ordinary taxi.",
        "logo": "02  Logo and symbol", "logo_text": "The symbol is a forward-moving ribbon shaped as a C. It represents motion, route and personal guidance. The horizontal lockup is primary.",
        "clear": "Clear space", "clear_text": "At least one wordmark cap-height on every side.",
        "sizes": "Minimum sizes", "sizes_text": "Digital lockup: 120 px. Symbol: 24 px. Print: 32 mm and 7 mm respectively.",
        "color": "03  Color system", "color_text": "Colors are assigned by semantic role. Gold signals action and premium attention; do not use it for long-form text.",
        "type": "04  Typography", "type_text": "Montserrat is the primary family. Use 800 for display, 700 for headings, 600 for subheadings and controls, and 400 for body copy.",
        "voice": "05  Brand voice", "do": "Use", "do_text": "Concrete facts, calm short sentences, clear next actions and honest descriptions of variable border conditions.",
        "dont": "Avoid", "dont_text": "Unverified promises, flashy luxury, pressure, superlatives and keyword repetition.",
        "photo": "06  Photography", "photo_text": "Real vehicles and drivers, natural light, restrained color and journey context. Avoid stock luxury and excessive processing.",
        "rules": "07  Application rules", "rules_text": "Do not stretch, rotate, recolor, add effects, rearrange or place the logo on a busy background.",
        "access": "08  Accessibility", "access_text": "Interfaces follow WCAG 2.2 AA: 4.5:1 contrast for normal text and 3:1 for large text and essential controls.",
        "assets": "09  File formats", "assets_text": "SVG is the digital master; PDF/EPS for print; PNG for transparent raster; JPEG for fixed backgrounds; WebP for compact web delivery.",
    },
    "pl": {
        "name": "Polski", "cover": "Spokojna pewność\nw każdej podróży", "intro": "Oficjalny system identyfikacji wizualnej i językowej ComfortLine",
        "strategy": "01  Strategia marki", "promise": "Obietnica", "promise_text": "Indywidualna podróż bez niepewności - od drzwi do drzwi.",
        "character": "Charakter", "character_text": "Spokojny, niezawodny, uważny i międzynarodowy.",
        "difference": "Wyróżnik", "difference_text": "Ludzkie wsparcie tam, gdzie podróż jest bardziej złożona niż zwykła taksówka.",
        "logo": "02  Logo i symbol", "logo_text": "Symbol to skierowana do przodu wstęga w kształcie litery C. Oznacza ruch, trasę i osobistą opiekę. Podstawową wersją jest układ poziomy.",
        "clear": "Pole ochronne", "clear_text": "Co najmniej wysokość wielkiej litery logotypu z każdej strony.",
        "sizes": "Minimalne rozmiary", "sizes_text": "Logo cyfrowe: 120 px. Symbol: 24 px. Druk: odpowiednio 32 mm i 7 mm.",
        "color": "03  System kolorów", "color_text": "Kolory mają role semantyczne. Złoto oznacza działanie i wyjątkową uwagę; nie stosuj go w długim tekście.",
        "type": "04  Typografia", "type_text": "Montserrat jest krojem podstawowym. Stosuj 800 w display, 700 w nagłówkach, 600 w śródtytułach i kontrolkach oraz 400 w tekście głównym.",
        "voice": "05  Głos marki", "do": "Stosuj", "do_text": "Konkretne fakty, spokojne krótkie zdania, jasne działania i uczciwe opisy zmiennych warunków granicznych.",
        "dont": "Unikaj", "dont_text": "Niepotwierdzonych obietnic, krzykliwego luksusu, presji, superlatyw i powtarzania słów kluczowych.",
        "photo": "06  Fotografia", "photo_text": "Prawdziwe pojazdy i kierowcy, naturalne światło, stonowany kolor i kontekst podróży. Unikaj zdjęć stockowych i nadmiernej obróbki.",
        "rules": "07  Zasady stosowania", "rules_text": "Nie rozciągaj, nie obracaj, nie zmieniaj kolorów, nie dodawaj efektów ani nie umieszczaj logo na chaotycznym tle.",
        "access": "08  Dostępność", "access_text": "Interfejs spełnia WCAG 2.2 AA: kontrast 4,5:1 dla zwykłego tekstu i 3:1 dla dużego tekstu oraz ważnych kontrolek.",
        "assets": "09  Formaty plików", "assets_text": "SVG to wzorzec cyfrowy; PDF/EPS do druku; PNG jako przezroczysty raster; JPEG dla stałego tła; WebP do lekkiej publikacji w sieci.",
    },
    "fr": {
        "name": "Français", "cover": "Une confiance sereine\nà chaque trajet", "intro": "Le système officiel d'identité visuelle et éditoriale de ComfortLine",
        "strategy": "01  Stratégie de marque", "promise": "Promesse", "promise_text": "Un trajet personnel sans incertitude, de porte à porte.",
        "character": "Caractère", "character_text": "Calme, fiable, attentif et international.",
        "difference": "Différence", "difference_text": "Un accompagnement humain lorsque le trajet est plus complexe qu'une course de taxi ordinaire.",
        "logo": "02  Logo et symbole", "logo_text": "Le symbole est un ruban tourné vers l'avant en forme de C. Il exprime le mouvement, l'itinéraire et l'accompagnement personnel. La version horizontale est prioritaire.",
        "clear": "Zone de protection", "clear_text": "Au moins une hauteur de capitale du logotype sur chaque côté.",
        "sizes": "Tailles minimales", "sizes_text": "Logo numérique : 120 px. Symbole : 24 px. Impression : respectivement 32 mm et 7 mm.",
        "color": "03  Système chromatique", "color_text": "Les couleurs suivent des rôles sémantiques. L'or signale l'action et l'attention premium ; ne l'utilisez pas pour les textes longs.",
        "type": "04  Typographie", "type_text": "Montserrat est la police principale. Utilisez 800 pour le display, 700 pour les titres, 600 pour les sous-titres et contrôles, et 400 pour le corps.",
        "voice": "05  Voix de marque", "do": "À faire", "do_text": "Des faits précis, des phrases courtes et calmes, des actions claires et une description honnête des conditions variables à la frontière.",
        "dont": "À éviter", "dont_text": "Les promesses non vérifiées, le luxe tapageur, la pression, les superlatifs et la répétition de mots-clés.",
        "photo": "06  Photographie", "photo_text": "Véhicules et chauffeurs réels, lumière naturelle, couleurs sobres et contexte du trajet. Évitez le luxe de banque d'images et les retouches excessives.",
        "rules": "07  Règles d'application", "rules_text": "Ne pas étirer, pivoter, recolorer, ajouter d'effets, réorganiser ni placer le logo sur un fond chargé.",
        "access": "08  Accessibilité", "access_text": "Les interfaces suivent WCAG 2.2 AA : contraste de 4,5:1 pour le texte normal et de 3:1 pour le grand texte et les contrôles essentiels.",
        "assets": "09  Formats de fichiers", "assets_text": "SVG est le master numérique ; PDF/EPS pour l'impression ; PNG pour la transparence ; JPEG pour un fond fixe ; WebP pour une diffusion web légère.",
    },
}


def styles():
    base = getSampleStyleSheet()
    return {
        "cover": ParagraphStyle("cover", fontName="ComfortSans-Bold", fontSize=27, leading=34, textColor=WARM_WHITE, spaceAfter=8 * mm),
        "intro": ParagraphStyle("intro", fontName="ComfortSans", fontSize=10.5, leading=16, textColor=colors.HexColor("#B7B1BA")),
        "h1": ParagraphStyle("h1", fontName="ComfortSans-Bold", fontSize=18, leading=23, textColor=INK, spaceAfter=6 * mm),
        "h2": ParagraphStyle("h2", fontName="ComfortSans-Bold", fontSize=11, leading=15, textColor=GOLD, spaceAfter=2 * mm),
        "body": ParagraphStyle("body", fontName="ComfortSans", fontSize=9.3, leading=14.5, textColor=MUTED, spaceAfter=5 * mm),
        "small": ParagraphStyle("small", fontName="ComfortSans", fontSize=7.6, leading=11, textColor=MUTED),
        "center": ParagraphStyle("center", fontName="ComfortSans-Bold", fontSize=8, leading=11, textColor=INK, alignment=TA_CENTER),
    }


def header_footer(canvas, doc, lang):
    canvas.saveState()
    is_cover = doc.page == 1
    if is_cover:
        canvas.setFillColor(CHARCOAL)
        canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    canvas.setStrokeColor(colors.HexColor("#403C45") if is_cover else colors.HexColor("#DED9D2"))
    canvas.line(18 * mm, 16 * mm, PAGE_W - 18 * mm, 16 * mm)
    canvas.setFont("ComfortSans", 7)
    canvas.setFillColor(colors.HexColor("#9B959F") if is_cover else MUTED)
    canvas.drawString(18 * mm, 10 * mm, f"COMFORTLINE  /  BRAND GUIDELINES  /  {COPY[lang]['name'].upper()}")
    canvas.drawRightString(PAGE_W - 18 * mm, 10 * mm, f"{doc.page}")
    canvas.restoreState()


def make_doc(lang, destination):
    c = COPY[lang]
    s = styles()
    doc = BaseDocTemplate(str(destination), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm, topMargin=18 * mm, bottomMargin=22 * mm, title=f"ComfortLine Brand Guidelines - {c['name']}", author="ComfortLine")
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="content")
    doc.addPageTemplates(PageTemplate(id="standard", frames=[frame], onPage=lambda canvas, d: header_footer(canvas, d, lang)))
    story = []

    # Cover
    story += [Spacer(1, 28 * mm), Image(str(OUT / "comfortline-logo-primary.png"), width=132 * mm, height=37 * mm), Spacer(1, 24 * mm), Paragraph(c["cover"].replace("\n", "<br/>"), s["cover"]), Paragraph(c["intro"], s["intro"]), Spacer(1, 22 * mm)]
    brand_table = Table([["2026.1", c["name"], "RU / EN / PL / FR"]], colWidths=[36 * mm, 62 * mm, 60 * mm], rowHeights=[13 * mm])
    brand_table.setStyle(TableStyle([("BACKGROUND", (0,0), (-1,-1), SURFACE), ("TEXTCOLOR", (0,0), (-1,-1), WARM_WHITE), ("FONTNAME", (0,0), (-1,-1), "ComfortSans-Bold"), ("FONTSIZE", (0,0), (-1,-1), 8), ("ALIGN", (0,0), (-1,-1), "CENTER"), ("VALIGN", (0,0), (-1,-1), "MIDDLE")]))
    story += [brand_table, PageBreak()]

    # Strategy and logo
    story += [Paragraph(c["strategy"], s["h1"])]
    cards = []
    for key in ("promise", "character", "difference"):
        cards.append([Paragraph(c[key], s["h2"]), Paragraph(c[f"{key}_text"], s["body"])])
    table = Table(cards, colWidths=[38 * mm, 122 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([("BACKGROUND", (0,0), (-1,-1), colors.white), ("BOX", (0,0), (-1,-1), .5, colors.HexColor("#DED9D2")), ("INNERGRID", (0,0), (-1,-1), .5, colors.HexColor("#E8E3DD")), ("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 5 * mm), ("RIGHTPADDING", (0,0), (-1,-1), 5 * mm), ("TOPPADDING", (0,0), (-1,-1), 4 * mm), ("BOTTOMPADDING", (0,0), (-1,-1), 3 * mm)]))
    story += [table, Spacer(1, 12 * mm), Paragraph(c["logo"], s["h1"]), Paragraph(c["logo_text"], s["body"]), Image(str(OUT / "comfortline-logo-on-light.png"), width=122 * mm, height=34 * mm), Spacer(1, 5 * mm)]
    pair = Table([[[Paragraph(c["clear"], s["h2"]), Paragraph(c["clear_text"], s["body"])], [Paragraph(c["sizes"], s["h2"]), Paragraph(c["sizes_text"], s["body"])]]], colWidths=[80 * mm, 80 * mm])
    pair.setStyle(TableStyle([("BOX", (0,0), (-1,-1), .5, colors.HexColor("#DED9D2")), ("INNERGRID", (0,0), (-1,-1), .5, colors.HexColor("#DED9D2")), ("VALIGN", (0,0), (-1,-1), "TOP"), ("PADDING", (0,0), (-1,-1), 5 * mm)]))
    story += [pair, PageBreak()]

    # Color and typography
    story += [Paragraph(c["color"], s["h1"]), Paragraph(c["color_text"], s["body"])]
    swatches = [["#0E0D13", "#131218", "#B59C73", "#D4B07A", "#F5F0E8", "#F8F7F5"]]
    swatch_table = Table(swatches, colWidths=[26.6 * mm] * 6, rowHeights=[24 * mm])
    swatch_table.setStyle(TableStyle([("BACKGROUND", (0,0), (0,0), CHARCOAL), ("BACKGROUND", (1,0), (1,0), colors.HexColor("#131218")), ("BACKGROUND", (2,0), (2,0), GOLD), ("BACKGROUND", (3,0), (3,0), GOLD_LIGHT), ("BACKGROUND", (4,0), (4,0), WARM_WHITE), ("BACKGROUND", (5,0), (5,0), PAPER), ("TEXTCOLOR", (0,0), (3,0), colors.white), ("TEXTCOLOR", (4,0), (5,0), INK), ("FONTNAME", (0,0), (-1,-1), "ComfortSans-Bold"), ("FONTSIZE", (0,0), (-1,-1), 6.5), ("ALIGN", (0,0), (-1,-1), "CENTER"), ("VALIGN", (0,0), (-1,-1), "MIDDLE")]))
    story += [swatch_table, Spacer(1, 13 * mm), Paragraph(c["type"], s["h1"]), Paragraph(c["type_text"], s["body"]), Paragraph("Aa  Montserrat", ParagraphStyle("typeHero", fontName="ComfortSans-Bold", fontSize=32, leading=38, textColor=GOLD, spaceAfter=7 * mm))]
    type_rows = [["DISPLAY / 800", "Quiet confidence"], ["HEADING / 700", "ComfortLine"], ["SUBHEADING / 600", "Door-to-door transfer"], ["BODY / 400", "Clear, concise and generous in line height."]]
    typetable = Table(type_rows, colWidths=[42 * mm, 118 * mm], rowHeights=[14 * mm] * 4)
    typetable.setStyle(TableStyle([("BOX", (0,0), (-1,-1), .5, colors.HexColor("#DED9D2")), ("INNERGRID", (0,0), (-1,-1), .5, colors.HexColor("#E8E3DD")), ("FONTNAME", (0,0), (0,-1), "ComfortSans-Bold"), ("FONTNAME", (1,0), (1,-1), "ComfortSans"), ("FONTSIZE", (0,0), (-1,-1), 8), ("TEXTCOLOR", (0,0), (0,-1), GOLD), ("TEXTCOLOR", (1,0), (1,-1), INK), ("VALIGN", (0,0), (-1,-1), "MIDDLE"), ("LEFTPADDING", (0,0), (-1,-1), 4 * mm)]))
    story += [typetable, PageBreak()]

    # Voice, photo, rules, accessibility, formats
    story += [Paragraph(c["voice"], s["h1"])]
    voice = Table([[Paragraph(c["do"], s["h2"]), Paragraph(c["dont"], s["h2"])], [Paragraph(c["do_text"], s["body"]), Paragraph(c["dont_text"], s["body"])]], colWidths=[80 * mm, 80 * mm])
    voice.setStyle(TableStyle([("BACKGROUND", (0,0), (0,-1), colors.HexColor("#F0F8F3")), ("BACKGROUND", (1,0), (1,-1), colors.HexColor("#FFF2F1")), ("BOX", (0,0), (-1,-1), .5, colors.HexColor("#DED9D2")), ("INNERGRID", (0,0), (-1,-1), .5, colors.HexColor("#DED9D2")), ("VALIGN", (0,0), (-1,-1), "TOP"), ("PADDING", (0,0), (-1,-1), 5 * mm)]))
    story += [voice, Spacer(1, 9 * mm)]
    for heading, body in [(c["photo"], c["photo_text"]), (c["rules"], c["rules_text"]), (c["access"], c["access_text"]), (c["assets"], c["assets_text"])]:
        story += [KeepTogether([Paragraph(heading, s["h1"]), Paragraph(body, s["body"])])]
    story += [Spacer(1, 5 * mm), Paragraph("comfortline.by  /  info@comfortline.by  /  +375 (44) 762-06-49", ParagraphStyle("contact", fontName="ComfortSans-Bold", fontSize=8, leading=12, textColor=GOLD, alignment=TA_CENTER))]

    doc.build(story)


def main():
    editions = []
    for lang in ("ru", "en", "pl", "fr"):
        output = OUT / f"comfortline-brand-guidelines-{lang}.pdf"
        make_doc(lang, output)
        editions.append(output)

    writer = PdfWriter()
    for edition in editions:
        for page in PdfReader(str(edition)).pages:
            writer.add_page(page)
    writer.add_metadata({"/Title": "ComfortLine Brand Guidelines - RU / EN / PL / FR", "/Author": "ComfortLine"})
    with open(OUT / "comfortline-brand-guidelines-multilingual.pdf", "wb") as handle:
        writer.write(handle)


if __name__ == "__main__":
    main()
