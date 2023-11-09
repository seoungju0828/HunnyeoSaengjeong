// TOP 슬라이드 코드
const topImages = ["Images/TOP1.png", "Images/TOP2.png", "Images/TOP3.png", "Images/TOP4.png", "Images/TOP5.png"];
const bottomImages = ["Images/Bottom1.png", "Images/Bottom2.png", "Images/Bottom3.png", "Images/Bottom4.png", "Images/Bottom5.png"];
const topImageScores = [5, 4, 3, 2, 1];
const bottomImageScores = [1, 2, 3, 4, 5];
let currentTopImageIndex = 0;
let currentBottomImageIndex = 0;
let topSlideScore = topImageScores[0];
let bottomSlideScore = bottomImageScores[0];
const introTopImage = document.getElementById("TOP-item");
const introBottomImage = document.getElementById("BOTTOM-item");
const prevButtonTop = document.getElementById("prev-button-T");
const nextButtonTop = document.getElementById("next-button-T");
const prevButtonBottom = document.getElementById("prev-button-B");
const nextButtonBottom = document.getElementById("next-button-B");
const topScoreContainer = document.getElementById("top-score-container");
const bottomScoreContainer = document.getElementById("bottom-score-container");

// const ScoreContainer = document.querySelector(".Score-item");
// const ScoreContainer = document.getElementById("Score-container");

function updateTopSlideAndScore(topIndex) {
    introTopImage.src = topImages[topIndex];
    topSlideScore = topImageScores[topIndex];
    topScoreContainer.textContent = topSlideScore;
    checkAndDisplayTopResult(topIndex, currentBottomImageIndex);
}

function updateBottomSlideAndScore(bottomIndex) {
    introBottomImage.src = bottomImages[bottomIndex];
    bottomSlideScore = bottomImageScores[bottomIndex];
    bottomScoreContainer.textContent = bottomSlideScore;
    checkAndDisplayBottomResult(currentTopImageIndex, bottomIndex);
}

function checkAndDisplayTopResult(topIndex, bottomIndex) {
    if (topIndex === 0) {
        if (bottomIndex === 0 || bottomIndex === 1)
            topScoreContainer.textContent = "그저그럼";
        else if (bottomIndex === 2 || bottomIndex === 3)
            topScoreContainer.textContent = "좋음";
        else if (bottomIndex === 4)
            topScoreContainer.textContent = "별로";
    } else if (topIndex === 1) {
        if (bottomIndex === 0)
            topScoreContainer.textContent = "좋음";
        else if (bottomIndex === 1)
            topScoreContainer.textContent = "그저그럼";
        else
            topScoreContainer.textContent = "별로";
    } else if (topIndex === 2) {
        if (bottomIndex === 0)
            topScoreContainer.textContent = "그저그럼";
        else if (bottomIndex === 1 || bottomIndex === 2 || bottomIndex === 3)
            topScoreContainer.textContent = "별로";
        else if (bottomIndex === 4)
            topScoreContainer.textContent = "좋음";
    } else if (topIndex === 3) {
        if (bottomIndex === 0 || bottomIndex === 1 || bottomIndex === 4)
            topScoreContainer.textContent = "좋음";
        else if (bottomIndex === 2 || bottomIndex === 3)
            topScoreContainer.textContent = "별로";
    } else if (topIndex === 4) {
        if (bottomIndex === 0 || bottomIndex === 2 || bottomIndex === 3)
            topScoreContainer.textContent = "좋음";
        else if (bottomIndex === 1 || bottomIndex === 4)
            topScoreContainer.textContent = "그저그럼";
    }
}

// function checkAndDisplayBottomResult(topIndex, bottomIndex) {
//     if (topIndex === 0) {
//         if (bottomIndex === 0 || bottomIndex === 1)
//             bottomScoreContainer.textContent = "그저그럼";
//         else if (bottomIndex === 2 || bottomIndex === 3)
//             bottomScoreContainer.textContent = "별로";
//         else if (bottomIndex === 4)
//             bottomScoreContainer.textContent = "좋음";
//     } else if (topIndex === 1) {
//         if (bottomIndex === 0)
//             bottomScoreContainer.textContent = "별로";
//         else if (bottomIndex === 1)
//             bottomScoreContainer.textContent = "그저그럼";
//         else
//             bottomScoreContainer.textContent = "좋음";
//     } else if (topIndex === 2) {
//         if (bottomIndex === 0)
//             bottomScoreContainer.textContent = "별로";
//         else if (bottomIndex === 1 || bottomIndex === 2 || bottomIndex === 3)
//             bottomScoreContainer.textContent = "좋음";
//         else if (bottomIndex === 4)
//             bottomScoreContainer.textContent = "그저그럼";
//     } else if (topIndex === 3) {
//         if (bottomIndex === 0 || bottomIndex === 1 || bottomIndex === 4)
//             bottomScoreContainer.textContent = "그저그럼";
//         else if (bottomIndex === 2 || bottomIndex === 3)
//             bottomScoreContainer.textContent = "좋음";
//     } else if (topIndex === 4) {
//         if (bottomIndex === 0 || bottomIndex === 2 || bottomIndex === 3)
//             bottomScoreContainer.textContent = "별로";
//         else if (bottomIndex === 1 || bottomIndex === 4)
//             bottomScoreContainer.textContent = "좋음";
//     }
// }

// TOP 슬라이드 초기 결과 표시
checkAndDisplayTopResult(currentTopImageIndex, currentBottomImageIndex);

// BOTTOM 슬라이드 초기 결과 표시
// checkAndDisplayBottomResult(currentTopImageIndex, currentBottomImageIndex);

// TOP 슬라이드 이벤트 리스너
prevButtonTop.addEventListener("click", () => {
    currentTopImageIndex = (currentTopImageIndex - 1 + topImages.length) % topImages.length;
    updateTopSlideAndScore(currentTopImageIndex);
    checkAndDisplayTopResult(currentTopImageIndex, currentBottomImageIndex);
});

nextButtonTop.addEventListener("click", () => {
    currentTopImageIndex = (currentTopImageIndex + 1) % topImages.length;
    updateTopSlideAndScore(currentTopImageIndex);
    checkAndDisplayTopResult(currentTopImageIndex, currentBottomImageIndex);
});

// BOTTOM 슬라이드 이벤트 리스너
prevButtonBottom.addEventListener("click", () => {
    currentBottomImageIndex = (currentBottomImageIndex - 1 + bottomImages.length) % bottomImages.length;
    updateBottomSlideAndScore(currentBottomImageIndex);
    checkAndDisplayBottomResult(currentTopImageIndex, currentBottomImageIndex);
});

nextButtonBottom.addEventListener("click", () => {
    currentBottomImageIndex = (currentBottomImageIndex + 1) % bottomImages.length;
    updateBottomSlideAndScore(currentBottomImageIndex);
    checkAndDisplayBottomResult(currentTopImageIndex, currentBottomImageIndex);
});