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


const items = [
    'img/01.jpg', //0
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'  //4
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
let i=0;

function imgdownarray()
{
    if (i > (items.length-2)){
        i=0;
    }
    else {
        i = i+1;
    }    
    var img = document.getElementById("img-display");
    img.src = items[i]; 
    var titolo = document.getElementById("img-title");
    titolo.innerHTML = title[i];
    var testo  = document.getElementById("img-text")
    testo.innerHTML = text[i];
    console.log(i);
    console.log(title[i]);
    console.log(text[i]);
}

function imguparray()
{
    if (i == 0 ){
        i=4;
    }
    else {
        i = i-1;
    }    
    var img = document.getElementById("img-display");
    img.src = items[i]; 
    var titolo = document.getElementById("img-title");
    titolo.innerHTML = title[i];
    var testo  = document.getElementById("img-text")
    testo.innerHTML = text[i];
    console.log(i);
    console.log(title[i]);
    console.log(text[i]);
}
