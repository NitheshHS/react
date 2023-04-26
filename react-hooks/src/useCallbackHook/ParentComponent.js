import React, { useCallback, useState } from 'react'
import Counter from './Counter';
import Button from './Button';
import Title from './Title';

function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(5000);

    const incrementAge = useCallback(()=>{
        setAge(prevAge=>prevAge+1)
    },[age])
    const incrementSalary = useCallback(()=>{
        setSalary(prevSalary => prevSalary+1000)
    },[salary])

  return (
    <div>
        <Title/>
        <Counter text='AGE' value={age}></Counter>
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Counter text='SALARY' value={salary}></Counter>
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent