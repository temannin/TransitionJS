class Presentation {
  constructor(inter) {
    this.slideInterval = inter;
    this.slides = Array.prototype.slice.call(
      document.getElementsByTagName("slide")
    );
    this.initBody();
    this.hideAllElements();
  }

  initBody() {
    document.body.style.padding = "0px";
    document.body.style.margin = "0px";
  }

  hideAllElements() {
    this.slides.forEach(slide => {
      slide.style.display = "none";
    });
  }

  createStartButton() {
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
    this.button = btn;
    return btn;
  }

  start() {
    this.button.parentNode.removeChild(this.button);
    this.slideNumber = 0;
    var presentation = this;
    setInterval(function() {
      presentation.cycleSlides();
    }, presentation.slideInterval);
  }

  cycleSlides() {
    if (this.slideNumber - 1 >= 0) {
      this.slides[this.slideNumber - 1].style.display = "none";
    } else {
      this.slides[this.slides.length - 1].style.display = "none";
    }
    this.slides[this.slideNumber].style.display = "block";
    if (this.slideNumber + 1 < this.slides.length) {
      this.slideNumber++;
    } else {
      this.slideNumber = 0;
    }
  }
}
