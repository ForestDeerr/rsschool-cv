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
    description: "with coursework in:",
    skills: ["JavaScript", "TypeScript", "React"],
  },
  {
    name: "RS School",
    url: "https://rs.school/",
    course: '"JS/Front-end Course 2024"',
    description: "with coursework in:",
    skills: ["HTML/CSS", "JavaScript", "TypeScript"],
  },
];

export { getNavigationLinks, courses };
