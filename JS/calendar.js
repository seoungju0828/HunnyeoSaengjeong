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
