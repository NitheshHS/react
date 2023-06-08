const people = [
    {
        name:'Jhon',
        location:{street: 'USA',timezone:{offset:'7:00AM'}}
    },
    {
        name:'Bob',
        location:{street: 'USA'}
    },
    {
        name:'Lucy',
        location:{street: 'Denmark',timezone:{offset:'12:00AM'}}
    }
]

people.forEach(person=>{
    //console.log(person.location && person.location.timezone && person.location.timezone.offset);
    console.log(person?.location?.timezone?.offset || 'no data');//optional chaining
})