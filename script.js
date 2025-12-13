let h2 = document.querySelector('h2');

let inc = document.querySelector('#inc');
let dec = document.querySelector('#dec');

let i = 0;
inc.addEventListener("click", function(){
    i++;
    h2.innerHTML = i;
})

dec.addEventListener("click", function(){
    i--;
    h2.innerHTML = i;
})