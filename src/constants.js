function getNavigationLinks(lang) {
  const navigationLinks = [
    {
      href: "#about",
      text: lang.navAbout,
    },
    {
      href: "#project",
      text: lang.navProject,
    },
    {
      href: "#skills",
      text: lang.navSkills,
    },
    {
      href: "#courses",
      text: lang.navCourses,
    },
    {
      href: "#education",
      text: lang.navEducation,
    },
    {
      href: "#language",
      text: lang.navLanguages,
    },
  ];

  return navigationLinks;
}

const courses = [
  {
    name: "HTML Academy",
    url: "https://htmlacademy.ru/",
    course: '"JavaScript Developer Program #14"',
    description: "Key topics:",
    skills: [
      "HTML5 / CSS3",
      "JavaScript",
      "DOM and Events",
      "Asynchronous JavaScript",
      "REST API",
      "TypeScript",
      "React",
      "React Router",
      "Hooks",
      "Redux",
      "Testing",
      "Git / npm",
    ],
  },
  {
    name: "RS School",
    url: "https://rs.school/",
    course: '"JS / Front-end Course 2024"',
    description: "Key topics:",
    skills: [
      "HTML5 / CSS3",
      "JavaScript",
      "TypeScript",
      "DOM and Browser API",
      "OOP",
      "Data Structures and Algorithms",
      "Asynchronous JavaScript",
      "REST API",
      "WebSockets",
      "Webpack / Vite",
      "ESLint",
      "Git / GitHub",
      "Code Review",
      "Team Development",
    ],
  },
  {
    name: "RS School",
    url: "https://rs.school/",
    course: '"JS / Front-end Course 2025"',
    description: "Key topics:",
    skills: [
      "HTML5 / CSS3",
      "JavaScript",
      "TypeScript",
      "Advanced JavaScript",
      "Security",
      "Testing",
      "Agile",
      "Networking",
      "Web Development Tools",
      "React",
      "Application Architecture",
      "Team Development",
    ],
  },
];

export { getNavigationLinks, courses };
