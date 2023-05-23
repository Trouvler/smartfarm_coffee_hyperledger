$(document).ready(function road(){
    timer = setInterval( function () {
        $.ajax({
            url: "http://52.79.55.137:8090/api/tutorial",
            dataType: 'json',
            type: 'GET',
            success: function(data){
                var $huMean = data[0].title.replace("[","").replace("]","").replace("(", "").replace(")","").replace(" ","").split(",")[0].replace('"',"");
                 $('.inilluminance').empty();
                 $('.inilluminance').append($huMean);
               /* $('.PhIcon').append('<i class="fa-solid fa-droplet-percent"></i>')*/; 
            }
        });
        $.ajax({
            url: "http://52.79.55.137:8090/api/tutorial",
            dataType: 'json',
            type: 'GET',
            success: function(data){
                var $huMean = data[0].title.replace("[","").replace("]","").replace("(", "").replace(")","").replace(" ","").split(",")[1];
                 $('.tempRect').empty();
                 $('.tempRect').append($huMean);
                 /*$('.temphIcon').append('<i class="fa-solid fa-droplet-percent"></i>');*/
            }
        });
        $.ajax({
            url: "http://52.79.55.137:8090/api/tutorial",
            dataType: 'json',
            type: 'GET',
            success: function(data){
                var $huMean = data[0].title.replace("[","").replace("]","").replace("(", "").replace(")","").replace(" ","").split(",")[2];
                 $('.inpressure').empty();
                 $('.inpressure').append($huMean);
                 /*$('.humiIcon').append('<i class="fa-solid fa-droplet-percent"></i>');*/
            }
        });
        $.ajax({
            url: "http://52.79.55.137:8090/api/tutorial",
            dataType: 'json',
            type: 'GET',
            success: function(data){
                var $huMean = data[0].title.replace("[","").replace("]","").replace("(", "").replace(")","").replace(" ","").split(",")[3];
                 $('.inhumidity').empty();
                 $('.inhumidity').append($huMean);
                 /*$('.Co2Icon').append('<i class="fa-solid fa-droplet-percent"></i>');*/
            }
        });
        $.ajax({
            url: "http://52.79.55.137:8090/api/tutorial",
            dataType: 'json',
            type: 'GET',
            success: function(data){
                var $huMean = data[0].title.replace("[","").replace("]","").replace("(", "").replace(")","").replace(" ","").split(",")[4];
                 $('.ingas').empty();
                 $('.ingas').append($huMean);
                 /*$('.Co2Icon').append('<i class="fa-solid fa-droplet-percent"></i>');*/
            }
        });
        $.ajax({
            url: "http://52.79.55.137:8090/api/tutorial",
            dataType: 'json',
            type: 'GET',
            success: function(data){
                var $huMean = data[0].title.replace("[","").replace("]","").replace("(", "").replace(")","").replace(" ","").split(",")[5];
                 $('.groundhumidity').empty();
                 $('.groundhumidity').append($huMean);
                 /*$('.Co2Icon').append('<i class="fa-solid fa-droplet-percent"></i>');*/
            }
        });
        $.ajax({
            url: "http://52.79.55.137:8090/api/tutorial",
            dataType: 'json',
            type: 'GET',
            success: function(data){
                var $huMean = data[0].title.replace("[","").replace("]","").replace("(", "").replace(")","").replace(" ","").split(",")[6];
                 $('.inCo2Rect').empty();
                 $('.inCo2Rect').append($huMean);
                 /*$('.Co2Icon').append('<i class="fa-solid fa-droplet-percent"></i>');*/
            }
        });
        $.ajax({
            url: "http://52.79.55.137:8090/api/tutorial",
            dataType: 'json',
            type: 'GET',
            success: function(data){
                var $huMean = data[0].title.replace("[","").replace("]","").replace("(", "").replace(")","").replace(" ","").split(",")[7].replace('"',"");
                if ($huMean == 1){
                    $huMean = "충분"
                }
                else{
                    $huMean = "불충분"
                }
                 $('.waterlevel').empty();
                 $('.waterlevel').append($huMean);
                 /*$('.Co2Icon').append('<i class="fa-solid fa-droplet-percent"></i>');*/
            }
        });
        
    }, 1000);
});
