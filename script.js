const daysEl=document.getElementById('days')
const hrEL=document.getElementById('hr')
const minEl=document.getElementById('min')
const secEl=document.getElementById('sec')




const newYear ='1 jan 2021'

function countdown(){
    const newYearDate=new Date(newYear)
    const currentDate=new Date()
    
    const totalSeconds=(newYearDate-currentDate)/1000;

    const days=Math.floor(totalSeconds/3600/24)
    const hrs=Math.floor(totalSeconds/3600)%24
    const mins=Math.floor(totalSeconds/60)%60
    const seconds=Math.floor(totalSeconds)%60

    console.log(days,hrs,mins,seconds)

    daysEl.innerHTML=days;
    hrEL.innerHTML=formatTime(hrs);
    minEl.innerHTML=formatTime(mins);
    secEl.innerHTML=formatTime(seconds);

    function formatTime(time){
       return time<10 ?  ('0'+time) : time
    }

}


countdown();

setInterval(countdown,1000)