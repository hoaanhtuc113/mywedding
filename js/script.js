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


$(document).ready(function () {
  var submit = $("button[name='submit']");
  submit.click(function () {
      console.log("Hehe")
      var data = $('form#registry-form').serialize();

      // Validate the form
      var isValid = validateForm("registry-form");
      if (!isValid) {
          return false;
      }

      // Show the loading page
      // Show the loading animation
      $(".page-preloader").fadeIn(function () {
          // After fading in, add dynamic content
          var dynamicContent = '<div class="page-preloader preloader-wrapp">' +
              '<img src="assets/images/logo-light.png" alt="">' +
              '<div class="preloader"></div>' +
              '</div>';

          // Append dynamic content after the preloader
          $(this).after(dynamicContent);
      });

      // Send form data to Google Apps Script
      $.ajax({
          type: 'POST',  // Change the method to POST
          url: 'https://script.google.com/macros/s/AKfycbzjZ-hqBsLIZboZZk1X1y5mk-Fju9TFoYPhg42ufbgB7h65xPqk-Fk_IL5V0m2PmcyD1w/exec',
          dataType: 'json',
          data: data,
          success: function (data) {
              $(".page-preloader").fadeOut();

              if (data === 'false') {
                  alert('Error');
              } else {
                  window.location.href = "/thankyou.html";
              }
          }
      });

      return false;
  });

  // Other parts of your code

  function validateForm(formId) {
      var form = document.forms[formId];
      var Ten = form["Ten"].value;
      var Sodienthoai = form["SDT"].value;
  
      if (Ten.trim() === "") {
          alert('Điền tên để mình còn biết ai đăng ký chứ');
          return false;
      }
  
      if (Sodienthoai.trim() === "") {
          alert('Còn số điện thoại sẽ để mình liên lạc khi đưa đón');
          return false;
      }
  
      return true; // Return true if the form is valid
  }
});