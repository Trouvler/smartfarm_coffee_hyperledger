$(document).ready(function(){
    timer = setInterval( function () {

    $.ajax({
        url: 'http://175.126.123.217:5657/machbase?q=SELECT%20time%20rollup%201%20day%20mtime,%20avg(value)%20FROM%20TAG%20WHERE%20name%20=%20%27humi%27%20group%20by%20mtime%20order%20by%20mtime%20desc%20limit%201;',
        dataType: 'json',
        type: 'GET',
        success: function(data){
            var $huMean = data.data[0]['avg(value)'] + '%';
             $('.HumiMean').empty();
             $('.HumiMean').append($huMean);
             /*$('.HumiIcon').append('<i class="fa-solid fa-droplet-percent"></i>');*/
        }
    });
    $.ajax({
        url: 'http://175.126.123.217:5657/machbase?q=SELECT%20time%20rollup%201%20day%20mtime,%20avg(value)%20FROM%20TAG%20WHERE%20name%20=%20%27Co2%27%20group%20by%20mtime%20order%20by%20mtime%20desc%20limit%201;',
        dataType: 'json',
        type: 'GET',
        success: function(data){
            var $huMean = data.data[0]['avg(value)'];
             $('.Co2Mean').empty();
             $('.Co2Mean').append($huMean);
             /*$('.Co2Icon').append('<i class="fa-solid fa-droplet-percent"></i>');*/
        }
    })
    $.ajax({
        url: 'http://175.126.123.217:5657/machbase?q=SELECT%20time%20rollup%201%20day%20mtime,%20avg(value)%20FROM%20TAG%20WHERE%20name%20=%20%27temp%27%20group%20by%20mtime%20order%20by%20mtime%20desc%20limit%201;',
        dataType: 'json',
        type: 'GET',
        success: function(data){
            var $huMean = data.data[0]['avg(value)'] + '&ordm;';
             $('.TempMean').empty();
             $('.TempMean').append($huMean);
             /*$('.TempIcon').append('<i class="fa-solid fa-droplet-percent"></i>');*/
        }
    })
    $.ajax({
        url: 'http://175.126.123.217:5657/machbase?q=SELECT%20time%20rollup%201%20day%20mtime,%20avg(value)%20FROM%20TAG%20WHERE%20name%20=%20%27ph%27%20group%20by%20mtime%20order%20by%20mtime%20desc%20limit%201;',
        dataType: 'json',
        type: 'GET',
        success: function(data){
            var $huMean = data.data[0]['avg(value)'];
             $('.PhMean').empty();
             $('.PhMean').append($huMean);
             /*$('.PhIcon').append('<i class="fa-solid fa-droplet-percent"></i>');*/
        }
    })
}, 1000);
});
