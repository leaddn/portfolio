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
       $(".btn").toggleClass("btn-outline-dark")
       
       
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

/* Typewriter effect */

class TxtType {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }
    tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    }
}


window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
    
};