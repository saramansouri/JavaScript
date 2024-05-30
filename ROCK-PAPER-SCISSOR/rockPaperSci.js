gameOptions = ["ROCK", "PAPER", "SCISSOR"]
// var playerone = ""
// var playertwo = ""
var playerOneS = 0
var playerTwoS = 0
var counter = 5


function playGame(playerOne) {
    counter = counter - 1
    document.getElementById("counter").innerHTML = "THERE ARE " + counter + " GAMES LEFT"

    if (counter <= 0) {
        document.getElementById("counter").innerHTML = "GAME IS OVER"
        if (playerOneS > playerTwoS) {
            document.getElementById("winner").innerHTML = "You are the Winner"
        } else if (playerOneS < playerTwoS) {
            document.getElementById("winner").innerHTML = "Player TWO is the Winner"

        } else {
            document.getElementById("winner").innerHTML = "Equal"

        }
    }
    else {

        var playerTwo = gameOptions[Math.floor(Math.random() * 3)]
        console.log(playerOne, playerTwo)
        if (playerOne == playerTwo) {
            console.log("Equal")
        } else if (playerOne == "ROCK" && playerTwo == "PAPER" || playerOne == "PAPER" && playerTwo == "SCISSOR" || playerOne == "SCISSOR" && playerTwo == "ROCK") {
            playerTwoS++
            document.getElementById("playerTwoScore").innerHTML = playerTwoS

        } else {
            playerOneS++
            document.getElementById("yourScore").innerHTML = playerOneS

        }
    }
}

function reStart() {
    playerOneS = 0
    playerTwoS = 0
    counter = 5
    document.getElementById("counter").innerHTML = ""
    document.getElementById("yourScore").innerHTML = ""
    document.getElementById("playerTwoScore").innerHTML = ""
    document.getElementById("winner").innerHTML = ""
}

// function clickRock() {
//     counter = counter - 1
//     document.getElementById("counter").innerHTML = "THERE ARE " + counter + " GAMES LEFT"
//     if (counter < 0) {
//         document.getElementById("counter").innerHTML = "GAME IS OVER"
//     } else {
//         console.log(counter)

//         playerone = "ROCK"
//         playertwo = gameOptions[Math.floor(Math.random() * 3)]

//         console.log(playerone, playertwo)

//         if (playertwo == "PAPER") {
//             playerTwoS = playerTwoS + 1
//             document.getElementById("playerTwoScore").innerHTML = playerTwoS

//         } else if (playertwo == "SCISSOR") {
//             playerOneS = playerOneS + 1
//             document.getElementById("playerOneScore").innerHTML = playerOneS
//         }
//     }

// }

// function clickPaper() {
//     document.getElementById("playerOneScore").innerHTML = "PAPER"
//     playertwo = gameOptions[Math.floor(Math.random() * 3)]
//     document.getElementById("playerTwoScore").innerHTML = playerTwo

//     if (playertwo == "PAPER") {
//         document.getElementById("winner").innerHTML = "EQUAL"
//     }

//     else if (playerTwo == "SCISSOR") {
//         document.getElementById("winner").innerHTML = "PLAYER TWO"

//     } else {
//         document.getElementById("winner").innerHTML = "PPLAYER ONE"

//     }

// }


// function clickSci() {
//     document.getElementById("playerOneScore").innerHTML = "SCISSOR"
//     playerTwo = gameOptions[Math.floor(Math.random() * 3)]
//     document.getElementById("playerTwoScore").innerHTML = playerTwo

//     if (playertwo == "SCISSOR") {
//         document.getElementById("winner").innerHTML = "EQUAL"
//     }

//     else if (playertwo == "PAPER") {
//         document.getElementById("winner").innerHTML = "PLAYER ONE"
//     } else {
//         document.getElementById("winner").innerHTML = "PLAYER TWO"

//     }

// }


