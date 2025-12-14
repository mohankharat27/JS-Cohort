let img = document.querySelector("img")
let msg = document.querySelector("h2 span")

img.addEventListener("mouseenter",function(){
    msg.innerHTML = "Chutki se door hoja....."
    document.body.style.backgroundColor = "red"
})

img.addEventListener("mouseleave",function(){
    msg.innerHTML = "Good! doooor hi rah....."
    document.body.style.backgroundColor = "black"
})