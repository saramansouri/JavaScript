var testingArray = [1, 2, 3, 4, 5, 7, 10, 12, "sara"]
// var testingArray = [1, 2, 3, 4, 5, "ss"]

// this is a push function
function push(anArray, input) {
    anArray.length = anArray.length + 1
    for (i = anArray.length - 1; i >= 0; i--) {
        anArray[i] = anArray[i - 1]
    }
    anArray[0] = input
    console.log("push -> " + anArray)
}
push(testingArray, "sara")
// push(testingArray, "gazar")



// this is a pull function
function pull(anArray) {
    var deletedItem = anArray[anArray.length - 1]
    anArray.length = anArray.length - 1
    console.log("pull -> " + anArray, " / deleted item -> [" + deletedItem + "]")
}

pull(testingArray)
