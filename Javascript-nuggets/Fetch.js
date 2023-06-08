// const fetchData = async()=>{
//     const url = 'https://www.course-api.com/react-tours-project'
//     fetch(url)
//     .then(resp=>resp.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))
// }



const fetchData=async()=>{
    const url = 'https://www.course-api.com/react-tours-project'
    const rsp = await fetch(url)
    const data = await rsp.json();
    console.log(data);
}
fetchData()