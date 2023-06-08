const number = 2;
const promise=new Promise((resolve, reject)=>{
    if(number === Math.floor(Math.random()*3))
        resolve('You guessed correctly')
    else
        reject('Guess wrong')
})
//console.log(promise);
promise.then(value=>console.log(value)).catch(err=>console.log(err))