
function DateTime() {
    var time = new Date();
    var hr = time.getHours();
    var mi = time.getMinutes();
    var sec = time.getSeconds();

    hour=hr%12;


    document.getElementById('hour').innerHTML = hour<10?"0"+hour:hour;
    document.getElementById('minute').innerHTML = mi<10?"0"+mi:mi;
    document.getElementById('second').innerHTML = sec<10?"0"+sec:sec;

    
    if (hr < 12) {
        document.getElementById("am-pm").innerHTML = "AM"
    } else {
        document.getElementById("am-pm").innerHTML = "PM"
       
    }

    

}
setInterval(DateTime, 1000);