var testingArray = [1, 2, "sara"]


// this is a push function
function push(anArray, input) {
    anArray.length = anArray.length + 1
    for (i = anArray.length - 1; i >= 0; i--) {
        anArray[i] = anArray[i - 1]
    }
    anArray[0] = input
    // return anArray
    console.log("push -> " + anArray)
}
push(testingArray, "sara")



// this is a pull function
function pull(anArray) {
    if (anArray.length !== 0) {
        var deletedItem = anArray[anArray.length - 1]
        console.log("deleted item -> [" + deletedItem + "]")

        anArray.length = anArray.length - 1
        // return anArray
        console.log("pull -> " + anArray)

    } else {
        console.log("This Array is EMPTY!")
    }
}


pull(testingArray)




// ----------------this is a push function - using new array
// function push(anArray, input) {
//     var newArray = []
//     newArray[0] = input
//     for (i = 0; i < anArray.length; i++) {
//         newArray[i + 1] = anArray[i]

//     }
//     return newArray
// }
// push(testingArray, "sara")
// push(testingArray, "gazar")

// var testingArray = [1, 2, 3, 4, 5, "ss"]



