let main = document.querySelector("main");
let button = document.querySelector("button");

let arr = ["Mohan is Great!", "Js is Love", "I am from Pune", "Learning Full Stack","Software Engineer", "I am consistent", "I am Unique", "I am brave", "I am Good", "I am Learner", "Software Developer", "HTML", "CSS", "JavaScript", "MongoDB", "Express.js", "React", "Life is Good!"]

button.addEventListener("click",function() {
    let h1 = document.createElement("h1");

    let sen = Math.floor(Math.random() * arr.length + 1);
    h1.innerText = arr[sen];

    let top = Math.random()*100;
    let left = Math.random()*100;

    h1.style.top = top + "%";
    h1.style.left = left + "%";
    h1.style.position = "absolute"

    let c1 = Math.random()*256;
    let c2 = Math.random()*256;
    let c3 = Math.random()*256;

    h1.style.color = `rgb(${c1},${c2},${c3})`
    main.appendChild(h1);
})
