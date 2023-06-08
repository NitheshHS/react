const fruits = ['apple', 'banana', 'guice', 'lemon','mango']
const newArray = [...fruits];
newArray[0]='Strawberry'
console.log(fruits);
console.log(newArray);

const person = {
    first:'Nithesh',
    last:'Gowda',
    skill:['Selenium', 'Api testing', 'Appium', 'react']
}

const newPerson = {...person, name:'Pavan'}
console.log(person);
console.log(newPerson);