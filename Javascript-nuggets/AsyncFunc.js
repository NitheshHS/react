// const example = async()=>{
//     console.log("hellow world");
// }

//console.log(example());

const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'susan' },
    { id: 3, name: 'anna' },
  ]
  
  const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five'] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
  ]

  const getUser = async(name)=>{
    return new Promise((resolve, reject)=>{
        const user = users.find(usr=>usr.name===name)
        if(user)
            resolve(user)
        else
            reject('No such user with name: '+name)
    })
  }

  const getArticle = async(id)=>{
    return new Promise((resolve, reject)=>{
        const article = articles.find(ar=>ar.userId===id);
        if(article){
            resolve(article.articles)
        }
        else{
            reject('Wrong id: '+id)
        }
    })
  }

//   getUser('susan')
//   .then(user=>getArticle(user.id))
//   .then(article=>console.log(article))
//   .catch(err=>console.log(err))

  const getData = async()=>{
    const user = await getUser('john');
    const article = await getArticle(user.id)
    console.log(article);
  }
getData()
  