document.addEventListener("DOMContentLoaded", () => {
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");
  const slider = document.querySelector("#slider");
  const sliderSections = document.querySelectorAll(".slider-section");
  const fulImgBox = document.getElementById("fulImgBox");
  const fulImg = document.getElementById("fulImg");
  const galleryImages = document.querySelectorAll(".img-gallery img");
  const closeSpan = document.querySelector(".ful-img span");

    galleryImages.forEach((img) => {
      img.addEventListener("click", () => {
        fulImgBox.style.display = "flex";
        fulImg.src = img.src;
      });
    });
  
    closeSpan.addEventListener("click", () => {
      fulImgBox.style.display = "none";
    });

  let currentIndex = 0;
  const totalSlides = sliderSections.length;

  function updateSliderPosition() {
    const offset = currentIndex * -100;
    slider.style.transform = `translateX(${offset}%)`;
    slider.style.transition = "transform 0.5s ease-in-out";
  }

  btnRight.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderPosition();
  });

  btnLeft.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
  });


function updateSliderHeight() {
  const currentSlide = sliderSections[currentIndex];
  const slideHeight = currentSlide.offsetHeight;
  const slideWidth = currentSlide.offsetWidth;
  slider.style.height = `${slideHeight}px`;
  slider.style.width = `${slideWidth}px`;
}

function updateSliderPosition() {
  const offset = currentIndex * -100;
  slider.style.transform = `translateX(${offset}%)`;
  slider.style.transition = "transform 0.5s ease-in-out";
  updateSliderHeight();
}
});

updateSliderHeight();

$(document).ready(function(){
  $('.ir-arriba').click(function(){
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){
      $('.ir-arriba').slideDown(300);
    }
    else{
      $('.ir-arriba').slideUp(300);
    }
  });
});