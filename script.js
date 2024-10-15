function keAtas(){
    return location.href="#home-container"
}
function keTime(){
    return location.href="#time-container"
}
function keweb(){
    location.href ="https://www.google.com/maps/search/JW+Marriott/@3.5966489,98.6744508,18z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
}
simplyCountdown('.simply-countdown',{
    year: 2024, // required
    month: 12, // required
    day: 24, // required
    hours: 18, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'Hari', plural: 'Hari' },
        hours: { singular: 'Jam', plural: 'Jam' },
        minutes: { singular: 'Menit', plural: 'Menit' },
        seconds: { singular: 'Detik', plural: 'Detik' }
    },
    
})
let quoteBar = document.getElementById('quote')
let quoteBtn = document.getElementById('quoteBtn')

quoteBtn.addEventListener('click',JalaninQuote)
JalaninQuote()

async function JalaninQuote() {
    const penghubung = {
        headers : {
          Accept:'application/json'          
        },
    }
    
    const ulang = await fetch
    
}