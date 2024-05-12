var jalaali = require('jalaali-js')
var today = jalaali.toJalaali(new Date())
console.log(`Today is ${today.jy} / ${today.jm} / ${today.jd}`)



// Another way without installing any lib
let todayDate = new Date().toLocaleDateString('fa-IR')
console.log(todayDate)