let box = document.querySelector("div");
let button = document.querySelector("button")
let main = document.querySelector("main");
let title = document.querySelector("h1");


let arr = [
    {
        team : "RCB",
        primary : "Red",
        secondary : "pink",
        captain : "Rajat Patidar"
    },
    {
        team : "MI",
        primary : "blue",
        secondary : "gold",
        captain : "Hardik Pandya"
    },
    {
        team : "GT",
        primary : "blue",
        secondary : "yellow",
        captain : "Shubhman Gill"
    },
    {
        team : "SRH",
        primary : "orange",
        secondary : "red",
        captain : "Pat Cummins"
    },
    {
        team : "PBKS",
        primary : "crimson",
        secondary : "yellow",
        captain : "Shreyas Iyer"
    }
]


button.addEventListener("click",function(){
    let a = Math.floor(Math.random()*arr.length);
    box.style.backgroundColor = arr[a].primary;
    main.style.backgroundColor = arr[a].secondary;
    title.innerText = arr[a].team;

})