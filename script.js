// ===== Buld =====

let btn = document.querySelector("button");
let bulb = document.querySelector("#bulb");

let flag = 0;
btn.addEventListener("click",function(){
    if(flag == 0){
        bulb.style.backgroundColor = "Green";
        btn.innerHTML = "OFF";
        flag = 1;
    }else{
        bulb.style.backgroundColor = "transparent";
        btn.innerHTML = "ON"
        flag = 0;
    }
})

// Change the text of a <p> tag when a button is clicked.

let para = document.querySelector('p');
let btn1 = document.querySelector('button');

btn.addEventListener("click",function(){
    para.innerHTML = "I am Software Engineer!";
})

// Change the background color of the page when a button is clicked.

let page = document.body;

page.addEventListener("click", function(){
    page.style.backgroundColor = "Crimson";
})


// Select an element using:

getElementById

let a = document.getElementById("first");

a.addEventListener("click",function(){
    a.style.backgroundColor = "Red";
})

getElementsByClassName

let b = document.getElementsByClassName("second");

b.addEventListener("click",function(){
    arguments.style.backgroundColor = "yellow"; 
})

// querySelector

// querySelectorAll
// and print them in console.

let all = document.querySelectorAll("h1");
console.log(all);


// When user clicks a button → hide a div (display: none).
// When user clicks another button → show the div again.

let box = document.querySelector("#box");
let button = document.querySelector("button");
let button2 = document.querySelector("#btn2");

let flag1 = 0;

button.addEventListener("click",function(){
    box.style.display = "none";
    flag = 1;
})

button2.addEventListener("click",function(){
    box.style.display = "block";
    flag = 0;
})


// Change image source (src) on button click.

let img = document.getElementById("img");
let btn2 = document.getElementById("toggleBtn");

btn.addEventListener("click", function () {
    if (img.src.includes("image1.png")) {
        img.src = "image2.png";
    } else {
        img.src = "image1.png";
    }
});
