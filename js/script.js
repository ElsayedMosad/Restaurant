const body = document.querySelector("body");
const header = document.querySelector(".header");
const toggleNav = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const allLinks = document.querySelectorAll(".nav-link a");
const mood = document.querySelector(".mood");
const toggleIcon = navLinks.querySelector("i");
const moodIcon = mood.querySelector("i");
const scrollTop = document.getElementById("scroll-top");

// Add shadow to header on scroll
function scrollHeader() {
  this.scrollY > 100
    ? header.classList.add("shadow")
    : header.classList.remove("shadow");
}
window.addEventListener("scroll", scrollHeader);
// Play nav links
toggleNav.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
// Remove open class from navLinks on click links
allLinks.forEach(removeLink);
function removeLink(link) {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
    }
  });
}
document.addEventListener("click", (e) => {
  if (e.target !== navLinks && e.target !== toggleNav) {
    if (navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
    }
  }
});

// Stop propagation on nav
navLinks.onclick = function (e) {
  e.stopPropagation();
};
// Stop propagation on toggle
toggleNav.onclick = function (e) {
  e.stopPropagation();
};
// check localStorage if dark
if (localStorage.getItem("mood") === "sun") {
  body.classList.toggle("dark");
  moodIcon.classList.toggle("bx-moon");
  moodIcon.classList.toggle("bx-sun");
}
// change mood and change icon
mood.addEventListener("click", () => {
  body.classList.toggle("dark");
  moodIcon.classList.toggle("bx-moon");
  moodIcon.classList.toggle("bx-sun");
  if (moodIcon.classList.contains("bx-sun")) {
    localStorage.setItem("mood", "sun");
  } else {
    localStorage.setItem("mood", "moon");
  }
});
// Play Scroll-top shadow
function scrollToTop() {
  this.scrollY > 500
    ? scrollTop.classList.add("scrolltop-show")
    : scrollTop.classList.remove("scrolltop-show");
}
window.addEventListener("scroll", scrollToTop);

// Add active class to right link on scroll sections
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  sections.forEach(function (e, index) {
    if (
      window.scrollY + 200 >= e.offsetTop &&
      window.scrollY + 200 < e.offsetTop + e.scrollHeight
      ) {
      addActiveLink();
      if (!allLinks[index].classList.contains('active')) {
        allLinks[index].classList.add("active");
      }
    }
  });
});
function addActiveLink() {
  allLinks.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    }
  });
}

// ScrollReveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home-text, 
  .home-img, 
  .about-img, 
  .about-text, 
  .services-box, 
  .menu-item, 
  .app-mobile, 
  .app-data, 
  .contact-data, 
  .contact-but, 
  .footer-box`,
  {
    interval: 200,
  }
);
