// Arrow button, scroll animation on click

let button = document.getElementById("arrowA");
let target = document.querySelector(".arrowA");

button.addEventListener("click", function() {
  window.scrollTo({
    top: target.offsetTop,
    left: 0,
    behavior: "smooth"
  });
});

// In from right animation on scroll

(function($) {
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);
  
  var win = $(window);
  
  var allMods = $(".inFromRight");
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible"); 
    } 
  });
  
  win.scroll(function(event) {
    
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
    allMods.each(function(i, el) {
        var el = $(el);
        if (!el.visible(true)) {
            el.removeClass("come-in");
            el.removeClass("already-visible");
        }
    });
  });

// Disable arrow after click + scroll

let arrowId = document.getElementById("arrowA");
arrowId.addEventListener("click", function(){
  this.href = "javascript:void(0)";
  this.style.pointerEvents = "none";
  this.style.cursor = "default";
  this.style.opacity = "0";
});

window.onscroll = function() {
  checkPosition();
};

function checkPosition() {
  if (window.pageYOffset === 0) {
    arrowId.href = "#"
    arrowId.style.pointerEvents = "auto";
    arrowId.style.cursor = "pointer";
    arrowId.style.opacity = "1";
  }
}

// Change colors when lightbulb is clicked
var lightbulb = document.querySelector('.lightbulb');
var bodyDiv = document.querySelector(".bodyDiv");
var disc = document.getElementById("discLogo");
var insta = document.getElementById("instaLogo");
var twitter = document.getElementById("twtLogo");
var currentTheme;

window.onload = function() {
  let currentTheme = localStorage.getItem("mytheme") || "default";

  if(currentTheme == 'default') {
    setToDefault();
  }
  else {
    setToDarkTheme();
  }
}

lightbulb.addEventListener("click", function() {
  if (currentTheme == 'default') {
    setToDefault();
  } else if (currentTheme == 'darkTheme') {
    setToDarkTheme();
  }
});

function setToDefault() {
  bodyDiv.classList.remove("darkTheme");
  bodyDiv.classList.add("default");
  disc.src = 'Images/discordBlack.png';
  insta.src = 'Images/instaBlack.png';
  twitter.src = 'Images/twitterBlack.png';
  
  currentTheme = 'default';

  localStorage.setItem("mytheme", currentTheme);
}

function setToDarkTheme() {
  bodyDiv.classList.remove("default");
  bodyDiv.classList.add("darkTheme");
  disc.src = 'Images/discordBeige.png';
  insta.src = 'Images/instaBeige.png';
  twitter.src = 'Images/twitterBeige.png';

  currentTheme = 'darkTheme';

  localStorage.setItem("mytheme", currentTheme);
}

// Open and close text section on click 

document.querySelector(".aboutDiv").addEventListener("click", function() {
  var aboutTxt = document.querySelector(".aboutTxt");
  aboutTxt.classList.toggle("show");
});

document.querySelector(".secondDiv").addEventListener("click", function() {
  var secondTxt = document.querySelector(".secondTxt");
  secondTxt.classList.toggle("show");
});

document.querySelector(".contactDiv").addEventListener("click", function() {
  var secondTxt = document.querySelector(".contactTxt");
  secondTxt.classList.toggle("show");
});