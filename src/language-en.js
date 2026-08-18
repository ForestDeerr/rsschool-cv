import { aboutEn } from "./about.js";
import { modalContentEN } from "./components/modal/about-content-en.js";
import { sliderContentEN } from "./components/slider/slider-content-en.js";

const langEn = {
  pageTitle: "Egor Gerasimchik | Frontend Developer",
  headerName: "Gerasimchik Egor",
  headerPosition: "Frontend Developer",

  navAbout: "About Me",
  navProject: "My Project",
  navSkills: "Code Example",
  navCourses: "Courses",
  navEducation: "Education",
  navLanguages: "Languages",

  aboutTitle: "About Me",
  aboutText: aboutEn,

  codeExampleTitle: "Code Example",
  coursesTitle: "Courses",
  education: {
    title: "Education",
    items: [
      {
        institution: "Belarusian State Agricultural Academy",
        faculty: "Faculty of Economics",
        specialty: "Economic Cybernetics",
      },
      {
        institution: "Belarusian National Technical University",
        faculty: "Faculty of Instrument Engineering",
        specialty: "Metrology, Standardization and Certification",
      },
      {
        institution: "Belarusian National Technical University",
        degree: "Master's Degree",
        specialty: "Quality Management",
        qualification: "Master of Quality Management",
      },
    ],
  },

  language: {
    title: "Languages",
    items: [
      {
        name: "Belarusian",
        level: 3,
      },
      {
        name: "Russian",
        level: 4,
      },
      {
        name: "English",
        level: 2,
      },
    ],
  },

  contacts: {
    title: "Contact me",
    items: [
      {
        type: "discord",
        label: "Discord",
        value: "Yahor Herasimchyk",
        extra: "@ForestDeerr",
      },
      {
        type: "mail",
        label: "Mail",
        value: "qwerti@gmail.com",
      },
      {
        type: "phone",
        label: "Phone",
        value: "+375(25)963-04-78",
      },
    ],
  },

  proSkills: {
    title: "Pro Skills",
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

  modalContent: modalContentEN,
  sliderContent: sliderContentEN,
};

export { langEn };
