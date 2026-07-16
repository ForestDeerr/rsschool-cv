function getNavigationLinks(lang) {
  const navigationLinks = [
    {
      href: "#about",
      text: lang.navAbout,
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

export { getNavigationLinks };
