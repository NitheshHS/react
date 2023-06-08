import React from 'react'
import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './context'
function Home() {
    const {openSidebar, openModal}=useGlobalContext();
  return (
    <main>
        <button classsName='sidebar-toggle' onClick={openSidebar}>
            <FaBars/>
        </button>
        <button className="btn" onClick={openModal}>show modal</button>
    </main>
  )
}

export default Home