let arr = [
    {
        fullName: "Aarav Mehta",
        role: "Data Scientist",
        caption: "Works with data analysis, machine learning models, and predictive analytics.",
        img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=687&auto=format&fit=crop"
    },
    {
        fullName: "Pooja Kulkarni",
        role: "Cloud Engineer",
        caption: "Manages cloud infrastructure, deployment pipelines, and system scalability.",
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop"
    },
    {
        fullName: "Imran Khan",
        role: "Cyber Security Analyst",
        caption: "Monitors threats, performs penetration testing, and secures applications.",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=687&auto=format&fit=crop"
    },
    {
        fullName: "Neha Joshi",
        role: "Product Manager",
        caption: "Bridges business and technology to deliver impactful digital products.",
        img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=687&auto=format&fit=crop"
    }
];


let sum = '';

arr.forEach(function(elem){
    sum = sum + `<div class="card">
            <img src="${elem.img}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.role}</h4>
            <p>${elem.caption}</p>
        </div>`;
})

let main = document.querySelector('main');

main.innerHTML = sum;