let Portfolio = document.getElementById("select1")
let Funding = document.getElementById("select2")
let Assets = document.getElementById("select3")
let P2P = document.getElementById("select4")

Portfolio.addEventListener("click",()=>{
    Portfolio.style.backgroundColor="black"
    Funding.style.backgroundColor="#292727"
    Assets.style.backgroundColor="#292727"
    P2P.style.backgroundColor="#292727"
})

Funding.addEventListener("click",()=>{
    Portfolio.style.backgroundColor="#292727"
    Funding.style.backgroundColor="black"
    Assets.style.backgroundColor="#292727"
    P2P.style.backgroundColor="#292727"
})

Assets.addEventListener("click",()=>{
    Portfolio.style.backgroundColor="#292727"
    Funding.style.backgroundColor="#292727"
    Assets.style.backgroundColor="black"
    P2P.style.backgroundColor="#292727"
})

P2P.addEventListener("click",()=>{
    Portfolio.style.backgroundColor="#292727"
    Funding.style.backgroundColor="#292727"
    Assets.style.backgroundColor="#292727"
    P2P.style.backgroundColor="black"
})


let h1 = document.getElementById("sort1")
let d1 = document.getElementById("sort2")
let d3 = document.getElementById("sort3")
let w1 = document.getElementById("sort4")
let m1 = document.getElementById("sort5")
let calendar = document.getElementById("sort6")
let img = document.getElementById("imgswag")

h1.addEventListener("click",()=>{
    h1.style.backgroundColor="white"
    h1.style.color="black"
    d1.style.backgroundColor="black"
    d1.style.color="white"
    d3.style.backgroundColor="black"
    d3.style.color="white"
    w1.style.backgroundColor="black"
    w1.style.color="white"
    m1.style.backgroundColor="black"
    m1.style.color="white"
    calendar.style.backgroundColor="black"
    img.src="img/calendar-icon.png"
})

d1.addEventListener("click",()=>{
    h1.style.backgroundColor="black"
    h1.style.color="white"
    d1.style.backgroundColor="white"
    d1.style.color="black"
    d3.style.backgroundColor="black"
    d3.style.color="white"
    w1.style.backgroundColor="black"
    w1.style.color="white"
    m1.style.backgroundColor="black"
    m1.style.color="white"
    calendar.style.backgroundColor="black"
    img.src="img/calendar-icon.png"
})

d3.addEventListener("click",()=>{
    h1.style.backgroundColor="black"
    h1.style.color="white"
    d1.style.backgroundColor="black"
    d1.style.color="white"
    d3.style.backgroundColor="white"
    d3.style.color="black"
    w1.style.backgroundColor="black"
    w1.style.color="white"
    m1.style.backgroundColor="black"
    m1.style.color="white"
    calendar.style.backgroundColor="black"
    img.src="img/calendar-icon.png"
})

w1.addEventListener("click",()=>{
    h1.style.backgroundColor="black"
    h1.style.color="white"
    d1.style.backgroundColor="black"
    d1.style.color="white"
    d3.style.backgroundColor="black"
    d3.style.color="white"
    w1.style.backgroundColor="white"
    w1.style.color="black"
    m1.style.backgroundColor="black"
    m1.style.color="white"
    calendar.style.backgroundColor="black"
    img.src="img/calendar-icon.png"
})

m1.addEventListener("click",()=>{
    h1.style.backgroundColor="black"
    h1.style.color="white"
    d1.style.backgroundColor="black"
    d1.style.color="white"
    d3.style.backgroundColor="black"
    d3.style.color="white"
    w1.style.backgroundColor="black"
    w1.style.color="white"
    m1.style.backgroundColor="white"
    m1.style.color="black"
    calendar.style.backgroundColor="black"
    img.src="img/calendar-icon.png"
})

calendar.addEventListener("click",()=>{
    h1.style.backgroundColor="black"
    h1.style.color="white"
    d1.style.backgroundColor="black"
    d1.style.color="white"
    d3.style.backgroundColor="black"
    d3.style.color="white"
    w1.style.backgroundColor="black"
    w1.style.color="white"
    m1.style.backgroundColor="black"
    m1.style.color="white"
    calendar.style.backgroundColor="white"
    img.src="img/calendar-icon-dark.png"
})

let arrows = document.getElementById("arrow-swap")
let img1 = document.getElementById("img-1")
let txt1 = document.getElementById("txt-1")
let img2 = document.getElementById("img-2")
let txt2 = document.getElementById("txt-2")

arrows.addEventListener("click",()=>{
    if (txt1.innerHTML=='BTC') {
        img1.src='img/Etherium-icon3.png'
        txt1.innerHTML='ETH'
        img2.src='img/bitcoin-icon3.png'
        txt2.innerHTML='BTC'
    } else {
        img2.src='img/Etherium-icon3.png'
        txt2.innerHTML='ETH'
        img1.src='img/bitcoin-icon3.png'
        txt1.innerHTML='BTC'
    }
})



///Responsive 

let btnleft = document.querySelector(".btn-dashboard")
let stockdashboard = document.querySelector(".stock-dashboard")
let text = document.querySelector(".text-btn-dash")

btnleft.addEventListener("click",()=>{
    stockdashboard.classList.toggle("burger")
    text.classList.toggle("show")
})

let imgprofile = document.getElementById("img-profile")
let dashright = document.querySelector(".Dashboard-right")

imgprofile.addEventListener("click",()=>{
    dashright.classList.toggle("burger2")
})

/// graph

let graph = document.getElementById("canva").getContext('2d')

new Chart(graph,{
    type:'line',
    data: {
        labels: ['5Nov','6Nov','7Nov','8Nov','9Nov','10Nov','11Nov','12Nov','13Nov','14Nov','15Nov',],
        datasets: [
            {
                label:'ETH',
                data:[100,400,600,400,300,100,350,200,300,700,600],
                borderColor: 'rgba(89, 39, 149, 1)',
                backgroundColor:'transparent'
            },
            {
                label:'BTC',
                data:[null,200,500,650,650,500,350,550,500,650,600],
                borderColor: 'rgba(77, 145, 165, 1)',
                backgroundColor:'transparent'
            },
            {
                label:'DOGE',
                data:[null,null,null,null,0,200,550,300,100,650,null],
                borderColor: 'rgba(77, 145, 200, 1)',
                backgroundColor:'transparent'
            }

        ]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        return '$' + value;
                    }
                }
            }
        },
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
              label: (item) => `${item.yLabel} GB`,
            },
          },
    }
})


