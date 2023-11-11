var submit = document.getElementById('submitButton');
submit.onclick = showImage;     //Submit 버튼 클릭시 이미지 보여주기

function showImage() {
    var newImage = document.getElementById('image-show').lastElementChild;
    newImage.style.visibility = "visible";
    
    document.getElementById('image-upload').style.visibility = 'hidden';

    document.getElementById('fileName').textContent = null;     //기존 파일 이름 지우기
}

function loadFile(input) {
    var file = input.files[0];
    var name = document.getElementById('fileName');
    name.style.display = 'none'; // 파일 이름 숨김.

    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'face-img'); // 'face-img' 클래스 추가
    newImage.src = URL.createObjectURL(file);

    var container = document.getElementById('image-show');
    container.innerHTML = ''; // 컨테이너 비움.
    container.appendChild(newImage);

    // 이미지 크기와 모양을 조정
    newImage.onload = function() {
        var imgWidth = newImage.width;
        var imgHeight = newImage.height;
        var imgRatio = imgWidth / imgHeight;

        var desiredWidth, desiredHeight;

        if (window.innerWidth <= 1024) {
            // 최대 폭이 1024px인 화면에 대한 크기 조절
            desiredWidth = 12; 
            desiredHeight = 17;
        } else if (window.innerWidth <= 768) {
            // 최대 폭이 768px인 화면에 대한 크기 조절
            desiredWidth = 15; 
            desiredHeight = 12;
        } else {
            // 더 큰 화면에 대한 기본 크기
            desiredWidth = 9; 
            desiredHeight = 15;
        }

        // 이미지를 수직 가운데 정렬
        newImage.style.verticalAlign = "middle";
    };
}

// 이미지가 중앙에 위치하도록 부모 컨테이너 스타일을 조정
var container = document.getElementById('image-show');
container.style.display = 'flex';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';

// 파일 입력 요소에 loadFile을 트리거하는 이벤트 리스너를 추가합니다.
var fileInput = document.getElementById('chooseFile');
fileInput.addEventListener('change', function () {
    loadFile(this);
});