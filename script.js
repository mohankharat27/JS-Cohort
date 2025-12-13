let main = document.querySelector("main");
let button = document.querySelector("button");

button.addEventListener("click",function() {
    let div = document.createElement("div");
    
    let height = Math.random()*100;
    let width = Math.random()*100;

    div.style.height = height +"px"
    div.style.width = width +"px"

    let c1 = Math.random()*256;
    let c2 = Math.random()*256;
    let c3 = Math.random()*256;
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    
    let top = Math.random()*100;
    let left = Math.random()*100;

    div.style.top = top + "%";
    div.style.left = left + "%";
    div.style.position = "absolute"
    main.appendChild(div);
})