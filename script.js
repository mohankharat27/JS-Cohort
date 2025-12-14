let h2 = document.querySelector("h2");

document.body.addEventListener("keydown",function(dtls){
    console.log(dtls.code)
    h2.innerHTML = dtls.code
})