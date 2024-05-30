gameOptions = ["ROCK", "PAPER", "SCISSOR"]

function clickRock() {
    document.getElementById("playerOne").innerHTML = "ROCK"
    playerTwo = gameOptions[Math.floor(Math.random() * 3)]
    document.getElementById("playerTwo").innerHTML = playerTwo

    if (playerTwo == "ROCK") {
        document.getElementById("winner").innerHTML = "EQUAL"
    }

    else if (playerTwo == "PAPER") {
        document.getElementById("winner").innerHTML = "PLAYER TWO"
    } else {
        document.getElementById("winner").innerHTML = "PLAYER ONE"

    }

}

function clickPaper() {
    document.getElementById("playerOne").innerHTML = "PAPER"
    playerTwo = gameOptions[Math.floor(Math.random() * 3)]
    document.getElementById("playerTwo").innerHTML = playerTwo

    if (playerTwo == "PAPER") {
        document.getElementById("winner").innerHTML = "EQUAL"
    }

    else if (playerTwo == "SCISSOR") {
        document.getElementById("winner").innerHTML = "PLAYER TWO"

    } else {
        document.getElementById("winner").innerHTML = "PPLAYER ONE"

    }

}


function clickSci() {
    document.getElementById("playerOne").innerHTML = "SCISSOR"
    playerTwo = gameOptions[Math.floor(Math.random() * 3)]
    document.getElementById("playerTwo").innerHTML = playerTwo

    if (playerTwo == "SCISSOR") {
        document.getElementById("winner").innerHTML = "EQUAL"
    }

    else if (playerTwo == "PAPER") {
        document.getElementById("winner").innerHTML = "PLAYER ONE"
    } else {
        document.getElementById("winner").innerHTML = "PLAYER TWO"

    }

}


