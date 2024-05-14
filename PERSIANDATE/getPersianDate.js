// var jalaali = require('jalaali-js')
// var today = jalaali.toJalaali(new Date())
// console.log(`Today is ${today.jy} / ${today.jm} / ${today.jd}`)

function getTodaysDate() {
    var jalaali = require('jalaali-js')
    var today = jalaali.toJalaali(new Date())
    console.log(`Today is ${today.jy} / ${today.jm} / ${today.jd}`)
}
getTodaysDate()



// Another way without installing any lib
let todayDate = new Date().toLocaleDateString('fa-IR')
console.log(todayDate)


