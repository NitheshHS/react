import React, { useMemo, useState } from 'react'

function MemoCounter() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const incrementCountOne = ()=>{
        setCountOne(countOne+1)
    }
    const incrementCountTwo = ()=>{
        setCountTwo(countTwo+2)
    }
    const isEven = useMemo(()=>{
        let i = 0;
        while(i<20000000) i++
        return countOne%2 === 0;
    },[countOne])
  return (
    <div>
        <div>
            <button onClick={incrementCountOne}>CountOne - {countOne}</button>
            {isEven?'Even':'Odd'}
        </div>
        <div>
            <button onClick={incrementCountTwo}>CountTwo - {countTwo}</button>
        </div>
    </div>
  )
}

export default MemoCounter