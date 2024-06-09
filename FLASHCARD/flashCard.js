function submitForm(event) {
    event.preventDefault()
}

let sampleCards =
    [
        {
            question: "this is my first question",
            answer: "This is the answer",
        },
        {
            question: "Question",
            answer: "Answer",
        },
        {
            question: "Question",
            answer: "Answer",
        }
    ]



function addObjectToArray() {

    var newObject = {
        question: document.getElementById('question').value,
        answer: document.getElementById('answer').value,
    };

    sampleCards.push(newObject)
    document.getElementById('question').value = ""
    document.getElementById('answer').value = ""

    console.log(sampleCards)
};

// function showAnswer() {
//     document.getElementById("answ").display = "visible"
// }
