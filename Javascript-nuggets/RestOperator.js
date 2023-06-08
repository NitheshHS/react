const fruits = ['apple', 'banana', 'guice', 'lemon','mango']
const [firstFruit, ...restOfTheFruits] = fruits
console.log(firstFruit, restOfTheFruits);


const person = {
    first:'Nithesh',
    last:'Gowda',
    skill:['Selenium', 'Api testing', 'Appium', 'react']

}

const {first, ...info} = person
console.log(first, info);