// document.getElementById("count-el").innerText = 5


let saveEl = document.getElementById("save-el")
//camelCase
let countEl = document.getElementById("count-el")
//change count-el in the html to reflect the new count
let count = 0

function increment(){
    count+=1
    countEl.textContent = count
    
}


function save() {
    let DC = count + " - "
    saveEl.textContent += DC//+= textContent bc innerText doesnt do hidden (spaces)
    countEl.textContent = 0
    count = 0
    console.log(count)
}

//when clicked, set count = 0, countEl = count





////mpn, W3Schools, tackOverflow










