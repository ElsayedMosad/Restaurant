// Play menu links

const toggleMenu = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".menu-links");
const mood = document.querySelector(".mood");
const body = document.querySelector("body");
const moodIcon = mood.querySelector("i");
// console.log(toggleMenu);
// console.log(menuLinks);
// console.log(mood);
// console.log(body);
toggleMenu.addEventListener("click", () => {
  menuLinks.classList.toggle("open");
});
if (localStorage.getItem("mood") === "sun") {
  body.classList.toggle("dark");
  moodIcon.classList.toggle("bx-moon");
  moodIcon.classList.toggle("bx-sun");
}
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
