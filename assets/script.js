// First, tell us your name
let yourName = "Nolan Sweeney" // HINT: Replace this with your own name!
document.getElementById('credit').textContent = `Created by ${yourName}`
// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = gb + cc + sugar;
const gingerMinusOne = document.querySelector('#minus-gb')
const gingerPlusOne = document.querySelector('#add-gb')
const cookiePlusOne = document.querySelector('#add-cc')
const cookieMinusOne = document.querySelector('#minus-cc')
const sugarPlusOne = document.querySelector('#add-sugar')
const sugarMinusOne = document.querySelector('#minus-sugar')
function upTotalQuantity(totalQuantity) {
    let total = document.querySelector('#qty-total').value
    total.innerHTML = totalQuantity
}
function upGingerQuant(gingerQuantity) {
    let gb = document.querySelector('#qty-gb')
    gb.innerHTML = gingerQuantity
}
function upCookieQuant(cookieQuantity) {
    let cc = document.querySelector('#qty-cc')
    cc.innerHTML = cookieQuantity 
}
function upSugarQuant(sugarQuantity) {
    let sugar = document.querySelector('#qty-sugar')
    sugar.innerHTML = sugarQuantity
}
gingerPlusOne.addEventListener('click', function(e){
    gb++
    // total++
    upGingerQuant(`${gb}`)
})
gingerMinusOne.addEventListener('click', function(e){
    if (gb > 0) {
        gb--
        // total--
    }
    upGingerQuant(`${gb}`)
})
cookiePlusOne.addEventListener('click', function(e){
    cc++
    // total++
    upCookieQuant(`${cc}`)
})
cookieMinusOne.addEventListener('click', function(e){
    if (cc > 0) {
        cc--
        // total--
    }
    upCookieQuant(`${cc}`)
})
sugarPlusOne.addEventListener('click', function(e){
    sugar++
    // total++
    upSugarQuant(`${sugar}`)
    
})
sugarMinusOne.addEventListener('click', function(e){
    if (sugar > 0) {
        sugar--
        // total--
    }
    upSugarQuant(`${sugar}`)
})