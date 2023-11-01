var now = new Date();

var year = now.getFullYear();

var month = now.getMonth() + 1;

var date = now.getDate();

const datesContainerDiv = document.querySelectorAll(".dates")[0];
const setCalendar = (year, month) => {

    const titleMonthDiv = document.getElementsByClassName("month")[0];
    titleMonthDiv.innerHTML = `${month}월`;

    var firstDateDay = new Date(year, month - 1, 1).getDay();
    var lastDate = new Date(year, month - 1 + 1, 0).getDate();

    datesContainerDiv.replaceChildren();

    for (let date=1; date<=lastDate; date++) {
        let dateItemDiv = document.createElement("div");
        dateItemDiv.classList.add("date");
        dateItemDiv.classList.add("item");
        dateItemDiv.innerHTML = date;
        
        datesContainerDiv.appendChild(dateItemDiv);
    }

    let firstdateDiv = datesContainerDiv.firstElementChild;
    firstdateDiv.style.gridColumnStart = firstDateDay + 1;

    let saturdayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${7-firstDateDay})`);

    for (let dateItem of saturdayDivs) {
        dateItem.style.color = "blue";
    }
    
    let sundayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${(7-firstDateDay+1)%7})`);

    for (let dateItem of sundayDivs) {
        dateItem.style.color = "red";
    }

}

setCalendar(year, month);

const leftDiv = document.getElementsByClassName("left")[0];

leftDiv.onclick = () => {
    month--;

    if (month == 0) {
        year--;
        month = 12;
    }

    setCalendar(year, month);
}

const rightDiv = document.getElementsByClassName("right")[0];

rightDiv.onclick = () => {
    month++;

    if (month == 13) {
        year++;
        month = 1;
    }
    
    setCalendar(year, month);
}

const nowMonth = document.querySelectorAll(".month")[0];
nowMonth.onclick = () => {
    year = now.getFullYear();
    month = now.getMonth()+1;
    setCalendar(year, month);
}

const datesContainerDiv2 = document.querySelectorAll(".dates")[0];
const balloonDiv = document.createElement("div");
balloonDiv.classList.add("balloon");
document.body.appendChild(balloonDiv);

const setCalendar2 = (year, month) => {
    // ...

    // 7의 배수인 날짜를 클릭할 때 말풍선을 보여주는 함수
    function showBalloon(event) {
        const clickedDate = event.target;
        const dateValue = parseInt(clickedDate.innerText);

        if (dateValue % 7 === 0) {
            // 말풍선을 클릭한 날짜 위치 아래에 표시
            const dateRect = clickedDate.getBoundingClientRect();
            balloonDiv.style.top = dateRect.bottom + "px";
            balloonDiv.style.left = dateRect.left + "px";
            balloonDiv.textContent = `${dateValue}일: 7의 배수 날짜입니다!`;
            balloonDiv.style.display = "block";
        } else {
            // 7의 배수가 아닌 날짜를 클릭하면 말풍선 숨김
            balloonDiv.style.display = "none";
        }
    }

    // 각 날짜에 클릭 이벤트 추가
    const dateItems = datesContainerDiv2.querySelectorAll(".date.item");
    dateItems.forEach((dateItem) => {
        dateItem.addEventListener("click", showBalloon);
    });
}

const balloonStyles = `
    .balloon {
        position: absolute;
        background-color: #FF69B4; /* 분홍색 배경 */
        color: white;
        padding: 10px;
        border-radius: 15px; /* 더 둥근 테두리 */
        display: none;
        font-family: 'Hahmlet', serif;
        font-size: 1.2rem;
        // cursor: pointer;
    }
`;

function showBalloon(event) {
    const clickedDate = event.target;
    const dateValue = parseInt(clickedDate.innerText);

    if (dateValue % 7 === 0) {
        // 말풍선을 클릭한 날짜 위치 아래에 표시
        const dateRect = clickedDate.getBoundingClientRect();
        balloonDiv.style.top = dateRect.bottom + "px";
        balloonDiv.style.left = dateRect.left + "px";
        balloonDiv.innerHTML = `${dateValue}일: 7의 배수 날짜입니다! <i class="bi bi-heart-fill" style="font-size: 1.5rem;"></i>`;
        balloonDiv.style.display = "block";
    } else {
        // 7의 배수가 아닌 날짜를 클릭하면 말풍선 숨김
        balloonDiv.style.display = "none";
    }
}

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = balloonStyles;
document.head.appendChild(styleSheet);

setCalendar2(year, month);
