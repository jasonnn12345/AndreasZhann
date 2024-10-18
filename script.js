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
    year: 2024, 
    month: 12, 
    day: 24, 
    hours: 18, 
    minutes: 0, 
    seconds: 0, 
    words: { 
        days: { singular: 'Hari', plural: 'Hari' },
        hours: { singular: 'Jam', plural: 'Jam' },
        minutes: { singular: 'Menit', plural: 'Menit' },
        seconds: { singular: 'Detik', plural: 'Detik' }
    },
    
})
let quotes = [
    {text : 'I am not a product of my circumstances. I am a product of my decisions.',arti :'(Saya bukan produk dari keadaan saya. Saya adalah produk dari keputusan saya.) – Stephen Covey'},
    {text : 'Every child is an artist. The problem is how to remain an artist once he grows up.',arti : '(Setiap anak adalah seniman. Masalahnya adalah bagaimana tetap menjadi artis begitu dia dewasa.) – Pablo Picasso'},
    {text : 'You can never cross the ocean until you have the courage to lose sight of the shore',arti : '(Kamu tidak akan pernah bisa menyeberangi lautan sampai Kamu memiliki keberanian untuk melupakan pantai.)  – Christopher Columbus'},
    {text : 'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',arti :'(Ketika segala sesuatu tampak bertentangan dengan Kamu, ingatlah bahwa pesawat lepas landas melawan angin, bukan mengikutinya.) – Henry Ford' },
    {text : 'You can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future',arti :'(Kamu tidak dapat menghubungkan titik-titik ke depan, kamu hanya dapat menghubungkannya dengan melihat ke belakang. Jadi, kamu harus percaya bahwa titik-titik itu entah bagaimana akan terhubung di masa depanmu.) – Steve Jobs'}
]
function generateQuote(){
    let randomI = Math.floor(Math.random()*quotes.length)
    document.getElementById('quote').innerText ='Text : '+ quotes[randomI].text
    document.getElementById('arti').innerText = 'Arti : '+ quotes[randomI].arti
}