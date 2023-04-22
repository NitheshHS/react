import React from "react";
import Person from "./Person";

function NameList(){
    const persons = [
        {id:1,
        name:'Nitesh H S',
        age:25,
        skill: 'Automation Testing'
        },
        {id:2,
          name:'Supreeth P',
          age:25,
          skill: 'Developer'
          },
          {id:3,
            name:'Pavan N C',
            age:26,
            skill: 'Database'
            }
      ]
    let nameList=['Nithesh','Supreeth','Pavan']
    const personList=persons.map(person=>(
        <Person key={person.id} person={person}></Person>
    ))
    return(
        <div>
            {/* {nameList.map(names=><h2>{names}</h2>)} */}
        {personList}
        </div>
    )
}
export default NameList;