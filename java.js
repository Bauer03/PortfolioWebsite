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

// Disappear on click

document.getElementById("arrowA").addEventListener("click", function(){
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
    document.getElementById("arrowA").href = "#"
    document.getElementById("arrowA").style.pointerEvents = "auto";
    document.getElementById("arrowA").style.cursor = "pointer";
    document.getElementById("arrowA").style.opacity = "1";
  }
}

// Add color change to elements when lightbulb is clicked

var lightOn = true;

var bodyDiv = document.querySelector(".bodyDiv");
var paul = document.querySelector(".Paul");
var bauer = document.querySelector(".Bauer");
var arrow = document.querySelector(".bouncingArrow");
var scrollBox = document.querySelector(".scrollBox");
var fPart = document.getElementById("firstPart");
var sPart = document.getElementById("secondPart");

var lightbulb = document.querySelector(".lightbulb");

lightbulb.addEventListener("click", function() {
    if (lightOn) {
        bodyDiv.style.backgroundColor = "black";
        paul.style.color = "#ddb892";
        lightbulb.style.color = "#ddb892";
        bauer.style.color = "#ddb892";
        arrow.style.color = "#ddb892";
        scrollBox.style.backgroundColor = "#ddb892";
        fPart.style.color = "black";
        sPart.style.color = "black";


        lightOn = false;
    } else {
        bodyDiv.style.backgroundColor = "#ddb892";
        paul.style.color = "black";
        lightbulb.style.color = "black";
        bauer.style.color = "black";
        arrow.style.color = "black";
        scrollBox.style.backgroundColor = "black";
        fPart.style.color = "#ddb892";
        sPart.style.color = "#ddb892";


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
