

function init() {
    // initialisation stuff here
    var $pharr = new Array();
    var $phtime = new Array();
  }
  
  // elsewhere in code
  init();
    btn.addEventListener("click", function() {
        
        myFunc();
        
        
    });

    function myFunc(){
    var $senvalue = document.getElementById('sensorselect').value;
    var $startDate = document.getElementById("startDate").value;
    var $endDate = document.getElementById("endDate").value;
        $.ajax({
            url: "http://175.126.123.217:5657/machbase?q=select value from tag where name ='" +$senvalue +"' and time between to_date('"+$startDate+"') and to_date('"+$endDate+"') limit 300;",
            
            dataType: 'json',
            type: 'GET',
            success: function(data){
                $pharr = [];
                for (var i =0; i<300; i++){
                    $pharr.push(data.data[i]['value']);
                }
               
                /*$('.chaval').empty();
                /*$('.chaval').append($pharr);
                /*$huMean = parseInt($huMean);*/
                 /*$('.Temp24').empty();*/
                 /*$('.Co2Icon').append('<i class="fa-solid fa-droplet-percent"></i>');*/

                 
       
            }
        });

        $.ajax({
            url: "http://175.126.123.217:5657/machbase?q=select time from tag where name ='" +$senvalue +"' and time between to_date('"+$startDate+"') and to_date('"+$endDate+"') limit 300;",
           
            dataType: 'json',
            type: 'GET',
            success: function(data){
                $phtime = [];
                for (var i = 0; i<300; i++){
                    to_time = (data.data[i]['time']).substr(10,10);
                    $phtime.push(to_time);
                }
                /*$('.chatime').empty();
                $('.chatime').append($phtime);
                /*$huMean = parseInt($huMean);*/
                 
            }
        });
   
        $('.chart_draw').empty();
        $('.chart_draw').append('<canvas id="myChart"></canvas>');
        var context = document
            .getElementById('myChart')
            .getContext('2d');
        var myChart = new Chart(context, {
            type: 'line', // 차트의 형태
            data: { // 차트에 들어갈 데이터
                labels: $phtime,
                datasets: [
                    { //데이터
                        label: $senvalue, //차트 제목
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
    }