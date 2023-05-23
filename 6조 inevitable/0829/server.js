const express = require('express');
const app = express();
const mqtt = require('mqtt');
const bodyParser = require('body-parser'); 
const axios = require('axios');
var port = "8080"
app.use(express.static(__dirname + "/assets"));
//REST API의 한가지 종류인 GET 리퀘스트를 정의하는 부분입니다.
//app.get이라고 작성했기 때문에 get 요청으로 정의가 되고
//app.post로 작성할 경우 post 요청으로 정의가 됩니다.
//REST API의 종류 (get, post, update, delete 등등)을 사용하여 End Point를 작성하실 수 있습니다.


app.get('/', function(req, res) {
    //res.send("<h1>Express server Start</h1>")
    res.sendFile(__dirname + "/index.html")
})
app.use(express.static(__dirname + "/assets"));
app.get('/dashboard', function(req, res) {
    //res.send("<h1>Express server Start</h1>")
    res.sendFile(__dirname + "/tables.html")
})

// express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다
app.listen(port, function() {
    console.log('start! express server');
})


var client = mqtt.connect("mqtt://52.79.55.137:1883")
var count = 0;

function publish(topic,msg,count){
    console.log(count);
    var options={
        retain:true,
        qos:0};
    if(client.connected == true){
        console.log("publishing { ",topic," : " , msg, " }");
        client.publish(topic,msg,options);

    }
    if(count>=3){
        clearTimeout(timer_id);
        client.end();
        console.log("client end");
    }
}    
function savedatab(topic,msg,id){
    axios.put("http://52.79.55.137:8090/api/tutorial/"+id, {
        title: topic,
        description: msg
    })
    .then(function (response) {
        console.log("응답")
        // response  
    }).catch(function (error) {
        console.log("실패")
        // 오류발생시 실행
    })
}


let state1 = '0';
let state2 = '0';
let state3 = '0';
let state4 = '0';
let state5 = '0';



app.use(bodyParser.urlencoded({ extended: true })); 
app.post("", (req, res) => {
    console.log(req.body);
    console.log(req.body.ffname);
    switch(req.body.fname) {
        case '1':
            console.log(req.body.id)
            console.log(state1)
            if (state1 == "0"){
                savedatab("fan","1","6379bb80d06bca36463f61c4");
                console.log("fan 1");
                state1='1'
                count = 0;
                publish("fan",state1,count);
                
            }
            else {
                savedatab("fan","0","6379bb80d06bca36463f61c4");
                console.log("fan 0");
                state1='0'
                count = 0;
                publish("fan",state1,count);
                
            }
            console.log("button1 pushed")
            break;
        case '2':
            
            if (state2 == '0'){
                savedatab("window","1","6379bb86d06bca36463f61f3");
                console.log("window 1");
                state2 = '1'
                count = 0;
                publish("window",state2,count);
            }
            else {
                savedatab("window","0","6379bb86d06bca36463f61f3");
                console.log("window 0");
                state2 = '0'
                count = 0;
                publish("window",state2,count);
            }
            console.log("button2 pushed")
            break;
        case '3':
            
            if (state3 == '1'){
                savedatab("pump","0","6379bb87d06bca36463f6207");
                console.log("pump 1");
                state3 = '0'
                count = 0;
                publish("pump",state3,count);
            }
            else {
                savedatab("pump","1","6379bb87d06bca36463f6207");
                console.log("pump 1");
                state3 = '1'
                count = 0;
                publish("pump",state3,count);
            }
            console.log("button3 pushed")
            break;
        case '4':
            
            if (state4 == '0'){
                savedatab("rgb","1","6379bb88d06bca36463f6211");
                console.log("rgb 1");
                state4 = '1'
                count = 0;
                publish("rgb",state4,count);
            }
            else {
                savedatab("rgb","0","6379bb88d06bca36463f6211");
                console.log("rgb 0");
                state4 = '0'
                count = 0;
                publish("rgb",state4,count);
            }
            console.log("button4 pushed")
            break;
        case '5':
        
            if (state5 == '0'){
                savedatab("auto","1","6379bb89d06bca36463f6216");
                console.log("auto 1");
                state5 = '1'
                count = 0;
                publish("auto",state5,count);
            }
            else {
                savedatab("auto","0","6379bb89d06bca36463f6216");
                console.log("auto 0");
                state5 = '0'
                count = 0;
                publish("auto",state5,count);
            }
            console.log("button5 pushed")
            break;

        default:
            console.log("it is not define");
    }
    console.log(req.body.fname);
    //console.log(res);
    //console.log(mqtt.__filename);
  });
