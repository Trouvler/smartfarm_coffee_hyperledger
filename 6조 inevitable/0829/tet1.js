const axios = require('axios')
var mqtt = require('mqtt')
var client = mqtt.connect("mqtt://52.79.55.137:1883")
var topic= "all";

function savedata(temn){
    axios.put("http://52.79.55.137:8090/api/tutorial/6379bb7fd06bca36463f61b0", {
        title: temn,
        description: '센서'
    })
    .then(function (response) {
        console.log("응답")
        // response  
    }).catch(function (error) {
        console.log("실패")
        // 오류발생시 실행
    })
}
var i =0
var aa = [0,0,0,0,0]
client.on("message", function(topic, msg, packet){
    var ak = ""+msg
    console.log("message: "+msg);
    
    var bb=ak.toString();
        console.log(bb)
        savedata(bb)
    


});

client.on("connect", function(){
    console.log("connected " + client.connected);
    client.subscribe(topic,{qos:0});

})

client.on("error", function(error){
    console.log("can't connect" + error);
    process.exit(1)});


console.log("subcribing to topics");








