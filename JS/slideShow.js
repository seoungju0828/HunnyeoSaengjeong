const images = ["Images/TOP1.png", "Images/TOP2.png", "Images/TOP3.png", "Images/TOP4.png", "Images/TOP5.png"];
let currentImageIndex = 0;

const intro_img = document.getElementById("TOP-item");
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