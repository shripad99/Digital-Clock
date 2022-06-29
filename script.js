let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("seconds");

let set_clock = setInterval(
    function () {
        let date = new Date();

        let hr = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        var bd = document.querySelector("body");
        if ((hr >= 5 && hr <= 12) && (min <= 59) && (sec <= 59)) {
            bd.style.backgroundImage = "url('morning.jpg')";
            bd.style.backgroundSize = "cover";
            bd.style.backgroundRepeat = "no-repeat";
            // bd.classList.add('morning');
        } else if ((hr >= 12 && hr <= 15) && (min <= 59) && (sec <= 59)) {
            bd.style.backgroundImage = "url('afternoon.jpg')";
            bd.style.backgroundSize = "cover";
            bd.style.backgroundRepeat = "no-repeat";
            // bd.classList.add('afternoon');
        } else if ((hr >= 16 && hr <= 19) && (min <= 59) && (sec <= 59)) {
            bd.style.backgroundImage = "url('evening.jpg')";
            bd.style.backgroundSize = "cover";
            bd.style.backgroundRepeat = "no-repeat";
            // bd.classList.add('evening');
        } else {
            bd.style.backgroundImage = "url('night.jpg')";
            bd.style.backgroundSize = "cover";
            bd.style.backgroundRepeat = "no-repeat";
            // bd.classList.add('night');
        }

        // console.log(hr,min,sec);
        let cal_hr = (hr * 30) + (min / 2);
        let cal_min = (min * 6) + (sec / 10);
        let cal_sec = sec * 6;

        hour.style.transform = `rotate(${cal_hr}deg)`;
        minute.style.transform = `rotate(${cal_min}deg)`;
        second.style.transform = `rotate(${cal_sec}deg)`;
    }
    , 1000);

