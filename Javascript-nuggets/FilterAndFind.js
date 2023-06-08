const people=[
    {
        name:'Nithesh',
        age:28,
        position:'QA Engineer'
    },
    {
        name:'Supreeth',
        age:27,
        position:'Software Engineer'
    },
    {
        name:'Pavan',
        age:28,
        position:'Analyst'
    },
    {
        name:'Madhu',
        age:30,
        position:'Senior dev'
    }
];

const filterAge=people.filter(person=>person.age>=28)
console.log(filterAge);

const filterName=people.filter(person=>person.name==='Nithesh')//return always array
console.log(filterName);

const findName = people.find(person=>person.name==='Nithesh')//return the first matching instance
console.log("FindName: ", findName);

//no-match filter
const filterPosition = people.filter(person=>person.position==='Senior Dev')
console.log(filterPosition);//[]

const findPosition = people.find(person=>person.position==='Senior Deev')
console.log(findPosition);//undefined