import React from 'react'
import About from '../components/About/About';
import Testbuttons from '../components/TestButtons/Testbuttons';
import { Sidebar } from '../components';

function Blockweb() {
  return (
    <div className='flex'>
        <div className='h-screen sticky top-0'>
          < Sidebar />
        </div>
        <div  style={{ position:"relative" , width: "800px", margin:"auto"  }} >
          <About/>
          <Testbuttons/>
        </div>
    </div>
  )
}

export default Blockweb