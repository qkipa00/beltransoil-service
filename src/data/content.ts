export type Language = "ru" | "en";

export type StatItem = {
  value: string;
  label: string;
};

export type CardItem = {
  title: string;
  description: string;
};

export type DetailRow = {
  label: string;
  value: string;
  href?: string;
  /** Force LTR for phone numbers so the leading "+" stays put. */
  ltr?: boolean;
  external?: boolean;
};

export type DetailGroup = {
  heading: string;
  rows: DetailRow[];
};

export type SiteContent = {
  language: Language;
  alternateLanguageUrl: string;
  alternateLanguageLabel: string;
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
    keywords: string;
  };
  nav: {
    services: string;
    issuer: string;
    suppliers: string;
    legal: string;
    contacts: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    routeSummary: string;
    stats: StatItem[];
  };
  services: {
    eyebrow: string;
    title: string;
    /** Contains an inline link to the issuer section, so it is rendered as HTML. */
    descriptionHtml: string;
    items: CardItem[];
  };
  issuer: {
    eyebrow: string;
    title: string;
    description: string;
    figures: StatItem[];
    capsTitle: string;
    caps: CardItem[];
    detailGroups: DetailGroup[];
  };
  suppliers: {
    eyebrow: string;
    title: string;
    description: string;
    goods: string[];
    goodsNote: string;
    panelTitle: string;
    panelCount: string;
    panelCaption: string;
    items: string[];
  };
  legal: {
    eyebrow: string;
    title: string;
    badge: string;
    paragraphs: string[];
  };
  contacts: {
    eyebrow: string;
    title: string;
    description: string;
    company: string;
    address: string;
    phone: string;
    email: string;
    details: DetailRow[];
    formTitle: string;
    namePlaceholder: string;
    companyPlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    note: string;
    successTitle: string;
    successMessage: string;
  };
};

/** Legal entity names of the suppliers; not translated in either language. */
const supplierNames = [
  "ООО «ЛУКОЙЛ Белнефтепродукт»",
  "ОДО «АСТОРЕЙДИНГ»",
  "ООО «ТриДКапитал»",
  "ООО «Сервисный центр ВЕСТА»",
  "СООО «БРЕСТВНЕШТРАНС»",
  "СООО «Юнайтед Компани»",
  "ООО «Блок»",
];

const issuerPhone = "+49 2102 5518-0";
const issuerHotline = "+49 800 358 358 3";
const issuerCardStop = "+49 221 8277-9697";
const issuerAssist = "00800 365 24 365";

