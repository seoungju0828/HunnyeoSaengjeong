const images = ["images/intro_img1.png", "images/intro_img2.png", "images/intro_img3.png", "images/intro_img4.png", "images/intro_img5.png", "images/intro_img6.png", "images/intro_img7.png", "images/intro_img8.png", "images/intro_img9.png", "images/intro_img10.png", "images/intro_img11.png"];
let currentImageIndex = 0;

const intro_img = document.getElementById("introImg-item");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function showImage(index) {
    intro_img.src = images[index];
}

prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});

nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});

// 초기 이미지 표시
showImage(currentImageIndex);