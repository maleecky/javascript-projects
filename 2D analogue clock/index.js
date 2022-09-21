const Hour = document.querySelector('[data-hand-hour]');
const Minute = document.querySelector('[data-hand-minute]');
const Second = document.querySelector('[data-hand-second]');

setInterval(setClock,1000);

function setClock(){
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setPropertyInclockHands(Second, secondRatio);
    setPropertyInclockHands(Minute, minuteRatio);
    setPropertyInclockHands(Hour, hourRatio);
}


function setPropertyInclockHands(element,rotation){
    element.style.setProperty("--rotation", rotation * 360)
}


setClock()