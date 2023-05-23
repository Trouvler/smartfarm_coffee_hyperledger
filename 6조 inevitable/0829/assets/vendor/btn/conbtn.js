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

function callMDBAPI(){

        var url1 = 'http://52.79.55.137:8090/api/tutorial';
        var dataType = 'json'
        var today = new Date();
        var year = today.getFullYear();
        var month = ('0' + (today.getMonth() + 1)).slice(-2);
        var day = ('0' + today.getDate()).slice(-2);
        var dateString = year+"." + month+"." + day;
        var hours = ('0' + today.getHours()).slice(-2); 
        // var hours = 03
        var minutes = ('0' + today.getMinutes()).slice(-2);
        var seconds = ('0' + today.getSeconds()).slice(-2); 
        var fulltime = dateString+"." + hours+"." + minutes +"."+ seconds;
        // var timeString = '0500'
        const allurl = url1 ;
       // const allurl = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=8sYOarNn6s5uHKKADz0AnWZbEUc4kwHrJEPawSEXyOiIYdXDcTiJDfKEhbA6Hf0pT7GymjZeNB0jKjPeINR2yw%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20221021&base_time=0500&nx=55&ny=127";
      
        getJSON(allurl,
        function(err, data) {
          if(err !== null) {
            alert('예상치 못한 오류 발생.' + err);
          } else {
        //       document.getElementById('kk1').innerHTML = JSON.stringify(data[0].title).replace("(", "").replace(")","").replace(" ","").split(",")[0].replace('"',"");
        //       document.getElementById('kk2').innerHTML = JSON.stringify(data[0].title).replace("(", "").replace(")","").replace(" ","").split(",")[1];
        //       document.getElementById('kk3').innerHTML = JSON.stringify(data[0].title).replace("(", "").replace(")","").replace(" ","").split(",")[2];
        //       document.getElementById('kk4').innerHTML = JSON.stringify(data[0].title).replace("(", "").replace(")","").replace(" ","").split(",")[3];
        //       document.getElementById('kk5').innerHTML = JSON.stringify(data[0].title).replace("(", "").replace(")","").replace(" ","").split(",")[4];
        //       document.getElementById('kk6').innerHTML = JSON.stringify(data[0].title).replace("(", "").replace(")","").replace(" ","").split(",")[5];
        //       document.getElementById('kk7').innerHTML = JSON.stringify(data[0].title).replace("(", "").replace(")","").replace(" ","").split(",")[6];
        //       document.getElementById('kk8').innerHTML = JSON.stringify(data[0].title).replace("(", "").replace(")","").replace(" ","").split(",")[7].replace('"',"");
              if (JSON.stringify(data[1].description) == '"0"'){
                document.getElementById('gj1').innerHTML = "OFF";
              }
              else {
                document.getElementById('gj1').innerHTML = "ON";
              }
              if (JSON.stringify(data[2].description) == '"0"'){
                document.getElementById('gj2').innerHTML = "OFF";
              }
              else {
                document.getElementById('gj2').innerHTML = "ON";
              }
              if (JSON.stringify(data[3].description) == '"0"'){
                document.getElementById('gj3').innerHTML = "OFF";
              }
              else {
                document.getElementById('gj3').innerHTML = "ON";
              }
              if (JSON.stringify(data[4].description) == '"0"'){
                document.getElementById('gj4').innerHTML = "OFF";
              }
              else {
                document.getElementById('gj4').innerHTML = "ON";
              }
              if (JSON.stringify(data[5].description) == '"0"'){
                document.getElementById('gj5').innerHTML = "OFF";
              }
              else {
                document.getElementById('gj5').innerHTML = "ON";
              }
              //document.getElementById('gj1').innerHTML = JSON.stringify(data[1].description);
              
          }})}


// function getbtn(){
// window_1 = document.getElementById("window");
// window_2 = document.getElementById("fan");
// Ventil = document.getElementById("pump");
// w_pump = document.getElementById("rgb");
// }



// window_1.addEventListener("click", function() {   
          
//         getbtn()
//         if (window_1.checked==true){
//                 fetch("http://52.79.55.137:8090/api/tutorial/635b5b07662d6ed40a24610f")
//                 startConnect();
//                 publish(window_1);
//                 startDisconnect()
                
//         }
//         else
//         {
//                 fetch("http://52.79.55.137:8090/api/tutorial/635b5b07662d6ed40a24610f")
//                 startConnect();
//                 var topic = "btn1";
//                 message = new Paho.MQTT.Message(false); 
//                 message.destinationName = topic; message.qos = 2; 
//                 client.send(message);
//                 startDisconnect()
//         }
// });
// window_2.addEventListener("click", function() {  
           
