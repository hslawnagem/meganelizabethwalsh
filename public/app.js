/****************************************************************************/
particlesJS.load("particles-js", "./particles.json", function () {
  console.log("callback - particles.js config loaded");
});
/****************************************************************************/
const navbar = document.querySelector("#navbar");
const navbarMenu = navbar.querySelector("#navbar .menu");
const navbarItems = navbar.querySelectorAll("#navbar .menu .item");
const navbarToggle = navbar.querySelector("#navbar .toggle");
const body = document.querySelector("body");
// Open
function openNavbar() {
  navbarMenu.classList.add("active");
  navbar.classList.add("open");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}
function closeNavbar() {
  navbarMenu.classList.remove("active");
  navbar.classList.remove("open");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}
// Toggle drawer menu
navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("open")) {
    closeNavbar();
  } else {
    openNavbar();
  }
});
// Close nav drawer upon user selection
navbarItems.forEach((item) =>
  item.addEventListener("click", () => {
    if (navbar.classList.contains("open")) closeNavbar();
  })
);

// Close nav drawer when screen is resized
window.addEventListener("resize", () => {
  closeNavbar();
});
document.addEventListener("click", (e) => {
  if (
    e.target !== navbarToggle &&
    e.target !== navbarMenu.classList.contains("active") &&
    e.target !== e.target.closest("#navbar .menu")
  )
    closeNavbar();
});
/****************************************************************************/
const projectView = document.querySelector(".projects-slide");
const projects = document.querySelectorAll(".projects-slide .project");
const prevPrjctBtn = document.querySelector("#previous-project-btn");
const nextPrjctBtn = document.querySelector("#next-project-btn");

let count = 1;
let size = projects[0].clientWidth;
projectView.style.transform = "translate(" + -size * count + "px";

prevPrjctBtn.addEventListener("click", () => {
  if (count <= 0) return;
  projectView.style.transition = "transform 0.4s ease-in-out";
  count--;
  projectView.style.transform = "translate(" + -size * count + "px";
});

nextPrjctBtn.addEventListener("click", () => {
  if (count >= projects.length - 1) return;
  projectView.style.transition = "transform 0.4s ease-in-out";
  count++;
  projectView.style.transform = "translate(" + -size * count + "px";
});
projectView.addEventListener("transitionend", () => {
  if (projects[count].id === "lastClone") {
    projectView.style.transition = "none";
    count = projects.length - 2;
    projectView.style.transform = "translate(" + -size * count + "px";
  }
  if (projects[count].id === "firstClone") {
    projectView.style.transition = "none";
    count = projects.length - count;
    projectView.style.transform = "translate(" + -size * count + "px";
  }
});
window.addEventListener("resize", () => {
  size = projects[0].clientWidth;
  projectView.style.transform = "translate(" + -size * count + "px";
});
/****************************************************************************/
