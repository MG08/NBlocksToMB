$(document).ready(function(){
    $('#a1').keyup(calculate);
    $('#a4').keyup(calculate);
    $('#a7').keyup(calculate);

    var http = require("http");
		setInterval(function() {
    	http.get("http://nblocksconverter.herokuapp.com");
    }, 300000); // every 5 minutes (300000)

    function calculate(e)
{
    console.log('this is an Input');
    $('#a2').val($('#a1').val() /8);
    $('#a3').val($('#a1').val() /8192);
    $('#a5').val($('#a4').val() /1024);
    $('#a6').val($('#a4').val() *8);
    $('#a8').val($('#a7').val() *1024);
    $('#a9').val($('#a7').val() *8192);
}

});

