var selector = 1;
function imgup(){
    selector = selector - 1;
    
    if(selector <= 0 ){
        selector=5;
    }
    console.log(selector); 
    if (selector == 1){
        var active = document.getElementById("img2");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-1');
        var active = document.getElementById("img1");
        active.style.border = "2px solid white";
    }
    if (selector == 2){
        var active = document.getElementById("img3");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-2');
        var active = document.getElementById("img2");
        active.style.border = "2px solid white";
    }
    if (selector == 3){
        var active = document.getElementById("img4");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-3');
        var active = document.getElementById("img3");
        active.style.border = "2px solid white";
    }
    if (selector == 4){
        var active = document.getElementById("img5");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-4');
        var active = document.getElementById("img4");
        active.style.border = "2px solid white";
    }
    if (selector == 5){
        var active = document.getElementById("img1");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-5');
        var active = document.getElementById("img5");
        active.style.border = "2px solid white";
    }
    console.log(active);
}

function imgdown(){
    selector = selector + 1;
    
    if(selector <= 0 ){
        selector=5;
    }
    console.log(selector); 
    if (selector == 1){
        var active = document.getElementById("img5");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-1');
        var active = document.getElementById("img1");
        active.style.border = "2px solid white";
    }
    if (selector == 2){
        var active = document.getElementById("img1");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-2');
        var active = document.getElementById("img2");
        active.style.border = "2px solid white";
    }
    if (selector == 3){
        var active = document.getElementById("img2");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-3');
        var active = document.getElementById("img3");
        active.style.border = "2px solid white";
    }
    if (selector == 4){
        var active = document.getElementById("img3");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-4');
        var active = document.getElementById("img4");
        active.style.border = "2px solid white";
    }
    if (selector == 5){
        var active = document.getElementById("img4");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-5');
        var active = document.getElementById("img5");
        active.style.border = "2px solid white";
    }
    console.log(active);
}