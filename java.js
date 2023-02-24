window.onload = function() {
  // Try to read from local storage, otherwise set to default
  let currentTheme = localStorage.getItem("mytheme") || "default";
  let bodyDiv = document.querySelector(".bodyDiv");
  var lightbulb = document.querySelector(".lightbulb");
  var disc = document.getElementById("discLogo");
  var insta = document.getElementById("instaLogo");
  var twitter = document.getElementById("twtLogo");
  
  // Set the theme that we read from local storage
  setTheme("default", currentTheme);

  // Add click event listener
  lightbulb.addEventListener("click", function(){
    // Get the user's choice from the event object `e`.
    let newTheme = null;

    if(currentTheme == 'default') {
      disc.src = 'Images/discordBlack.png';
      insta.src = 'Images/instaBlack.png';
      twitter.src = 'Images/twitterBlack.png';
      newTheme = "default"; 
    }
    else {
      disc.src = 'Images/discordBeige.png';
      insta.src = 'Images/instaBeige.png';
      twitter.src = 'Images/twitterBeige.png';
      newTheme = "darkTheme";
    }
    // Set the theme
    setTheme(currentTheme, newTheme);
  });

  function setTheme(oldTheme, newTheme) {
    bodyDiv.classList.remove(oldTheme);
    bodyDiv.classList.add(newTheme);
    // Store the new theme
    localStorage.setItem("mytheme", newTheme);
    // Update the current theme after the class changes have been made
    currentTheme = newTheme;
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
};
