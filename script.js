document.addEventListener("DOMContentLoaded", () => {
  const typed = new Typed("#typeText", {
    strings: [
      "Web Developer",
      "Front-End",
      "Problem Solver",
      "Code Explorer",
      "AI Explorer",
      "Innovator",
    ],
    typeSpeed: 80,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: "",
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navMenu .menu");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".fade-in-left, .fade-in-right"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    animatedElements.forEach((el) => {
      observer.observe(el);
    });
  } else {
    animatedElements.forEach((el) => {
      el.classList.add("is-visible");
    });
  }
});