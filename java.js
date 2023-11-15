// Please make sure you're not accessing this page on Safari! :)

var navMenu = document.querySelector(".navMenu");

var homeLink = document.getElementById("home-link");
var homeSection = document.getElementById("home-section");
var aboutLink = document.getElementById("about-link");
var aboutSection = document.getElementById("about-section");
var projectsLink = document.getElementById("projects-link");
var projectsSection = document.getElementById("projects-section");
var contactLink = document.getElementById("contact-link");
var contactSection = document.getElementById("contact-section");

let currentTheme = 'dark';
window.onload = function() {
  currentTheme = localStorage.getItem("mytheme") || 'light';
  if(currentTheme == 'light') {
    setToLightTheme();
  }
  else {
    setToDarkTheme();
  }
}

homeLink.addEventListener('click', () => {
  console.log(homeLink.innerHTML);
  homeSection.scrollIntoView({ behavior: "smooth"});
})

aboutLink.addEventListener('click', () => {
  console.log(aboutLink.innerHTML);
  aboutSection.scrollIntoView({ behavior: "smooth"});
})

projectsLink.addEventListener('click', () => {
  console.log(projectsLink.innerHTML);
  projectsSection.scrollIntoView({ behavior: "smooth"});
})

contactLink.addEventListener('click', () => {
  console.log(contactLink.innerHTML);
  contactSection.scrollIntoView({ behavior: "smooth"}); 
})

var navLinks = document.querySelectorAll('.navLinkInner');
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      if (!navLink.classList.contains('active')) { // if the navLink clicked doesn't have class "active"
        navLinks.forEach(function(link) {
          link.classList.remove('active'); // remove "active" from all other navLinks
        });
        navLink.classList.add('active'); // add "active" class to all other navLinks
      }
    });
  });

function setToLightTheme() {
  document.body.classList.remove("dark");
  document.body.classList.add("light");
  currentTheme = 'light';
  localStorage.setItem("mytheme", currentTheme);
  // console.log("Attempting to set theme to light")
}

function setToDarkTheme() {
  document.body.classList.remove("light");
  document.body.classList.add("dark");
  currentTheme = 'dark';
  localStorage.setItem("mytheme", currentTheme);
  // console.log("Attempting to set theme to dark")
}
