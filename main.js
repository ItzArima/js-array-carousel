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
        var titolo = document.getElementById("img-title");
        titolo.innerHTML = "Svezia";
        var testo  = document.getElementById("img-text")
        testo.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.";
    }
    if (selector == 2){
        var active = document.getElementById("img3");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-2');
        var active = document.getElementById("img2");
        active.style.border = "2px solid white";
        var titolo = document.getElementById("img-title");
        titolo.innerHTML = "Svizzera";
        var testo  = document.getElementById("img-text")
        testo.innerHTML = "Lorem ipsum";
    }
    if (selector == 3){
        var active = document.getElementById("img4");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-3');
        var active = document.getElementById("img3");
        active.style.border = "2px solid white";
        var titolo = document.getElementById("img-title");
        titolo.innerHTML = "Gran Bretagna";
        var testo  = document.getElementById("img-text")
        testo.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
    }
    if (selector == 4){
        var active = document.getElementById("img5");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-4');
        var active = document.getElementById("img4");
        active.style.border = "2px solid white";
        var titolo = document.getElementById("img-title");
        titolo.innerHTML = "Germania";
        var testo  = document.getElementById("img-text")
        testo.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,";
    }
    if (selector == 5){
        var active = document.getElementById("img1");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-5');
        var active = document.getElementById("img5");
        active.style.border = "2px solid white";
        var titolo = document.getElementById("img-title");
        titolo.innerHTML = "Paradise";
        var testo  = document.getElementById("img-text")
        testo.innerHTML = "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,";
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
        var titolo = document.getElementById("img-title");
        titolo.innerHTML = "Svezia";
        var testo  = document.getElementById("img-text")
        testo.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.";
    }
    if (selector == 2){
        var active = document.getElementById("img1");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-2');
        var active = document.getElementById("img2");
        active.style.border = "2px solid white";
        var titolo = document.getElementById("img-title");
        titolo.innerHTML = "Svizzera";
        var testo  = document.getElementById("img-text")
        testo.innerHTML = "Lorem ipsum";
    }
    if (selector == 3){
        var active = document.getElementById("img2");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-3');
        var active = document.getElementById("img3");
        active.style.border = "2px solid white";
        var titolo = document.getElementById("img-title");
        titolo.innerHTML = "Gran Bretagna";
        var testo  = document.getElementById("img-text")
        testo.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
    }
    if (selector == 4){
        var active = document.getElementById("img3");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-4');
        var active = document.getElementById("img4");
        active.style.border = "2px solid white";
        var titolo = document.getElementById("img-title");
        titolo.innerHTML = "Germania";
        var testo  = document.getElementById("img-text")
        testo.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,";
    }
    if (selector == 5){
        var active = document.getElementById("img4");
        active.style.border = "0px solid white";
        var mainimg = document.querySelector(".img-display");
        mainimg.id = ('img-5');
        var active = document.getElementById("img5");
        active.style.border = "2px solid white";
        var titolo = document.getElementById("img-title");
        titolo.innerHTML = "Paradise";
        var testo  = document.getElementById("img-text")
        testo.innerHTML = "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,";
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
    let iup = i+1;
    if (iup > (items.length-1)){
        iup = 0;
    }
    console.log(iup);
    var activearray = document.getElementsByClassName("img-sel");
    activearray[i].style.border = "0";
    activearray[iup].style.border = "2px solid white";
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
    let iup = i-1;
    if (iup < 0){
        iup = 4;
    }
    console.log(iup);
    var activearray = document.getElementsByClassName("img-sel");
    activearray[i].style.border = "0";
    activearray[iup].style.border = "2px solid white";

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

}
