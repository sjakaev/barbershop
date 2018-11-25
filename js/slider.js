;{"use strict";
let prev = document.querySelector(".reviews__prev");
let next = document.querySelector(".reviews__next");
let slide1 = document.querySelector("#reviews-input-1");
let slide2 = document.querySelector("#reviews-input-2");
let slide3 = document.querySelector("#reviews-input-3");
let slides = [slide1, slide2, slide3];
let checkedSlide = slide1;



prev.addEventListener("click", function() {
  if (slides.indexOf(checkedSlide) !== 0) {
    checkedSlide.checked = "";
	slides[slides.indexOf(checkedSlide) - 1].checked = "checked";
	checkedSlide = slides[slides.indexOf(checkedSlide) - 1];
  }
});

next.addEventListener("click", function() {
  if (slides.indexOf(checkedSlide) !== 2) {
    checkedSlide.checked = "";
	slides[slides.indexOf(checkedSlide) + 1].checked = "checked";
	 checkedSlide = slides[slides.indexOf(checkedSlide) + 1];
  }
});

slide1.addEventListener("click", function() {
  checkedSlide.checked = "";
  slide1.checked = "checked";
  checkedSlide = slide1;
});

slide2.addEventListener("click", function() {
  checkedSlide.checked = "";
  slide2.checked = "checked";
  checkedSlide = slide2;
});

slide3.addEventListener("click", function() {
  checkedSlide.checked = "";
  slide3.checked = "checked";
  checkedSlide = slide3;
});
}
