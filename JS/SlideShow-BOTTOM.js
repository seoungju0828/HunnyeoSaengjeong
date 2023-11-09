const images2 = ["Images/Bottom1.png", "Images/Bottom2.png", "Images/Bottom3.png", "Images/Bottom4.png", "Images/Bottom5.png"];
let currentImageIndex2 = 0;

const intro_img2 = document.getElementById("BOTTOM-item");
const prevButton2 = document.getElementById("prev-button-B");
const nextButton2 = document.getElementById("next-button-B");

function showImage2(index) {
    intro_img2.src = images2[index];
}

prevButton2.addEventListener("click", () => {
    currentImageIndex2 = (currentImageIndex2 - 1 + images2.length) % images2.length;
    showImage2(currentImageIndex2);
});

nextButton2.addEventListener("click", () => {
    currentImageIndex2 = (currentImageIndex2 + 1) % images2.length;
    showImage2(currentImageIndex2);
});

// 초기 이미지 표시
showImage2(currentImageIndex2);