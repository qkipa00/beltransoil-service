export type Language = "ru" | "en";

export type StatItem = {
  value: string;
  label: string;
};

export type CardItem = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
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
    process: string;
    advantages: string;
    legal: string;
    contacts: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: StatItem[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: CardItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStep[];
  };
  advantages: {
    eyebrow: string;
    title: string;
    description: string;
    items: CardItem[];
  };
  legal: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  contacts: {
    eyebrow: string;
    title: string;
    description: string;
    company: string;
    address: string;
    phone: string;
    email: string;
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
    process: "Как это работает",
    advantages: "Преимущества",
    legal: "Правовая основа",
    contacts: "Контакты",
  },
  hero: {
    badge: "Для международных перевозчиков",
    title: "Топливные карты и безналичная заправка транспорта в Беларуси",
    description:
      "БелТрансОйл-Сервис помогает иностранным транспортным компаниям организовать оплату топлива, сопровождение топливных карт и расчёты с поставщиками на территории Республики Беларусь.",
    primaryCta: "Получить консультацию",
    secondaryCta: "Как это работает",
    stats: [
      {
        value: "B2B",
        label: "сервис для транспортных компаний",
      },
      {
        value: "24/7",
        label: "заправка коммерческого транспорта",
      },
      {
        value: "BY",
        label: "операции на территории Беларуси",
      },
    ],
  },
  services: {
    eyebrow: "Услуги",
    title: "Что мы делаем",
    description:
      "Мы закрываем операционную часть работы с топливными картами: от подключения клиента до обработки операций и взаимодействия с поставщиками топлива.",
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
  process: {
    eyebrow: "Процесс",
    title: "Как это работает",
    description:
      "Процесс построен вокруг понятной договорной схемы, топливных карт и прозрачного контроля операций.",
    steps: [
      {
        title: "Заявка клиента",
        description:
          "Компания сообщает данные о перевозчике, маршрутах, транспорте и потребности в заправке на территории Беларуси.",
      },
      {
        title: "Согласование условий",
        description:
          "Стороны согласуют порядок обслуживания, лимиты, расчёты и формат предоставления информации по операциям.",
      },
      {
        title: "Подключение карт",
        description:
          "Транспорт клиента подключается к согласованному механизму обслуживания через топливные карты.",
      },
      {
        title: "Заправка в рейсе",
        description:
          "Водитель использует топливную карту на территории Беларуси, а клиент получает контроль над расходами.",
      },
    ],
  },
  advantages: {
    eyebrow: "Преимущества",
    title: "Почему это удобно",
    description:
      "Сервис снижает ручную работу, упрощает оплату топлива в рейсе и даёт компании больше контроля над расходами автопарка.",
    items: [
      {
        title: "Меньше ручных расчётов",
        description:
          "Водителю не нужно решать вопрос оплаты топлива на каждой заправке отдельно.",
      },
      {
        title: "Контроль лимитов",
        description:
          "Компания может ограничивать расходы и отслеживать операции по транспорту.",
      },
      {
        title: "Локальное сопровождение",
        description:
          "Белорусская компания взаимодействует с местными поставщиками и сервисной инфраструктурой.",
      },
      {
        title: "Понятно для бухгалтерии",
        description:
          "Операции фиксируются и могут использоваться для внутреннего учёта и анализа затрат.",
      },
    ],
  },
  legal: {
    eyebrow: "Правовая основа",
    title: "Работа в рамках законодательства",
    description:
      "Оборот топливных карт на территории Республики Беларусь регулируется профильными нормативными актами, включая Указ Президента Республики Беларусь №40 от 6 февраля 2020 года «О топливных картах».",
    items: [
      "договорное взаимодействие с клиентами и партнёрами",
      "операционное сопровождение топливных карт",
      "обработка данных по операциям",
      "расчётное сопровождение поставок топлива",
    ],
  },
  contacts: {
    eyebrow: "Контакты",
    title: "Свяжитесь с нами",
    description:
      "Оставьте заявку, и мы расскажем, как подключить вашу компанию к сервису безналичной заправки транспорта в Беларуси.",
    company: "БелТрансОйл-Сервис",
    address: "Республика Беларусь, г. Брест",
    phone: "+375 XX XXX-XX-XX",
    email: "info@beltransoil-service.by",
    formTitle: "Заявка на консультацию",
    namePlaceholder: "Ваше имя",
    companyPlaceholder: "Компания",
    emailPlaceholder: "Email или телефон",
    messagePlaceholder: "Кратко опишите задачу",
    submit: "Отправить заявку",
    note: "Сейчас заявка будет подготовлена на сайте. Отправку на email подключим после выбора почтового провайдера.",
    successTitle: "Заявка подготовлена",
    successMessage: "Мы сохранили данные в форме. Отправку на email подключим на следующем этапе.",
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
    process: "How it works",
    advantages: "Benefits",
    legal: "Legal basis",
    contacts: "Contacts",
  },
  hero: {
    badge: "For international carriers",
    title: "Fuel cards and cashless truck refueling in Belarus",
    description:
      "BelTransOil-Service helps foreign transport companies organize fuel payments, fuel card support and settlement operations with fuel suppliers in the Republic of Belarus.",
    primaryCta: "Request consultation",
    secondaryCta: "How it works",
    stats: [
      {
        value: "B2B",
        label: "service for transport companies",
      },
      {
        value: "24/7",
        label: "commercial vehicle refueling",
      },
      {
        value: "BY",
        label: "operations within Belarus",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "What we do",
    description:
      "We handle the operational part of fuel card service: client onboarding, transaction processing, limits control and cooperation with fuel suppliers.",
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
  process: {
    eyebrow: "Process",
    title: "How it works",
    description:
      "The process is built around clear contractual terms, fuel cards and transparent transaction control.",
    steps: [
      {
        title: "Client request",
        description:
          "The company provides information about the carrier, routes, vehicles and refueling needs in Belarus.",
      },
      {
        title: "Terms agreement",
        description:
          "The parties agree on service terms, limits, settlement procedure and reporting format.",
      },
      {
        title: "Card connection",
        description:
          "The client’s vehicles are connected to the agreed service mechanism through fuel cards.",
      },
      {
        title: "Refueling on route",
        description:
          "The driver uses the fuel card in Belarus, while the client keeps control over expenses.",
      },
    ],
  },
  advantages: {
    eyebrow: "Benefits",
    title: "Why it is convenient",
    description:
      "The service reduces manual work, simplifies fuel payment on route and gives the company more control over fleet expenses.",
    items: [
      {
        title: "Less manual payment work",
        description:
          "Drivers do not need to solve fuel payment issues separately at every station.",
      },
      {
        title: "Limit control",
        description:
          "The company can control expenses and track operations by vehicle.",
      },
      {
        title: "Local support",
        description:
          "A Belarus-based company works with local suppliers and service infrastructure.",
      },
      {
        title: "Clear for accounting",
        description:
          "Operations are recorded and can be used for internal accounting and cost analysis.",
      },
    ],
  },
  legal: {
    eyebrow: "Legal basis",
    title: "Operating within Belarusian legislation",
    description:
      "Fuel card circulation in the Republic of Belarus is regulated by applicable legal acts, including Presidential Decree No. 40 dated February 6, 2020, “On Fuel Cards”.",
    items: [
      "contractual cooperation with clients and partners",
      "operational fuel card support",
      "transaction data processing",
      "settlement support for fuel supply",
    ],
  },
  contacts: {
    eyebrow: "Contacts",
    title: "Contact us",
    description:
      "Send a request, and we will explain how to connect your company to cashless truck refueling in Belarus.",
    company: "BelTransOil-Service",
    address: "Brest, Republic of Belarus",
    phone: "+375 XX XXX-XX-XX",
    email: "info@beltransoil-service.by",
    formTitle: "Consultation request",
    namePlaceholder: "Your name",
    companyPlaceholder: "Company",
    emailPlaceholder: "Email or phone",
    messagePlaceholder: "Briefly describe your request",
    submit: "Send request",
    note: "For now, the request is prepared on the site. Email delivery will be connected after choosing a mail provider.",
    successTitle: "Request prepared",
    successMessage: "The form data is ready. Email delivery will be connected in the next step.",
  },
};
