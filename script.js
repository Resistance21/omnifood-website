const yearEl = document.querySelector(".year");
const curYear = new Date().getFullYear();
yearEl.textContent = curYear;

const mainNav = document.querySelector(".header");
const mobileMenuBtn = document.querySelector(".btn-mobile-nav");

mobileMenuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    const href = el.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const scrollEl = document.querySelector(href);
      scrollEl.scrollIntoView({ behavior: "smooth" });
    }

    if (el.classList.contains("main-nav-link"))
      mainNav.classList.remove("nav-open");
  });
});

const heroSection = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (ent.isIntersecting) {
      mainNav.classList.remove("sticky");
      heroSection.style.marginTop = null;
    }
    if (!ent.isIntersecting) {
      mainNav.classList.add("sticky");
      heroSection.style.marginTop = "9.6rem";
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSection);

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
