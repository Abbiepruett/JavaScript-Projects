
//challange 1
let firstName = "Abbie"
let lastName = "Pruett"
let fullName = firstName + " " + lastName

console.log(fullName)


//challange 2
let name = "Linda"
let greeting = "Hi there"
function greetLinda(){
    console.log(name + ", " + greeting + "!")

}

greetLinda()

//challange 3
let myPoints = 3
function remove1Point(){
    myPoints -= 1
}

function add3Points(){
    myPoints +=3
}

remove1Point()
add3Points()
console.log(myPoints)

//challange 4

let Error = document.getElementById("error")

function purchaseError(){
    Error.textContent = "Something went wrong, please try again"
}

//challange 5

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let myNum = document.getElementById("sum-el")

function add(){
    let result =num1 + num2
    myNum.textContent = "Sum: " +  result
}

function subtract(){
    let result =num1 - num2
    myNum.textContent = "Sum: " +  result
}

function mult (){
    let result =num1 * num2
    myNum.textContent = "Sum: " +  result
}

function divide() {
    let result =num1 / num2
    myNum.textContent = "Sum: " +  result
}
