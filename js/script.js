! function(a) {
    "use strict";
    a(window).on("load", function() {
        a(".loader-inner").fadeOut(), a(".loader").delay(200).fadeOut("slow")
    });
    var b = a(".header"),
        c = b.offset();
    a(window).scroll(function() {
        a(this).scrollTop() > c.top + 500 && b.hasClass("default") ? b.fadeOut("fast", function() {
            a(this).removeClass("default").addClass("switched-header").fadeIn(200)
        }) : a(this).scrollTop() <= c.top + 500 && b.hasClass("switched-header") && b.fadeOut("fast", function() {
            a(this).removeClass("switched-header").addClass("default").fadeIn(100)
        })
    }), a("a.scroll").smoothScroll({
        speed: 800,
        offset: -60
    });
    var d = a(".mobile-but"),
        e = a(".main-nav ul");
    e.height();
    a(d).on("click", function() {
        return a(".toggle-mobile-but").toggleClass("active"), e.slideToggle(), a(".main-nav li a").addClass("mobile"), !1
    }), a(window).resize(function() {
        a(window).width() > 320 && e.is(":hidden") && (e.removeAttr("style"), a(".main-nav li a").removeClass("mobile"))
    }), a(".main-nav li a").click(function() {
        a(this).hasClass("mobile") && (e.slideToggle(), a(".toggle-mobile-but").toggleClass("active"))
    });
    for (var g = 0; g < a(".background-img").length; g++) {
        var h = a(".background-img").eq(g).children("img").attr("src");
        a(".background-img").eq(g).css("background", 'url("' + h + '")'), a(".background-img").eq(g).children("img").hide(), a(".background-img").eq(g).css("background-position", "initial")
    }
    a(".countdown").countdown("2023/09/24 17:0:0", function(b) {
        a(this).html(b.strftime("%D days %H:%M:%S"))
    }), a(".venobox").venobox({
        titleattr: "data-title",
        numeratio: !0
    })
}(jQuery);


let slideIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer; // reset timer
}

function prevSlide() {
  slideIndex--;
  showSlides();
  timer = _timer;
}

// Thumbnail image controlls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = _timer;
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  
  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index number
  slides[slideIndex].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex].classList.add("active");
}

// autoplay slides --------
let timer = 7; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer; // reset timer
  }
}, 1000); // 1sec