let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let inner = document.querySelector(".inner")

let grow = 0;
let int;

btn.addEventListener("click",function() {
    int = setInterval(() => {
        grow++;
        h2.innerHTML = grow + "%";
        inner.style.width = grow + "%"

        if(grow >= 100){
            clearInterval(int);
        }
    }, 50);

    setTimeout(function() {
    clearInterval(int)
    },5000)
})   

