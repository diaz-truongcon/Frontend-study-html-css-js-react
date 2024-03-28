function showmenu() {
  const show = document.querySelector(".show-menu");
  const home = document.getElementById("home");
  const login = document.getElementById("login");
  login.classList.toggle("an");
  home.classList.toggle("an");
  show.classList.toggle("none");
}

var slideIndex = 1;

const data = [1, 1, 1, 1, 1, 1, 1, 1, 1];

const hello = document.getElementById("show1");
console.log("heloo",hello);

data.forEach((item, index) => {
  show1.innerHTML +=
    `
        <div class="slide fade">
            <img src="https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg" class="img-magazine">
            <div style="font-size: 12px; margin-top: 5px"> 5 min read </div>
            <div class="title-magazine">Magazines for graphic designers: The best graphic design publications</div>
            <div class="description-magazine">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
            <div class="read-more" style="display: flex; justify-content: center; align-item: center;"> 
                Read more
                <i class="fa-solid fa-caret-right" style="margin-left: 10px"></i>
            </div>
            <p>${index + 1}</p>
        </div>
      `;
})
const slides = document.getElementsByClassName("slide");

function plusSlides(n) {
  showSlides(slideIndex += n);
  console.log(slideIndex);
}
function showSlides(n) {
  // 1 0 vs 1 0 thi 
  if (window.matchMedia("(max-width: 1024px)").matches) { // Mobile
    if (n == slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length - 2;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex].style.display = "block";
  } else { // Laptop và các thiết bị lớn hơn
    if (n == slides.length - 1) {
      slideIndex = 1;
    }
    if (n < 1) {
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

// ---

var slideIndex1 = 1;

const data1 = [1, 1, 1, 1, 1, 1, 1, 1];

const show2 = document.querySelector(".slideshow-container-2");
console.log(show2);

data1.forEach((item, index) => {
  show2.innerHTML +=
    `
        <div class="slide1 fade">
            <img src="https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg" class="img-magazine">
            <div style="font-size: 12px; margin-top: 5px"> 5 min read </div>
            <div class="title-magazine">Magazines for graphic designers: The best graphic design publications</div>
            <div class="description-magazine">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
            <div class="read-more" style="display: flex; justify-content: center; align-item: center;"> 
                Read more
                <i class="fa-solid fa-caret-right" style="margin-left: 10px"></i>
            </div>
            <p>${index + 1}</p>
        </div>
      `;
})
const slides1 = document.getElementsByClassName("slide");

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
  console.log(slideIndex1);
}
function showSlides1(n) {
  // 1 0 vs 1 0 thi 
  if (window.matchMedia("(max-width: 1024px)").matches) { // Mobile
    if (n == slides1.length - 1) {
      slideIndex1 = 1;
    }
    if (n < 1) {
      slideIndex1 = slides1.length - 2;
    }
    for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
    }
    slides1[slideIndex1 - 1].style.display = "block";
    slides1[slideIndex1].style.display = "block";
  } else { // Laptop và các thiết bị lớn hơn
    if (n == slides1.length - 1) {
      slideIndex1 = 1;
    }
    if (n < 1) {
      slideIndex1 = slides1.length - 2;
    }
    for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
    }
    slides1[slideIndex1 - 1].style.display = "block";
    slides1[slideIndex1].style.display = "block";
    slides1[slideIndex1 + 1].style.display = "block";
  }

}
showSlides1(slideIndex1);