export const ruContent: SiteContent = {
  language: "ru",
  alternateLanguageUrl: "/en",
  alternateLanguageLabel: "EN",
  seo: {
    title: "БелТрансОйл-Сервис — топливные карты и безналичная заправка в Беларуси",
    description:
      "БелТрансОйл-Сервис помогает иностранным транспортным компаниям организовать безналичную заправку транспорта и сопровождение топливных карт в Беларуси.",
    canonicalPath: "/",
    keywords:
      "топливные карты Беларусь, безналичная заправка Беларусь, заправка грузового транспорта, сопровождение топливных карт, БелТрансОйл-Сервис",
  },
  nav: {
    services: "Услуги",
    issuer: "Эмитент карт",
    suppliers: "Товары и поставщики",
    legal: "Правовая основа",
    contacts: "Контакты",
  },
  hero: {
    badge: "Для международных перевозчиков",
    title: "Топливные карты и безналичная заправка транспорта в Беларуси",
    description:
      "БелТрансОйл-Сервис помогает иностранным транспортным компаниям организовать оплату топлива, сопровождение топливных карт и расчёты с поставщиками на территории Республики Беларусь.",
    primaryCta: "Получить консультацию",
    routeSummary:
      "Сопровождение топливных карт, обработка операций и расчёты с поставщиками для коммерческого транспорта в Беларуси.",
    stats: [
      { value: "B2B", label: "сервис для транспортных компаний" },
      { value: "24/7", label: "заправка коммерческого транспорта" },
      { value: "BY", label: "операции на территории Беларуси" },
    ],
  },
  services: {
    eyebrow: "Услуги",
    title: "Что мы делаем",
    descriptionHtml:
      'Мы сотрудничаем с эмитентом топливных карт <a class="inline-link" href="#issuer">DKV Mobility</a>, обеспечивая сопровождение операций по картам на территории Республики Беларусь, включая обработку транзакций, взаимодействие с поставщиками топлива и расчётное обслуживание.',
    items: [
      {
        title: "Безналичная заправка",
        description:
          "Организация оплаты топлива для коммерческого транспорта без необходимости расчёта наличными со стороны водителя.",
      },
      {
        title: "Расчётное сопровождение",
        description:
          "Приём оплаты от иностранных клиентов в рамках договорных отношений и дальнейшее взаимодействие с поставщиками топлива.",
      },
      {
        title: "Операции по топливным картам",
        description:
          "Обработка операций, контроль доступных лимитов, сопровождение карт и поддержка клиентов.",
      },
      {
        title: "Отчётность и контроль",
        description:
          "Данные по заправкам помогают контролировать расходы автопарка, лимиты и историю операций.",
      },
    ],
  },
  issuer: {
    eyebrow: "Эмитент карт",
    title: "DKV Mobility",
    description:
      "Мы обслуживаем операции по топливным картам DKV CARD, эмитентом которых является DKV Mobility Group SE — европейская B2B-платформа платёжных решений для коммерческого транспорта с историей более 90 лет.",
    figures: [
      { value: "~90 лет", label: "на рынке мобильности" },
      { value: "~450 000", label: "активных клиентов" },
      { value: "~76 000", label: "АЗС в сети приёма" },
      { value: "~39 000", label: "станций техобслуживания" },
      { value: "50+", label: "стран обслуживания" },
    ],
    capsTitle: "Возможности карты DKV CARD",
    caps: [
      {
        title: "Заправка",
        description:
          "Доступ к крупнейшей сети АЗС в Европе — более 65 000 станций различных брендов, включая Shell, Aral и Total.",
      },
      {
        title: "Оплата дорог",
        description:
          "Расчёты за платные трассы, мосты, тоннели и виньетки в европейских системах учёта тарифов.",
      },
      {
        title: "Сервис и ремонт",
        description:
          "Оплата автомоек, шиномонтажа, парковок и станций техобслуживания — около 36 000 партнёрских точек.",
      },
      {
        title: "Помощь на дорогах",
        description:
          "Вызов эвакуатора и оплата экстренного ремонта при поломке или ДТП через круглосуточную службу поддержки.",
      },
      {
        title: "Возврат НДС",
        description:
          "Сбор и подготовка документов для возврата европейского НДС и топливного налога.",
      },
      {
        title: "Цифровое управление",
        description:
          "Личный кабинет для менеджеров автопарка 24/7: лимиты на траты, мгновенная блокировка карт, выгрузка отчётности.",
      },
    ],
    detailGroups: [
      {
        heading: "Сведения об эмитенте",
        rows: [
          { label: "Наименование", value: "DKV Mobility Group SE" },
          { label: "Оператор карт", value: "DKV Euro Service GmbH + Co. KG" },
          { label: "Адрес", value: "Balcke-Dürr-Allee 3, 40882 Ratingen, Germany" },
          { label: "Телефон", value: issuerPhone, href: `tel:${issuerPhone.replace(/[^+\d]/g, "")}`, ltr: true },
          { label: "Электронная почта", value: "info@dkv-mobility.com", href: "mailto:info@dkv-mobility.com" },
          { label: "Сайт", value: "dkv-mobility.com", href: "https://www.dkv-mobility.com", external: true },
        ],
      },
      {
        heading: "Службы поддержки эмитента",
        rows: [
          { label: "Горячая линия", value: issuerHotline, href: `tel:${issuerHotline.replace(/[^+\d]/g, "")}`, ltr: true },
          { label: "Блокировка карты", value: issuerCardStop, href: `tel:${issuerCardStop.replace(/[^+\d]/g, "")}`, ltr: true },
          {
            label: "Почта для блокировки",
            value: "cardstop@dkv-mobility.com",
            href: "mailto:cardstop@dkv-mobility.com",
          },
          {
            label: "Помощь на дорогах DKV Assist",
            value: issuerAssist,
            href: `tel:${issuerAssist.replace(/[^+\d]/g, "")}`,
            ltr: true,
          },
        ],
      },
    ],
  },
  suppliers: {
    eyebrow: "Товары и поставщики",
    title: "Что можно оплатить топливной картой",
    description:
      "Ниже приведены сведения о категориях товаров, работ и услуг, оплата которых возможна с использованием топливных карт на территории Республики Беларусь, а также перечень поставщиков, осуществляющих отпуск таких товаров, работ и услуг.",
    goods: [
      "Дизельное топливо и бензин всех марок",
      "Услуги мойки и стоянки",
      "Услуги по таможенному оформлению в местах перегрузки грузов",
    ],
    goodsNote:
      "Оплата возможна по топливной карте иностранного эмитента, операции по которой мы обслуживаем.",
    panelTitle: "Поставщики",
    panelCount: "7 организаций",
    panelCaption:
      "Отпуск товаров, работ и услуг по топливным картам иностранных эмитентов осуществляют следующие организации.",
    items: supplierNames,
  },
  legal: {
    eyebrow: "Правовая основа",
    title: "Работа в рамках законодательства",
    badge: "Регулируемая деятельность",
    paragraphs: [
      "Оборот топливных карт на территории Республики Беларусь регулируется профильными нормативными правовыми актами, включая Указ Президента Республики Беларусь № 40 от 6 февраля 2020 года «О топливных картах».",
      "БелТрансОйл-Сервис — резидент Республики Беларусь, осуществляющий сбор, обработку и передачу информации об операциях с использованием топливных карт нерезидентов — эмитентов топливных карт.",
      "В соответствии с требованиями законодательства на сайте размещается и поддерживается в актуальном состоянии информация об эмитентах топливных карт, с которыми мы работаем, а также о доступных категориях товаров и услуг и поставщиках, принимающих такие карты.",
    ],
  },
  contacts: {
    eyebrow: "Контакты",
    title: "Свяжитесь с нами",
    description:
      "Оставьте заявку, и мы ответим на вопросы по операциям с топливными картами в Беларуси.",
    company: "БелТрансОйл-Сервис",
    address: "Республика Беларусь, г. Брест",
    phone: "+375 (29) 363-00-00",
    email: "mart311930@gmail.com",
    details: [
      { label: "Юридический адрес", value: "224025, г. Брест, ул. Катин Бор, 95А" },
      {
        label: "Почтовый адрес",
        value: "225038, Брестская область, Брестский район, Клейниковский с/с, 55",
      },
      { label: "Телефон", value: "+375 (29) 363-00-00", href: "tel:+375293630000" },
      { label: "Электронная почта", value: "mart311930@gmail.com", href: "mailto:mart311930@gmail.com" },
    ],
    formTitle: "Заявка на консультацию",
    namePlaceholder: "Ваше имя",
    companyPlaceholder: "Компания",
    emailPlaceholder: "Email или телефон",
    messagePlaceholder: "Кратко опишите задачу",
    submit: "Отправить заявку",
    note: "Сейчас заявка будет подготовлена на сайте. Отправку на email подключим после выбора почтового провайдера.",
    successTitle: "Заявка отправлена",
    successMessage: "Мы свяжемся с вами в течение одного рабочего дня.",
  },
};

