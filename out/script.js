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
var aboutTopHr = document.querySelector(".about-top-hr");
var contactHr = document.querySelector(".contact-hr");
document.addEventListener("DOMContentLoaded", function () {
    var projGallery = document.querySelector(".proj-gallery");
    var prevBtn = document.querySelector(".previous");
    var nextBtn = document.querySelector(".next");
    // Array of projects (similar to the previous example)
    var projects = [
        {
            name: "firstProj",
            markup: `
            <div class="proj-left">
              <div class="proj-left-top">
                <video class="proj-video" muted="true" src="Images/Screen Recording 2023-11-30 at 3.06.20 PM.mov" loop="true" autoplay="true"></video>
              </div>
              <div class="proj-left-bottom">
                <div class="proj-name">
                  Knowledge Chase
                </div>
                <div class="proj-desc">
                  Webapp created for Bridgewater College's Math
                  & Computer Science department. Completed in collaboration with  
                  faculty & small group of classmates.
                </div>
              <div class="proj-link">
              <a href="https://kchase.xyz/index.html" target="_blank">
              View the project here
              <span class="material-symbols-outlined">open_in_new</span>
              </a>
              </div>
              </div>
              </div>
              <div class="proj-right">
              <div class="proj-timeline">
              <div class="proj-timeline-title">
              Timeline:
              </div>
              <div class="proj-timeline-body">
              April-August 2023
              </div>
              <div class="proj-timeline-body">
              Wireframes/Flow charts completed by end of April
              </div>
              <div class="proj-timeline-body">
              Frontend development completed in early September, after start of 
              classes.
              </div>
              </div>
              <div class="proj-takeaways">
              <div class="proj-takeaways-title">
              Skills/Takeaways:
              </div>
              <div class="proj-takeaways-body">
              Introducted to Typescript, learned to work with APIs
              </div>
                <div class="proj-takeaways-body">
                Became familiar with Postman, MongoDB Compass
                </div>
              </div>
            </div>
          `
        },
        {
            name: "secondProj",
            markup: `
                            <div class="proj-left">
                                <div class="proj-left-top">
                                  <img class="proj-video" src="Images/proj1.png" alt="Web Design Project 1">
                                </div>
                                <div class="proj-left-bottom">
                                    <div class="proj-name">
                                        Yamaha Reimagined
                                    </div>
                                    <div class="proj-desc">
                                        Website created for my Web Design/Development class
                                        in fall of 2023. Re-design of the Yamaha website for the
                                        MT-09 bike. Completed solo.
                                    </div>
                                    <div class="proj-link">
                                        <a href="https://github.com/Bauer03/webDesignProj1" target="_blank">
                                            View the project here
                                            <span class="material-symbols-outlined">open_in_new</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="proj-right">
                                <div class="proj-timeline">
                                    <div class="proj-timeline-title">
                                        Timeline:
                                    </div>
                                    <div class="proj-timeline-body">
                                        September 2023
                                    </div>
                                    <div class="proj-timeline-body">
                                        The development for this project took place over
                                        about two weeks, from start to finish.
                                    </div>
                                </div>
                                <div class="proj-takeaways">
                                    <div class="proj-takeaways-title">
                                        Skills/Takeaways:
                                    </div>
                                    <div class="proj-takeaways-body">
                                        Introducted to single-page websites
                                    </div>
                                    <div class="proj-takeaways-body">
                                        Learned to deal with responsive design and collapsible menus
                                    </div>
                                </div>
                            </div>
          `
        }
    ];
    // Initialize the currently displayed project
    var currentProjectIndex = 0;
    // Function to update projGallery's innerHTML based on the current project
    function updateGallery() {
        projGallery.innerHTML = projects[currentProjectIndex].markup;
    }
    // Event listener for the "previous" button
    prevBtn.addEventListener("click", function () {
        // Decrement the current project index
        currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
        // Update the gallery
        updateGallery();
    });
    // Event listener for the "next" button
    nextBtn.addEventListener("click", function () {
        // Increment the current project index
        currentProjectIndex = (currentProjectIndex + 1) % projects.length;
        // Update the gallery
        updateGallery();
    });
});
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
    }, 100);
});
aboutLink.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        closeNavMenu();
        aboutTopHr.classList.add("opened");
    }, 100);
});
projectsLink.addEventListener('click', () => {
    projectsSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        closeNavMenu();
    }, 100);
});
contactLink.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        closeNavMenu();
        contactHr.classList.add("opened");
    }, 100);
});
var horizontalRules = document.querySelectorAll(".hr");
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
        horizontalRules.forEach(function (hr) {
            hr.classList.remove("opened");
        });
    });
});
var lightbulb = document.querySelector(".lightbulb");
function setToLightTheme() {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    currentTheme = 'light';
    localStorage.setItem("mytheme", currentTheme);
    lightbulb.textContent = "toggle_on";
    console.log('theme was dark, going light');
}
function setToDarkTheme() {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    currentTheme = 'dark';
    localStorage.setItem("mytheme", currentTheme);
    lightbulb.textContent = "toggle_off";
    console.log('theme was light, going dark');
}
lightbulb.addEventListener('click', () => {
    if (lightbulb.textContent == "toggle_on") {
        setToDarkTheme();
    }
    else if (lightbulb.textContent == "toggle_off") {
        setToLightTheme();
    }
});
