var currentData = StarType;

function doSort_star(key) {
    currentData.sort(function(a, b) {
        return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    });

    renderTable(currentData);
}

function doSearch_star() {
    var search_txt = document.getElementById("searchTxt2").value;
    var regEXP = new RegExp(search_txt, "i");

    var data = StarType.filter(item => {
        if (item.type === search_txt) {
            return true;
        } else {
            return false;
        }
    });


    currentData = data;
    renderTable_star(data);
}

function renderTable_star(data) {
    var h = [];
    console.log(data)

    data.forEach(item => {
        h.push(`<tr>`);
        h.push(`<td>${item.Style}</td>`);
        h.push(`<td>${item.Advantages}</td>`);
        h.push(`<td>${item.Disadvantage}</td>`);
        h.push(`<td>${item.Attack}</td>`);
        h.push(`</tr>`);
    });

    document.querySelector("#tb_star>tbody").innerHTML = h.join('');
    
}

function checkEnter(event) {
    if (event.keyCode === 13) {
        doSearch_star();
    }
}