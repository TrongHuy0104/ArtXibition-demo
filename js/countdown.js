var date = document.querySelectorAll(".counter-item p:last-child");
var day = date[0];
var hour = date[1];
var minute = date[2];
var second = date[3];

var countDownDate = new Date("Aug 13, 2023 12:00:00").getTime();

// Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    day.innerHTML = days <= 0 ? 0 : days;
    hour.innerHTML = hours <= 0 ? 0 : hours;
    minute.innerHTML = minutes <= 0 ? 0 : minutes;
    second.innerHTML = seconds <= 0 ? 0 : seconds;

    // If the count down is over, write some text
    if (distance <= 0) {
        clearInterval(x);
    }
}, 1000);
