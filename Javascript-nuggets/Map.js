const people=[
    {
        name:'Nithesh',
        age:26,
        position:'QA Engineer'
    },
    {
        name:'Supreeth',
        age:26,
        position:'Software Engineer'
    },
    {
        name:'Pavan',
        age:26,
        position:'Analyst'
    }
];

const ages=people.map((people)=>{
    return people.age
})
console.log(ages);

const modifyPeople = people.map(person=>{
    return {
        firstName:person.name.toUpperCase(),
        oldAge:person.age+20
    }
})
console.log(modifyPeople);