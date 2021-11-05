let yourName = "Ben Froehlich" // HINT: Replace this with your own name!
document.getElementById('credit').textContent = `Created by ${yourName}`

let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle



//function to be executed when events for GB are executed to update GB count and return current total GB count to quantity-GB using #qty-gb id selector and .innerHTML
function updateGb(totalGb){
    let gb = document.querySelector('#qty-gb')
    gb.innerHTML = totalGb
}


document.querySelector('#add-gb').addEventListener('click', function() {
        gb++   
    updateGb(gb)
    runningTotal() 
})

document.querySelector('#minus-gb').addEventListener('click', function() {
    if (gb > 0) {
        gb--   
    }
    updateGb(gb)
    runningTotal() 
})

//function to be executed when events for CC are executed to update CC count and return current total CC count to quantity-CC using #qty-cc id selector and .innerHTML
function updateCc(totalCc){
    let cc = document.querySelector('#qty-cc')
    cc.innerHTML = totalCc
}

document.querySelector('#add-cc').addEventListener('click', function() {
    cc++   
    updateCc(cc)
    runningTotal() 
})

document.querySelector('#minus-cc').addEventListener('click', function() {
    if (cc > 0) {
        cc--   
    }
    updateCc(cc)
    runningTotal() 
})

//function to be executed when events for sugar are executed to update sugar count and return current total sugar count to quantity-sugar using #qty-sugar id selector and .innerHTML
function updateSugar(totalSugar){
    let sugar = document.querySelector('#qty-sugar')
    sugar.innerHTML = totalSugar
}

document.querySelector('#add-sugar').addEventListener('click', function() {
    sugar++
    updateSugar(sugar)
    runningTotal()    
})

document.querySelector('#minus-sugar').addEventListener('click', function() {
    if (sugar > 0) {
        sugar--   
    }
    updateSugar(sugar)
    runningTotal() 
})

function runningTotal() {
    var total = 0
    var quantity = document.querySelectorAll('#qty-gb,#qty-cc,#qty-sugar')
    for (var i = 0; i<quantity.length; i++){
        total += parseInt(quantity[i].innerHTML)
    }
    document.querySelector('#qty-total').innerHTML = total
}




/*let totalArray = document.querySelectorAll('#qty-gb, #qty-cc, #qty-sugar')
console.log(totalArray)

totalArray.forEach(cookie => {
    total = total + cookie.id
})
*/


/*function updateTotal()
{
    for (i<0; i<totalArray.length;i++)
    total = total + totalArray[i]
}
*/
