import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLang } from "@/context/language-context";
import { Seo } from "@/seo/Seo";

const ruContent = {
  title: "Политика обработки персональных данных",
  subtitle: "ИП Мурашко Андрей Антонович (Comfortline.by)",
  sections: [
    {
      heading: "1. Общие положения",
      body: `Настоящая Политика обработки персональных данных (далее — Политика) определяет порядок обработки персональных данных пользователей сайта Comfortline.by (далее — Сайт).

Политика разработана в соответствии с Законом Республики Беларусь от 7 мая 2021 г. № 99-З «О защите персональных данных».

Оператор персональных данных:
ИП Мурашко Андрей Антонович
УНП: 193255422
Адрес: Республика Беларусь, г. Минск, ул. Фёдорова, 19-10
Email: info@comfortline.by
Телефон: +375 (44) 762-06-49`,
    },
    {
      heading: "2. Персональные данные, которые обрабатываются",
      body: `Оператор может обрабатывать следующие данные:
• имя
• номер телефона
• адрес электронной почты
• информация о поездке (маршрут, дата, время)
• IP-адрес, cookie и технические данные`,
    },
    {
      heading: "3. Цели обработки",
      body: `Персональные данные обрабатываются для:
• оформления и выполнения заказов трансфера
• связи с клиентом
• предоставления информации об услугах
• улучшения работы Сайта
• маркетинга и рекламы (при наличии отдельного согласия)`,
    },
    {
      heading: "4. Правовые основания",
      body: `Обработка осуществляется на основании:
• согласия субъекта персональных данных
• заключения и исполнения договора
• требований законодательства Республики Беларусь`,
    },
    {
      heading: "5. Получение согласия",
      body: `Пользователь предоставляет согласие путем:
• заполнения форм на Сайте
• установки отметки (чекбокса) перед отправкой данных`,
    },
    {
      heading: "6. Передача данных третьим лицам",
      body: `Персональные данные могут передаваться:
• водителям и партнёрам для выполнения заказа
• сервисам аналитики, таким как Google Analytics
• рекламным системам, таким как Google Ads
• государственным органам в случаях, предусмотренных законодательством`,
    },
    {
      heading: "7. Трансграничная передача данных",
      body: "При использовании зарубежных сервисов возможна трансграничная передача персональных данных с соблюдением требований законодательства Республики Беларусь.",
    },
    {
      heading: "8. Срок хранения данных",
      body: `Персональные данные хранятся:
• не дольше, чем это необходимо для целей обработки
• либо в сроки, установленные законодательством`,
    },
    {
      heading: "9. Права субъекта персональных данных",
      body: `Пользователь имеет право:
• получать информацию о своих персональных данных
• требовать их изменения, блокирования или удаления
• отозвать согласие на обработку
• обжаловать действия оператора

Для реализации прав необходимо направить запрос на: info@comfortline.by`,
    },
    {
      heading: "10. Защита персональных данных",
      body: "Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного доступа, утраты, изменения или распространения.",
    },
    {
      heading: "11. Использование cookie",
      body: `Сайт использует cookie-файлы для:
• корректной работы
• анализа поведения пользователей
• персонализации рекламы

Пользователь может отключить cookie в настройках браузера.`,
    },
    {
      heading: "12. Заключительные положения",
      body: "Оператор вправе вносить изменения в настоящую Политику. Актуальная версия всегда доступна на Сайте.",
    },
  ],
};

const enContent = {
  title: "Personal Data Processing Policy",
  subtitle: "Sole Proprietor Murashko Andrei Antonovich (Comfortline.by)",
  sections: [
    {
      heading: "1. General Provisions",
      body: `This Personal Data Processing Policy (hereinafter — the Policy) defines the procedure for processing personal data of users of the Comfortline.by website (hereinafter — the Website).

The Policy was developed in accordance with the Law of the Republic of Belarus dated May 7, 2021, No. 99-Z "On the Protection of Personal Data".

Data Controller:
Sole Proprietor Murashko Andrei Antonovich
UNP: 193255422
Address: Republic of Belarus, Minsk, Fyodorova St., 19-10
Email: info@comfortline.by
Phone: +375 (44) 762-06-49`,
    },
    {
      heading: "2. Personal Data Processed",
      body: `The Controller may process the following data:
• Name
• Phone number
• Email address
• Trip information (route, date, time)
• IP address, cookies, and technical data`,
    },
    {
      heading: "3. Purposes of Processing",
      body: `Personal data is processed for:
• Processing and fulfilling transfer orders
• Communicating with clients
• Providing information about services
• Improving the Website
• Marketing and advertising (with separate consent)`,
    },
    {
      heading: "4. Legal Grounds",
      body: `Processing is carried out on the basis of:
• Consent of the data subject
• Conclusion and performance of a contract
• Requirements of the legislation of the Republic of Belarus`,
    },
    {
      heading: "5. Obtaining Consent",
      body: `The user gives consent by:
• Filling out forms on the Website
• Checking the checkbox before submitting data`,
    },
    {
      heading: "6. Transfer of Data to Third Parties",
      body: `Personal data may be shared with:
• Drivers and partners for order fulfillment
• Analytics services such as Google Analytics
• Advertising platforms such as Google Ads
• Government authorities in cases provided by law`,
    },
    {
      heading: "7. Cross-Border Data Transfer",
      body: "When using foreign services, cross-border transfer of personal data is possible in compliance with the requirements of the legislation of the Republic of Belarus.",
    },
    {
      heading: "8. Data Retention Period",
      body: `Personal data is stored:
• No longer than necessary for the purposes of processing
• Or for the periods established by law`,
    },
    {
      heading: "9. Rights of the Data Subject",
      body: `The user has the right to:
• Receive information about their personal data
• Request its modification, blocking, or deletion
• Withdraw consent for processing
• Appeal against the actions of the Controller

To exercise your rights, please send a request to: info@comfortline.by`,
    },
    {
      heading: "10. Protection of Personal Data",
      body: "The Controller takes the necessary legal, organizational, and technical measures to protect personal data from unauthorized access, loss, modification, or disclosure.",
    },
    {
      heading: "11. Use of Cookies",
      body: `The Website uses cookies for:
• Proper functionality
• Analysis of user behavior
• Ad personalization

The user may disable cookies in their browser settings.`,
    },
    {
      heading: "12. Final Provisions",
      body: "The Controller reserves the right to make changes to this Policy. The current version is always available on the Website.",
    },
  ],
};

export default function PrivacyPolicyPage() {
  const { lang } = useLang();
  const content = lang === "ru" ? ruContent : enContent;

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Seo
        titleRu="Политика конфиденциальности | ComfortLine"
        titleEn="Privacy Policy | ComfortLine"
        descRu="Политика конфиденциальности ComfortLine: как мы обрабатываем персональные данные клиентов трансфера и обеспечиваем их защиту."
        descEn="ComfortLine privacy policy — how we process and protect personal data of our transfer customers."
        pathRu="/privacy"
        pathEn="/privacy"
      />
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {content.title}
            </h1>
            <p className="text-muted-foreground">{content.subtitle}</p>
            <div className="w-16 h-1 bg-primary rounded-full mt-6" />
          </div>

          <div className="space-y-8">
            {content.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-lg font-bold text-primary mb-3">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
