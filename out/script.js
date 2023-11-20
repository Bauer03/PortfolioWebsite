"use strict";
// Please make sure you're not accessing this page on Safari! :)
var navMenu = document.querySelector(".nav-menu");
var menuToggle = document.getElementById("menu-toggle");
var homeLink = document.getElementById("home-link");
var homeSection = document.getElementById("home-section");
var aboutLink = document.getElementById("about-link");
var aboutSection = document.getElementById("about-section");
var projectsLink = document.getElementById("projects-link");
var projectsSection = document.getElementById("projects-section");
var contactLink = document.getElementById("contact-link");
var contactSection = document.getElementById("contact-section");
let currentTheme = 'dark';
window.onload = function () {
    currentTheme = localStorage.getItem("mytheme") || 'light';
    if (currentTheme == 'light') {
        setToLightTheme();
    }
    else {
        setToDarkTheme();
    }
};
let menuIsOpen = false;
menuToggle.addEventListener('click', () => {
    if (menuIsOpen == false) {
        openNavMenu();
    }
    else {
        closeNavMenu();
    }
});
function openNavMenu() {
    navMenu.classList.add("menu-open");
    menuToggle.classList.add("menu-open");
    setTimeout(() => {
        menuToggle.innerHTML = "close";
    }, 100);
    menuIsOpen = true;
    console.log("opening nav menu");
}
function closeNavMenu() {
    navMenu.classList.remove("menu-open");
    menuToggle.classList.remove("menu-open");
    setTimeout(() => {
        menuToggle.innerHTML = "menu";
    }, 100);
    menuIsOpen = false;
    console.log("closing nav menu");
}
homeLink.addEventListener('click', () => {
    homeSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        closeNavMenu();
    }, 50);
});
aboutLink.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        closeNavMenu();
    }, 50);
});
projectsLink.addEventListener('click', () => {
    projectsSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        closeNavMenu();
    }, 50);
});
contactLink.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        closeNavMenu();
    }, 50);
});
var navLinks = document.querySelectorAll('.navLinkInner');
// if the navLink clicked doesn't have class "active", remove class active from all other navLinks and add it to the one clicked. 
navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        if (!navLink.classList.contains('active')) {
            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
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