//         getbtn()
//         if (window_2.checked==true){
//                 fetch("http://52.79.55.137:8090/api/tutorial/635b5d8f662d6ed40a24611c", {
//                 method: "PUT",
//                 headers: {
//                         "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                         title: "Testaa",
//                         description: "I am testing!",
//                 }),
//                 })
//                 .then((response) => response.json())
//                 .then((data) => console.log(data));
//                 var topic = $(element).attr("btn2");
//                 message = new Paho.MQTT.Message(true); 
//                 message.destinationName = topic; message.qos = 2; 
//                 client.send(message);
//         }
//         else
//         {
//                 fetch("http://52.79.55.137:8090/api/tutorial/635b5d8f662d6ed40a24611c", {
//                 method: "PUT",
//                 body: JSON.stringify({
//                 title: "Testaa",
//                 description: "I am testing!",
//                 }),
//                 })
//                 .then((response) => response.json())
//                 .then((data) => console.log(data));
//                 var topic = $(element).attr("btn2");
//                 message = new Paho.MQTT.Message(false); 
//                 message.destinationName = topic; message.qos = 2; 
//                 client.send(message);
//         }
// });
// Ventil.addEventListener("click", function() {    
         
//         getbtn()
//         if (Ventil.checked==true){
//                 fetch("http://52.79.55.137:8090/api/tutorial/635b5d95662d6ed40a24611e")
//                 var topic = $(element).attr("btn3");
//                 message = new Paho.MQTT.Message(true); 
//                 message.destinationName = topic; message.qos = 2; 
//                 client.send(message);
//         }
//         else
//         {
//                 fetch("http://52.79.55.137:8090/api/tutorial/635b5d95662d6ed40a24611e")
//                 var topic = $(element).attr("btn3");
//                 message = new Paho.MQTT.Message(false); 
//                 message.destinationName = topic; message.qos = 2; 
//                 client.send(message);
//         }
// });
// w_pump.addEventListener("click", function() {     
        
//         getbtn()
//         if (w_pump.checked==true){
//                 fetch("http://52.79.55.137:8090/api/tutorial/635b5d9b662d6ed40a246120")
//                 var topic = $(element).attr("btn4");
//                 message = new Paho.MQTT.Message(true); 
//                 message.destinationName = topic; message.qos = 2; 
//                 client.send(message);
//         }
//         else
//         {
//                 fetch("http://52.79.55.137:8090/api/tutorial/635b5d9b662d6ed40a246120")
//                 var topic = $(element).attr("btn4");
//                 message = new Paho.MQTT.Message(false); 
//                 message.destinationName = topic; message.qos = 2; 
//                 client.send(message);
//         }
// });
// timer = setInterval( function () {
//         getbtn();
//         $.ajax({
//                 url: "http://52.79.55.137:8090/api/tutorial/635b5b07662d6ed40a24610f",
//                 dataType: 'json',
//                 type: 'GET',
//                 success: function(data){
//                     var $huMean = data['value'];
//                      if ($huMean == 1)
//                      {
//                         $('input[id="btn1"]').prop('checked',true);
//                      }
//                      else
//                      {
//                         $('input[id="btn1"]').prop('checked',false);

//                      }
//                 }
//             });
//             $.ajax({
//                 url: "http://52.79.55.137:8090/api/tutorial/635b5d8f662d6ed40a24611c",
//                 dataType: 'json',
//                 type: 'GET',
//                 success: function(data){
//                     var $huMean = data[0];
//                      if ($huMean == 1)
//                      {
//                         $('input[id="btn2"]').prop('checked',true);
//                      }
//                      else
//                      {
//                         $('input[id="btn2"]').prop('checked',false);

//                      }
//                 }
//             });
//             $.ajax({
//                 url: "http://52.79.55.137:8090/api/tutorial/635b5d95662d6ed40a24611e",
//                 dataType: 'json',
//                 type: 'GET',
//                 success: function(data){
//                     var $huMean = data['value'];
//                      if ($huMean == 1)
//                      {
//                         $('input[id="btn3"]').prop('checked',true);
//                      }
//                      else
//                      {
//                         $('input[id="btn3"]').prop('checked',false);

//                      }
//                 }
//             });
//             $.ajax({
//                 url: "http://52.79.55.137:8090/api/tutorial/635b5d9b662d6ed40a246120",
//                 dataType: 'json',
//                 type: 'GET',
//                 success: function(data){
//                     var $huMean = data['value'];
//                      if ($huMean == 1)
//                      {
//                         $('input[id="btn4"]').prop('checked',true);
//                      }
//                      else
//                      {
//                         $('input[id="btn4"]').prop('checked',false);

//                      }
//                 }
//             });
//     }, 1000);


    