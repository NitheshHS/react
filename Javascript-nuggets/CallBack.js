function makeUppercase(value){
    console.log(value.toUpperCase());
}

function handleName(name, cb){
    const firstName=`${name} smith`;
    cb(firstName)
}

handleName('Jhon', makeUppercase)
handleName('Bob', (value)=>console.log(value.toLowerCase()))