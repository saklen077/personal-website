const header = document.querySelector(".navbar")

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 30) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


var moon = document.getElementById("moon");

moon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        moon.src = "images/sun.png";
        document.getElementById("change-text").style.color = "#212121";
        document.getElementById("change-text1").style.color = "#212121";
        document.getElementById("change-text2").style.color = "#212121";
        document.getElementById("change-text3").style.color = "#212121";
        document.getElementById("change-text4").style.color = "#212121";
        document.getElementById("change-text5").style.color = "#212121";
        document.getElementById("change-text6").style.color = "#212121";
        document.getElementById("change-text7").style.color = "#212121";
        document.getElementById("change-text8").style.color = "#212121";
        document.getElementById("change-text9").style.color = "#212121";
        document.getElementById("change-text10").style.color = "#212121";
        document.getElementById("change-text11").style.color = "#212121";
    } else {
        moon.src = "images/moon.png";
    }
}
