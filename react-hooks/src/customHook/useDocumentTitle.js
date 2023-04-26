import React, { useEffect } from 'react'

function useDocumentTitle(count) {
  useEffect(()=>{
    document.title = `Clicked ${count} times`;
  })
}

export default useDocumentTitle