 /*
$(document).ready(function() {

    $("#toggle-mode").on("click", function(event){
       $("body").toggleClass("light-mode");
       $("body").toggleClass("dark-mode");
       $(".black-bg").css("background-color","#A0DAA9");
       $(".black-bg").css("background-color","#1e1e1e");
       //$("nav").removeClass( "navbar-dark" ).addClass( "navbar-light text-dark" );
       //$("nav").removeClass( "navbar-light text-dark" ).addClass( "navbar-dark" );
       $("nav").toggleClass("blue-bg");
       $("footer").toggleClass("blue-bg"); 
       
   });
   
   $("button").click(function(){
       $("#french").load("french.txt");
    });
});
*/

/*
$(document).ready(function() {
    $("#english").load("english.html");
    $("#toggle-lg").click(function(){
        $("#english").load("french.html");
        //$("#english").load("english.html");
     });
     $("#toggle-lg").click(function(){
        $("#english").load("english.html");
        //$("#english").load("english.html");
     });
});
*/
$(document).ready(function() {
    $("#english").load("english.html");
    $("#toggle-lg").on('change', function() {
        if ($(this).is(':checked')) {
            $(this).attr('value', 'true');
            $("#english").load("french.html");
            //alert($(this).val());
        }
        else {
            $(this).attr('value', 'false');
            $("#english").load("english.html");
            //alert($(this).val());
        }
    });
});