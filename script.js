window.addEventListener("load", function(){
    setTimeout(loading, 1500);
   	setTimeout(loaded, 2000);
	
    function loading(){
       	var preload = document.getElementById("preloader");
       	preload.style.opacity = "0";
       	preload.style.visibility = "hidden";
    }
    
    function loaded(){
       	var load = document.getElementById("loader");
       	load.style.opacity = "0";
       	load.style.visibility = "hidden";
    }
});

var Frst = document.querySelector("#modal1Container");
var Scnd = document.querySelector("#modal2Container");
var Thrd = document.querySelector("#modal3Container");
var Frth = document.querySelector("#modal4Container");
var Ffth = document.querySelector("#modal5Container");
var Sxth = document.querySelector("#modal6Container");
var Svth = document.querySelector("#modal7Container");
var Eght = document.querySelector("#modal8Container");
var Nnth = document.querySelector("#modal9Container");
var Shade = document.querySelector("#shade");

function frst(){
   	Frst.classList.toggle("nf");
   	Shade.classList.toggle("shaded");
}

function scnd(){
   	Scnd.classList.toggle("nf");
   	Shade.classList.toggle("shaded");
}

function thrd(){
   	Thrd.classList.toggle("nf");
   	Shade.classList.toggle("shaded");
}

function frth(){
   	Frth.classList.toggle("nf");
   	Shade.classList.toggle("shaded");
}

function ffth(){
   	Ffth.classList.toggle("nf");
   	Shade.classList.toggle("shaded");
}

function sxth(){
   	Sxth.classList.toggle("nf");
   	Shade.classList.toggle("shaded");
}

function svth(){
   	Svth.classList.toggle("nf");
   	Shade.classList.toggle("shaded");
}

function eght(){
   	Eght.classList.toggle("nf");
   	Shade.classList.toggle("shaded");
}

function nnth(){
   	Nnth.classList.toggle("nf");
   	Shade.classList.toggle("shaded");
}

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Food", "Water", "Shelter", "Relief", "Donation"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Rolly", "Ulysses"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});