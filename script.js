
hour_hand = document.getElementById('hour')
min_hand = document.getElementById('min')
sec_hand = document.getElementById('sec')

function setDate(){
    const now = new Date()
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90
    sec_hand.style.transform = `rotate(${secondDegrees}deg)`;
    console.log(seconds)
}
setInterval(setDate,1000) 