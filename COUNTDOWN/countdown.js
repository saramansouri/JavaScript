var counter = 120
var countdown


function startCounting() {
    countdown = setInterval(function () {
        var min = parseInt(counter / 60)
        var sec = parseInt(counter % 60)
        if (counter <= 0) {
            clearInterval()
            document.getElementById("start").disabled = true
            document.getElementById("stop").disabled = true
        }
        else {
            counter -= 1
            document.getElementById("start").disabled = true
            document.getElementById("stop").disabled = false
        }
        document.getElementById("min").innerHTML = min
        document.getElementById("sec").innerHTML = sec

    }, 1000)
}


function stopCounting() {
    clearInterval(countdown)
    document.getElementById("stop").disabled = true
    document.getElementById("start").disabled = false
}

function restartCounting() {
    stopCounting()
    counter = 120
    var min = parseInt(counter / 60)
    var sec = parseInt(counter % 60)
    document.getElementById("min").innerHTML = "0" + min
    document.getElementById("sec").innerHTML = "0" + sec
}
