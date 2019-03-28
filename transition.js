var SLIDES;
var SLIDE_INTERVAL = 1000;

class Presentation {
  constructor(inter) {
    SLIDE_INTERVAL = inter;
    this.slides = Array.prototype.slice.call(
      document.getElementsByTagName("slide")
    );
    SLIDES = this.slides;
    this.hideAllElements();
    displayButton().addEventListener("click", function() {
      var elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
      }
      this.parentNode.removeChild(this);
      displaySlides();
    });
  }

  hideAllElements() {
    document.body.style.padding = "0px";
    document.body.style.margin = "0px";

    this.slides.forEach(slide => {
      hide(slide);
    });
  }
}

function hide(element) {
  element.style.display = "none";
}

function displayButton() {
  var btn = document.createElement("BUTTON"); // Create a <button> element
  btn.innerHTML = "Start Presentation"; // Insert text

  btn.style.backgroundColor = "#5352ed";
  btn.style.border = "none";
  btn.style.color = "white";
  btn.style.padding = "15px 32px";
  btn.style.textAlign = "center";
  btn.style.display = "inline-block";
  btn.style.fontSize = "16px";
  btn.style.cursor = "pointer";
  btn.style.position = "absolute";
  btn.style.top = "50%";
  btn.style.left = "50%";
  btn.style.transform = "translate(-50%, -50%)";
  btn.style.borderRadius = "4px";

  document.body.appendChild(btn);

  return btn;
}

function displaySlides() {
  SLIDE_NUMBER = 0;
  setInterval(displayNextSlide, SLIDE_INTERVAL);
}

function displayNextSlide() {
  if (SLIDE_NUMBER - 1 >= 0) {
    SLIDES[SLIDE_NUMBER - 1].style.display = "none";
  } else {
    SLIDES[SLIDES.length - 1].style.display = "none";
  }

  SLIDES[SLIDE_NUMBER].style.display = "block";

  if (SLIDE_NUMBER + 1 < SLIDES.length) {
    SLIDE_NUMBER++;
  } else {
    SLIDE_NUMBER = 0;
  }
}
