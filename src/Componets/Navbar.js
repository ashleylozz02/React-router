import React from 'react'

function Navbar() {
  return <div className='navbar'>

        <h1>React  Router dom </h1>
        <div className='navlink'>
        <Navlink to="/">Home </Navlink>
        <Navlink to="/">About </Navlink>
        <Navlink to="/">contact  </Navlink>
        </div>
    </div>
  
}

export default Navbar