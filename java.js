// Arrow button, scroll animation on click

let button = document.getElementById("arrowA");
let target = document.querySelector(".aboutBtn");

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

// Disable arrow after click, scroll page

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

var lightbulb = document.getElementById("bulb");
var bodyDiv = document.querySelector(".bodyDiv");
var disc = document.getElementById("discLogo");
var insta = document.getElementById("instaLogo");
var twitter = document.getElementById("twtLogo");

window.onload = function() {
  var currentTheme = localStorage.getItem("mytheme") || 'default';
  if(currentTheme == 'default') {
    setToDefault();
  }
  else {
    setToDarkTheme();
  }
}

lightbulb.addEventListener("click", function() {
  if (currentTheme == 'default') {
    setToDarkTheme();
  } else if (currentTheme == 'darkTheme') {
    setToDefault();
  }
});

function setToDefault() {
  bodyDiv.classList.remove("darkTheme"); // Todo: Simplify
  bodyDiv.classList.add("default");
  currentTheme = 'default';
  localStorage.setItem("mytheme", currentTheme);
}

function setToDarkTheme() {
  bodyDiv.classList.remove("default");
  bodyDiv.classList.add("darkTheme");
  currentTheme = 'darkTheme';
  localStorage.setItem("mytheme", currentTheme);
}

// Open and close text section on click

var abtDiv = document.querySelector(".aboutDiv");
var abtTxt = document.querySelector(".aboutTxt");

abtDiv.addEventListener("click", function(){
  if(abtTxt.classList.contains('show')) {
    abtTxt.classList.replace('show','hide');
  }
  else {
    abtTxt.classList.replace('hide','show');

    // Scroll to abtDiv element
    window.scrollTo({
      top: abtDiv.offsetTop,
      left: 0,
      behavior: "auto"
    });
  }
})