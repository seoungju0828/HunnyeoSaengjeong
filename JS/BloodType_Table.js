var currentData = BloodType;

function doSort(key) {
    currentData.sort(function(a, b) {
        return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    });

    renderTable(currentData);
}

function doSearch() {
    var search_txt = document.getElementById("searchTxt").value;
    var regEXP = new RegExp(search_txt, "i");

    var data = BloodType.filter(item => {
        if (item.Type === search_txt) {
            return true;
        } else {
            return false;
        }
    });

    currentData = data;
    renderTable(data);
}

function renderTable(data) {
    var h = [];

    data.forEach(item => {
        h.push(`<tr>`);
        h.push(`<td>${item.Style}</td>`);
        h.push(`<td>${item.Advantages}</td>`);
        h.push(`<td>${item.Disadvantage}</td>`);
        h.push(`<td>${item.Attack}</td>`);
        h.push(`</tr>`);
    });

    document.querySelector("#tb>tbody").innerHTML = h.join('');
}

function checkEnter(event) {
    if (event.keyCode === 13) {
        doSearch();
    }
}