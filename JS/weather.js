const getJSON = function(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        const status = xhr.status;
        if(status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};
  
getJSON('http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=1eb1d18602c0e2dde562cdc2005a4495&units=metric',

function(err, data) {

    var ment = "오늘 아닐리 X";
    var temp = `온도 : ${data.main.temp}°`;
    var wind = `풍속 : ${data.wind.speed}m/s`;
    var humidity = `습도 : ${data.main.humidity}%`;
    var temp_max = `최고 : ${data.main.temp_max}°`;
    var temp_min = `최저 : ${data.main.temp_min}°`;
    
    // // HTML 요소의 내용을 설정합니다.
    document.getElementById("ment").textContent = ment;
    document.getElementById("temp").textContent = temp;
    document.getElementById("wind").textContent = wind;
    document.getElementById("humidity").textContent = humidity;
    document.getElementById("temp_max").textContent = temp_max;
    document.getElementById("temp_min").textContent = temp_min;

});

function getWeatherData(city) {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;
  
    fetch(weatherURL)
        .then(response => response.json())
        .then(data => {
        // 날씨 정보를 화면에 표시
            const temperatureElement = document.querySelector('.temperature');
            const placeElement = document.querySelector('.place');
            const descriptionElement = document.querySelector('.description');
            
            temperatureElement.textContent = `${data.main.temp}°C`;
            placeElement.textContent = data.name;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('날씨 정보를 가져오는 중 오류가 발생했습니다:', error);
        }
    );
}
  
// 서울의 날씨 정보를 가져옵니다. 다른 도시로 변경하려면 도시 이름을 수정하세요.
getWeatherData('seoul');