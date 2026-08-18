import { aboutRu } from "./about.js";
import { modalContentRU } from "./components/modal/about-content-ru.js";
import { sliderContentRU } from "./components/slider/slider-content-ru.js";

const langRu = {
  pageTitle: "Егор Герасимчик | Frontend разработчик",
  headerName: "Герасимчик Егор",
  headerPosition: "Frontend разработчик",

  navAbout: "Обо мне",
  navProject: "Мои проекты",
  navSkills: "Пример кода",
  navCourses: "Курсы",
  navEducation: "Образование",
  navLanguages: "Языки",

  aboutTitle: "Обо мне",
  aboutText: aboutRu,

  codeExampleTitle: "Пример кода",
  coursesTitle: "Курсы",
  education: {
    title: "Образование",
    items: [
      {
        institution:
          "Белорусская государственная сельскохозяйственная академия",
        faculty: "Экономический факультет",
        specialty: "Экономическая кибернетика",
      },
      {
        institution: "Белорусский национальный технический университет",
        faculty: "Факультет приборостроения",
        specialty: "Метрология, стандартизация и сертификация",
      },
      {
        institution: "Белорусский национальный технический университет",
        degree: "Магистратура",
        specialty: "Управление качеством",
        qualification: "Магистр",
      },
    ],
  },

  language: {
    title: "Языки",
    items: [
      {
        name: "Белорусский",
        level: 3,
      },
      {
        name: "Русский",
        level: 4,
      },
      {
        name: "Английский",
        level: 2,
      },
    ],
  },

  contacts: {
    title: "Мои контакты",
    items: [
      {
        type: "discord",
        label: "Discord",
        value: "Yahor Herasimchyk",
        extra: "@ForestDeerr",
      },
      {
        type: "mail",
        label: "Почта",
        value: "qwerti@gmail.com",
      },
      {
        type: "phone",
        label: "Телефон",
        value: "+375(25)963-04-78",
      },
    ],
  },

  proSkills: {
    title: "Профессиональные навыки",
    items: [
      {
        name: "JavaScript",
        level: 80,
      },
      {
        name: "TypeScript",
        level: 50,
      },
      {
        name: "HTML / CSS",
        level: 90,
      },
      {
        name: "React",
        level: 20,
      },
    ],
  },

  modalContent: modalContentRU,
  sliderContent: sliderContentRU,
};

export { langRu };
