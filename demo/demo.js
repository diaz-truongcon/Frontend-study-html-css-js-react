var slideIndex = 1;

const data = [1, 1, 1, 1, 1, 1, 1, 1, 1];

const show = document.querySelector(".slideshow-container");
console.log(show);

data.forEach((item, index) => {
    show.innerHTML +=
        `
      <div class="slide fade">
        <h1>${index + 1}</h1>
        <img src="https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg" style="width:100%">
      </div>
      `;
})
const slides = document.getElementsByClassName("slide");

function plusSlides(n) {
    showSlides(slideIndex += n);
    console.log(slideIndex);
}
function showSlides(n) {
  if (window.matchMedia("(max-width: 768px)").matches) { // Mobile
    if (n >= slides.length) {
      slideIndex = 0;
  }
  if (n < 0) {
      slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
} else if (window.matchMedia("(max-width: 1024px)").matches) { // Tablet
   
} else { // Laptop và các thiết bị lớn hơn
  if(n == slides.length -1) {
    slideIndex = 1;
  }
  if(n < 1) {
    slideIndex = slides.length - 2;
  }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex].style.display = "block";
    slides[slideIndex + 1].style.display = "block";
}
  
}
showSlides(slideIndex);
