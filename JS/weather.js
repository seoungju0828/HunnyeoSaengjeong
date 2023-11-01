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
    if(err !== null) {
      alert('예상치 못한 오류 발생.' + err);
    } else {
    //   document.write(`현재
    //     온도는 ${data.main.temp}°
    //     풍속은 ${data.wind.speed}m/s
    //     습도는 ${data.main.humidity}%
    //     입니다.

    //     오늘의
    //     최고기온은 ${data.main.temp_max}°
    //     최저기온은 ${data.main.temp_min}°
    //     입니다.`);
    // }
    alert(`현재
        온도는 ${data.main.temp}°
        풍속은 ${data.wind.speed}m/s
        습도는 ${data.main.humidity}%
        입니다.

        오늘의
        최고기온은 ${data.main.temp_max}°
        최저기온은 ${data.main.temp_min}°
        입니다.`);
    }
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
    });
}
  
// 서울의 날씨 정보를 가져옵니다. 다른 도시로 변경하려면 도시 이름을 수정하세요.
getWeatherData('Seoul');