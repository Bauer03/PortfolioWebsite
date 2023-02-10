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

// Add color change to elements when lightbulb is clicked

/* 
  * add the "BgBlack" class to elements with the "startBgBlack" class.

  * define Black in CSS as a class which transitions from color: #ddb892 to color: black
  * define BgBlack in CSS as a class which transitions from background-color: #ddb892 to background-color: black

  * When lightbulb is clicked, add the "Black" class to elements with the "startBlack" class.
  * When lightbulb is clicked, add the "BgBlack" class to elements with startBgBlack
  
  * If an element has the "bgBlack" class and lightbulb is clicked, "bgBlack" class is removed and "bgWhite" class is added.

*/

var lightOn = true;

var bodyDiv = document.querySelector(".bodyDiv");
var paul = document.querySelector(".Paul");
var bauer = document.querySelector(".Bauer");
var arrow = document.querySelector(".bouncingArrow");
var scrollBox = document.querySelector(".scrollBox");
var fPart = document.getElementById("firstPart");
var sPart = document.getElementById("secondPart");
var aboutBtn = document.querySelector(".aboutBtn");
var secondBtn = document.querySelector(".secondBtn");
var contactBtn = document.querySelector(".contactBtn");
var btnDivs = document.querySelectorAll(".changePtr");
var lightbulb = document.querySelector(".lightbulb");
var footer = document.querySelector(".botFooter");

var startBgBeige = document.querySelectorAll(".startBgBeige");
var startBgBlack = document.querySelectorAll(".startBgBlack");

lightbulb.addEventListener("click", function() {
    if (lightOn) {
        paul.classList.add("isBeige");
        paul.classList.remove("isBlack");
        lightbulb.classList.add("isBeige");
        lightbulb.classList.remove("isBlack");
        bauer.classList.add("isBeige");
        bauer.classList.remove("isBlack");
        arrow.classList.add("isBeige");
        arrow.classList.remove("isBlack");
        fPart.classList.add("isBlack");
        fPart.classList.remove("isBeige");
        sPart.classList.add("isBlack");
        sPart.classList.remove("isBeige");
        aboutBtn.classList.add("isBeige");
        aboutBtn.classList.remove("isBlack");
        secondBtn.classList.add("isBeige");
        secondBtn.classList.remove("isBlack");
        contactBtn.classList.add("isBeige");
        contactBtn.classList.remove("isBlack");
        footer.classList.add("isBeige");
        footer.classList.remove("isBlack");

        btnDivs.forEach(function(elem) {
          elem.classList.add("bgBlack");
          elem.classList.remove("bgBeige");
        });

        startBgBeige.forEach(function(elem) {
          elem.classList.add("bgBlack");
          elem.classList.remove("bgBeige");
        });
        startBgBlack.forEach(function(elem) {
          elem.classList.add("bgBeige");
          elem.classList.remove("bgBlack");
        });

        lightOn = false;
  } else {
      paul.classList.remove("isBeige");
      paul.classList.add("isBlack");
      lightbulb.classList.remove("isBeige");
      lightbulb.classList.add("isBlack");
      bauer.classList.remove("isBeige");
      bauer.classList.add("isBlack");
      arrow.classList.remove("isBeige");
      arrow.classList.add("isBlack");
      fPart.classList.remove("isBlack");
      fPart.classList.add("isBeige");
      sPart.classList.remove("isBlack");
      sPart.classList.add("isBeige");
      aboutBtn.classList.remove("isBeige");
      aboutBtn.classList.add("isBlack");
      secondBtn.classList.remove("isBeige");
      secondBtn.classList.add("isBlack");
      contactBtn.classList.remove("isBeige");
      contactBtn.classList.add("isBlack");
      footer.classList.remove("isBeige");
      footer.classList.add("isBlack");

      startBgBeige.forEach(function(elem) {
        elem.classList.remove("bgBlack");
        elem.classList.add("bgBeige");
      });
      startBgBlack.forEach(function(elem) {
        elem.classList.remove("bgBeige");
        elem.classList.add("bgBlack");
      });

      btnDivs.forEach(function(elem) {
        elem.classList.remove("bgBlack");
        elem.classList.add("bgBeige");
      });

      lightOn = true;
  }
});

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