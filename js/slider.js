var prev = document.querySelector(".reviews__prev");
var next = document.querySelector(".reviews__next");
var slide1 = document.querySelector("#reviews-input-1");
var slide2 = document.querySelector("#reviews-input-2");
var slide3 = document.querySelector("#reviews-input-3");
var slider = document.querySelector(".slider");
var slides = [slide1, slide2, slide3];
var checkedSlide = slide1;



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
