const sections = document.querySelectorAll(".portfolio-section");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveSection() {
  let currentSection = null;
  let smallestDistance = Infinity;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    const sectionCenter = rect.top + rect.height / 2;

    const screenCenter = window.innerHeight / 2;

    const distance = Math.abs(sectionCenter - screenCenter);

    if (distance < smallestDistance) {
      smallestDistance = distance;
      currentSection = section;
    }
  });

  if (currentSection) {
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    currentSection.classList.add("active");

    const currentId = currentSection.getAttribute("id");

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  }
}

window.addEventListener("scroll", updateActiveSection);

window.addEventListener("load", updateActiveSection);

window.addEventListener("resize", updateActiveSection);
