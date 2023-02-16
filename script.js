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