export const enContent: SiteContent = {
  language: "en",
  alternateLanguageUrl: "/",
  alternateLanguageLabel: "RU",
  seo: {
    title: "BelTransOil-Service — fuel cards and cashless refueling in Belarus",
    description:
      "BelTransOil-Service helps foreign transport companies organize cashless truck refueling and fuel card support in Belarus.",
    canonicalPath: "/en",
    keywords:
      "fuel cards Belarus, cashless refueling Belarus, truck refueling Belarus, fuel card support, BelTransOil-Service",
  },
  nav: {
    services: "Services",
    issuer: "Card issuer",
    suppliers: "Goods and suppliers",
    legal: "Legal basis",
    contacts: "Contacts",
  },
  hero: {
    badge: "For international carriers",
    title: "Fuel cards and cashless truck refueling in Belarus",
    description:
      "BelTransOil-Service helps foreign transport companies organize fuel payments, fuel card support and settlement operations with fuel suppliers in the Republic of Belarus.",
    primaryCta: "Request consultation",
    routeSummary:
      "Fuel card support, transaction processing and settlement coordination for commercial transport in Belarus.",
    stats: [
      { value: "B2B", label: "service for transport companies" },
      { value: "24/7", label: "commercial vehicle refueling" },
      { value: "BY", label: "operations within Belarus" },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "What we do",
    descriptionHtml:
      'We cooperate with the fuel card issuer <a class="inline-link" href="#issuer">DKV Mobility</a>, providing support for card transactions in the Republic of Belarus, including transaction processing, cooperation with fuel suppliers and settlement services.',
    items: [
      {
        title: "Cashless refueling",
        description:
          "Fuel payment organization for commercial vehicles without the need for drivers to pay in cash.",
      },
      {
        title: "Settlement support",
        description:
          "Receiving payments from foreign clients under contractual arrangements and supporting further cooperation with fuel suppliers.",
      },
      {
        title: "Fuel card operations",
        description:
          "Transaction processing, available limit control, card support and client assistance.",
      },
      {
        title: "Reporting and control",
        description:
          "Refueling data helps control fleet expenses, limits and transaction history.",
      },
    ],
  },
  issuer: {
    eyebrow: "Card issuer",
    title: "DKV Mobility",
    description:
      "We service transactions made with DKV CARD fuel cards issued by DKV Mobility Group SE — a European B2B platform for commercial transport payment solutions with a history of more than 90 years.",
    figures: [
      { value: "~90 years", label: "in the mobility market" },
      { value: "~450 000", label: "active customers" },
      { value: "~76 000", label: "stations in the acceptance network" },
      { value: "~39 000", label: "vehicle-service stations" },
      { value: "50+", label: "service countries" },
    ],
    capsTitle: "What the DKV CARD covers",
    caps: [
      {
        title: "Refueling",
        description:
          "Access to the largest network of filling stations in Europe — over 65,000 stations of various brands, including Shell, Aral and Total.",
      },
      {
        title: "Toll payments",
        description:
          "Payments for toll roads, bridges, tunnels and vignettes across European tariff systems.",
      },
      {
        title: "Service and repair",
        description:
          "Payment for car washes, tyre service, parking and maintenance stations — around 36,000 partner locations.",
      },
      {
        title: "Roadside assistance",
        description:
          "Tow truck dispatch and payment for emergency repairs after a breakdown or accident via round-the-clock support.",
      },
      {
        title: "VAT refund",
        description:
          "Collection and preparation of documents for European VAT and fuel tax refunds.",
      },
      {
        title: "Digital management",
        description:
          "A 24/7 fleet manager portal: spending limits, instant card blocking and reporting exports.",
      },
    ],
    detailGroups: [
      {
        heading: "Issuer details",
        rows: [
          { label: "Name", value: "DKV Mobility Group SE" },
          { label: "Card operator", value: "DKV Euro Service GmbH + Co. KG" },
          { label: "Address", value: "Balcke-Dürr-Allee 3, 40882 Ratingen, Germany" },
          { label: "Phone", value: issuerPhone, href: `tel:${issuerPhone.replace(/[^+\d]/g, "")}`, ltr: true },
          { label: "Email", value: "info@dkv-mobility.com", href: "mailto:info@dkv-mobility.com" },
          { label: "Website", value: "dkv-mobility.com", href: "https://www.dkv-mobility.com", external: true },
        ],
      },
      {
        heading: "Issuer support lines",
        rows: [
          { label: "Hotline", value: issuerHotline, href: `tel:${issuerHotline.replace(/[^+\d]/g, "")}`, ltr: true },
          { label: "Card blocking", value: issuerCardStop, href: `tel:${issuerCardStop.replace(/[^+\d]/g, "")}`, ltr: true },
          {
            label: "Card blocking email",
            value: "cardstop@dkv-mobility.com",
            href: "mailto:cardstop@dkv-mobility.com",
          },
          {
            label: "Roadside assistance DKV Assist",
            value: issuerAssist,
            href: `tel:${issuerAssist.replace(/[^+\d]/g, "")}`,
            ltr: true,
          },
        ],
      },
    ],
  },
  suppliers: {
    eyebrow: "Goods and suppliers",
    title: "What can be paid for with a fuel card",
    description:
      "Below is information on the categories of goods, works and services that may be paid for using fuel cards in the Republic of Belarus, together with the list of suppliers that release such goods, works and services.",
    goods: [
      "Diesel fuel and all grades of gasoline",
      "Vehicle wash and parking services",
      "Customs clearance services at cargo transshipment locations",
    ],
    goodsNote:
      "Payment is available with a fuel card of a foreign issuer whose transactions we service.",
    panelTitle: "Suppliers",
    panelCount: "7 organizations",
    panelCaption:
      "The following organizations release goods, works and services under fuel cards of foreign issuers.",
    items: supplierNames,
  },
  legal: {
    eyebrow: "Legal basis",
    title: "Operating within Belarusian legislation",
    badge: "Regulated activity",
    paragraphs: [
      "Fuel card circulation in the Republic of Belarus is regulated by applicable legal acts, including Presidential Decree No. 40 dated February 6, 2020, «On Fuel Cards».",
      "BelTransOil-Service is a resident of the Republic of Belarus that collects, processes and transmits information on transactions using fuel cards of non-resident fuel card issuers.",
      "In accordance with statutory requirements, this website publishes and keeps up to date information on the fuel card issuers we work with, as well as on the available categories of goods and services and the suppliers accepting such cards.",
    ],
  },
  contacts: {
    eyebrow: "Contacts",
    title: "Contact us",
    description:
      "Send a request, and we will answer your questions about fuel card transactions in Belarus.",
    company: "BelTransOil-Service",
    address: "Brest, Republic of Belarus",
    phone: "+375 (29) 363-00-00",
    email: "mart311930@gmail.com",
    details: [
      { label: "Registered address", value: "95A Katin Bor St., Brest, 224025" },
      {
        label: "Postal address",
        value: "55 Kleiniki Rural Council, Brest District, Brest Region, 225038",
      },
      { label: "Phone", value: "+375 (29) 363-00-00", href: "tel:+375293630000" },
      { label: "Email", value: "mart311930@gmail.com", href: "mailto:mart311930@gmail.com" },
    ],
    formTitle: "Consultation request",
    namePlaceholder: "Your name",
    companyPlaceholder: "Company",
    emailPlaceholder: "Email or phone",
    messagePlaceholder: "Briefly describe your request",
    submit: "Send request",
    note: "For now, the request is prepared on the site. Email delivery will be connected after choosing a mail provider.",
    successTitle: "Request submitted",
    successMessage: "We will contact you within one business day.",
  },
};
