let $pharr = new Array();
let $phtime = new Array();
let $temparr = new Array();
let $temptime = new Array();
$(document).ready(function road(){

    timer = setInterval( function () {

        $.ajax({
            url: "http://175.126.123.217:5657/machbase?q=select value from tag where name ='ph' order by time desc limit 10;",
            dataType: 'json',
            type: 'GET',
            success: function(data){
                $pharr = [];
                for (var i = 9; i>=0; i--){
                    $pharr.push(data.data[i]['value']);
                }
                /*$huMean = parseInt($huMean);*/
                 /*$('.Temp24').empty();*/
                 /*$('.Co2Icon').append('<i class="fa-solid fa-droplet-percent"></i>');*/
            }
        });

        $.ajax({
            url: "http://175.126.123.217:5657/machbase?q=select time from tag where name ='ph' order by time desc limit 10;",
            dataType: 'json',
            type: 'GET',
            success: function(data){
                $phtime = [];
                for (var i = 9; i>=0; i--){
                    to_time = (data.data[i]['time']).substr(10,10);
                    $phtime.push(to_time);
                }
                /*$huMean = parseInt($huMean);*/
                 /*$('.Temp24').empty();*/
                 /*$('.Co2Icon').append('<i class="fa-solid fa-droplet-percent"></i>');*/
            }
        });
        $.ajax({
            url: "http://175.126.123.217:5657/machbase?q=select value from tag where name ='temp' order by time desc limit 10;",
            dataType: 'json',
            type: 'GET',
            success: function(data){
                $temparr = [];
                for (var i = 9; i>=0; i--){
                    $temparr.push(data.data[i]['value']);
                }
                /*$huMean = parseInt($huMean);*/
                 /*$('.Temp24').empty();*/
                 /*$('.Co2Icon').append('<i class="fa-solid fa-droplet-percent"></i>');*/
            }
        });

        $.ajax({
            url: "http://175.126.123.217:5657/machbase?q=select time from tag where name ='temp' order by time desc limit 10;",
            dataType: 'json',
            type: 'GET',
            success: function(data){
                $temptime = [];
                for (var i = 9; i>=0; i--){
                    to_time = (data.data[i]['time']).substr(10,10);
                    $temptime.push(to_time);
                }
                /*$huMean = parseInt($huMean);*/
                 /*$('.Temp24').empty();*/
                 /*$('.Co2Icon').append('<i class="fa-solid fa-droplet-percent"></i>');*/
            }
        });
        var context = document
            .getElementById('myChart')
            .getContext('2d');
        var myChart = new Chart(context, {
            type: 'line', // 차트의 형태
            data: { // 차트에 들어갈 데이터
                labels: $phtime,
                datasets: [
                    { //데이터
                        label: 'PH', //차트 제목
                        fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                        data: $pharr,
                        backgroundColor: [
                            //색상
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            //경계선 색상
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1 //경계선 굵기
                    } ,
                    {
                        label: 'test2',
                        fill: false,
                        data: $temparr,
                        backgroundColor: 'rgb(157, 109, 12)',
                        borderColor: 'rgb(157, 109, 12)'
                    }
                ]
            },

            options: {
                animation : {
                  duration :0
                },
                scales : {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: false
                            }
                        }
                    ]
                }
            }
        });
        myChart.update();
    }, 1000);
});
