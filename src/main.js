// import prompt_data from "./js/promtp.js" 
//let number = document.querySelector(".numbers")
let app = document.getElementById("app")
let operation_icon = document.createElement("h2")
operation_icon.id = "operation"


let promp_all = {
    num1: " ",
    operation: undefined,
    num2: " "
}

let number =false
function prompt_number(num){
    //!number?(promp_all.num1 += num, console.log(`num1: ${promp_all.num1}`)):(promp_all.num2+=num, console.log(`num2: ${promp_all.num2}`))
    !number?(promp_all.num1 += num, app.innerHTML = String(promp_all.num1)):(promp_all.num2+=num, app.innerHTML = String(promp_all.num2))  
}

function prompt_operation(operation){

    let promtp = document.getElementById("prompt")
    switch(operation){
        case "soma":
            promp_all.operation = "+"
            number = true

            promtp.insertBefore(operation_icon, app)
            operation_icon.innerHTML = promp_all.operation
            break
        case "multiplicacao":
            promp_all.operation = "x"
            number = true
            
            promtp.insertBefore(operation_icon, app)
            operation_icon.innerHTML = promp_all.operation
            break
        case "divisao":
            promp_all.operation = "/"
            number = true
            
            promtp.insertBefore(operation_icon, app)
            operation_icon.innerHTML = promp_all.operation
            break
        case "subtracao":         
            promp_all.operation = "-"
            number = true

            promtp.insertBefore(operation_icon, app)
            operation_icon.innerHTML = promp_all.operation
            break

    }
}
function prompt_clean(){
    promp_all.num1 = " "
    promp_all.operation = undefined
    promp_all.num2 = " "

    app.innerHTML = 0
    operation_icon.innerHTML = null
}

function prompt_res(){
    let res = 0
    let num1 = parseFloat(promp_all.num1) 
    let num2 = parseFloat(promp_all.num2)
    let op = promp_all.operation
    switch(op){
        case "+": 
            res=(num1+num2)
            console.log(res)
            app.innerHTML = res
            operation_icon.innerHTML = null
            break
        case "-":
            res=(num1-num2)
            console.log(res)
            app.innerHTML = res

            break
        case "*":
            res=(num1*num2)
            app.innerHTML = res

            console.log(res)
            break
        case "/":
            res=(num1/num2)
            app.innerHTML = res

            console.log(res)
            break
    }


}
// function init() {
//     let num1
//     let operation
//     let num2
//     let prompt = prompt_data()
//     console.log(prompt.num1)

// }

// init()