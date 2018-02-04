
hour_hand = document.getElementById('hour')
min_hand = document.getElementById('min')
sec_hand = document.getElementById('sec')

function setDate(){
    const now = new Date()

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90
    sec_hand.style.transform = `rotate(${secondDegrees}deg)`;
   
    const minuts = now.getMinutes();
    const minDegrees = ((minuts / 60) * 360) + 90
    min_hand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((minuts / 12) * 360) + 90
    hour_hand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate,1000) 