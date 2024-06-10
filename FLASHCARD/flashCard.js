function submitForm(event) {
    event.preventDefault()
}

let listOfCards =
    [
        {
            question: "this is my first question",
            answer: "This is the answer",
        },
        {
            question: "Question",
            answer: "This is the answer",
        },
        {
            question: "Question",
            answer: "This is the answer",
        }
    ]


listOfCards.forEach((card) => {
    creatCard(card)
})


function creatCard(cards) {
    const allCardsContainer = document.getElementById("allCards")
    const creatNewElem = document.createElement("div")
    creatNewElem.classList.add("card")
    creatNewElem.innerHTML =
        `<div class="card-body">
                    <h5 class="questionTag">${cards.question}</h5>
                    <p id="answerTag" style="display:none;">${cards.answer}</p>
                    <button class="showbtn" onclick="showAnswer()">Show</button>
                    <button class="deletebtn" onclick="deleteCard()">Delete</button>
        </div>
    
    `
    allCardsContainer.appendChild(creatNewElem)
}


function addObjectToArray() {

    var newObject = {
        question: document.getElementById('question').value,
        answer: document.getElementById('answer').value,
    };

    listOfCards.push(newObject)
    creatCard(newObject)

    document.getElementById('question').value = ""
    document.getElementById('answer').value = ""
};






function showAnswer() {
    document.getElementById("answerTag").style.display = 'block';
}

function deleteCard() {
   
}
