/****************************************************************************/
particlesJS.load("particles-js", "./particles.json", function () {
  console.log("callback - particles.js config loaded");
});
/****************************************************************************/
const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);
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
