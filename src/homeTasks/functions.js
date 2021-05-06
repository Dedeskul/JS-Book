// 1) создать функцию coffeeMachine
// ## она должна принимать параметры 
// - brand (string),
// - price (number),
// - color (string),
// - hasCappuccinatore (boolean)
// ## если price меньше 2500, функция должна возвращать строку 'chip coffe machine'
// ## если price больше 2500, функция должна возвращать строку 'middle price coffe machine'
// ## если price больше 10000, функция должна возвращать строку 'expencive coffe machine'
// ## создать три переменных, которые будут принимать результат вызова функции coffeeMachine
// ## вывести в консоли полученное значение 

// 2) создать три обьекта CoffeMachineOvner 
// ## создать каждому из  CoffeMachineOvner свойство hasCoffeMachine (boolean)
// ## у 2-их CoffeMachineOvner свойство hasCoffeMachine будет равно результату вызова функции coffeeMachine
// ## у 3-его свойство hasCoffeMachine будет false 
// ## вывести с помощью console.log(всойство hasCoffeMachine для каждого из CoffeMachineOvner)

// Resolving

const coffeeMachine = function(brand, color, price, hasCappuccinatore){
    if(price <= 2500){
        return 'chip coffe machine'
    }

    if(price > 2500 && price <10000){
        return 'middle price coffe machine'
    }

    if(price >= 10000){
        return 'expencive coffe machine'
    }
}

const chipCoffeMachine = coffeeMachine('Test', 'Black', 2000, false)
const middlePriceCoffeMachine = coffeeMachine('Test', 'Black', 5000, false)
const expensiveCoffeMachine = coffeeMachine('Test', 'Black', 12000, false)

console.log(chipCoffeMachine)
console.log(middlePriceCoffeMachine)
console.log(expensiveCoffeMachine)

const CoffeMachineOvner1 = {
    hasCoffeMachine: chipCoffeMachine,
}
const CoffeMachineOvner2 = {
    hasCoffeMachine: expensiveCoffeMachine,
}
const CoffeMachineOvner3 = {
    hasCoffeMachine: false
}

const coffeMachineOvners = [CoffeMachineOvner1, CoffeMachineOvner2]
coffeMachineOvners.forEach(ovner => {
    console.log(ovner.hasCoffeMachine)
})