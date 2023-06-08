const people=[
    {
        name:'Nithesh',
        age:28,
        position:'QA Engineer',
        salary:100
    },
    {
        name:'Supreeth',
        age:27,
        position:'Software Engineer',
        salary:200
    },
    {
        name:'Pavan',
        age:28,
        position:'Analyst',
        salary:300
    },
    {
        name:'Madhu',
        age:30,
        position:'Senior dev',
        salary:400
    }
];

const dailyTotal = people.reduce((total, person)=>{
    // console.log(total);
    // console.log(person.salary);
    return total+=person.salary;
},0)
console.log(dailyTotal);