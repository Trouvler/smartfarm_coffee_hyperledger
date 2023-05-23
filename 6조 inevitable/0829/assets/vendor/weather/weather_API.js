$(document).ready(function(){
    let weatherIcon = {
        '01' : 'fas fa-sun',
        '02' : 'fas fa-cloud-sun',
        '03' : 'fas fa-cloud',
        '04' : 'fa-solid fa-cloud',
        '09' : 'fas fa-cloud-sun-rain',
        '10' : 'fas fa-cloud-showers-heavy',
        '11' : 'fas fa-poo-storm',
        '13' : 'far fa-snowflake',
        '50' : 'fas fa-smog'
    };

    let weatherText = {
        '01' : '맑음',
        '02' : '구름조금',
        '03' : '구름많음',
        '04' : '흐림',
        '09' : '소나기',
        '10' : '비',
        '11' : '천둥번개',
        '13' : '눈',
        '50' : '안개'
    };

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=Yeosu&appid=8b705b38027f03e0fbe3c3716207b553&units=metric',
        dataType: 'json',
        type: 'GET',
        success: function(data){
            var $Icon = (data.weather[0].icon).substr(0,2);
            var $Temp = data.main.temp + '&ordm;';
            var $Humi = data.main.humidity + '%';
            var $Wdsp = data.wind.speed + 'm/s';
            var $Cdmt = data.clouds.all + '%';
            var $city = data.name;
            let weather = data.weather[0].main;
            if (weather == 'Rain') {
              let rain = data.rain["1h"];
              $('.CurrRain').append(rain + '<h4 style = "display:inline">mm</h4>');
            }
            else {
              var $Rain = '0<h4 style = "display:inline">mm/h</h4>'
              $('.CurrRain').append($Rain);
            }
             $('.CurrText').append('<h3>' + weatherText[$Icon] + '</h3>');
             $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] + '"></> ');
             $('.CurrTemp').append($Temp);
             $('.CurrHumi').append($Humi);
             $('.CurrWdsp').append($Wdsp);
             $('.CurrCdmt').append($Cdmt);
             $('.City').append($city);
        }


    })
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?id=1832157&appid=8b705b38027f03e0fbe3c3716207b553&units=metric',
        dataType: 'json',
        type: 'GET',
        success: function(data){
            var $Icon = (data.list[3].weather[0].icon).substr(0,2);
            var $Temp = data.list[3].main.temp + '&ordm;';
            var $Humi = data.list[3].main.humidity + '%';
            var $Wdsp = data.list[3].wind.speed + 'm/s';
            var $Cdmt = data.list[3].clouds.all + '%';
            var $city = data.list[3].name;
            var $Time = data.list[3].dt_txt
            let weather = data.list[3].weather[0].main;
            if (weather == 'Rain') {
              let rain = data.list[3].rain["3h"];
              $('.RectRain').append(rain + '<h4 style = "display:inline">mm</h4>');
            }
            else {
              var $Rain = '0<h4 style = "display:inline">mm/h</h4>'
              $('.RectRain').append($Rain);
            }
             $('.RectText').append('<h3>' + weatherText[$Icon] + '</h3>');
             $('.RectIcon').append('<i class="' + weatherIcon[$Icon] + '"></> ');
             $('.RectTemp').append($Temp);
             $('.RectHumi').append($Humi);
             $('.RectWdsp').append($Wdsp);
             $('.RectCdmt').append($Cdmt);
             $('.RectTime').append($Time);
             $('.City').append($city);
        }
    });
});
