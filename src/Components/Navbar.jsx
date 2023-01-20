import React from 'react'
import {useState, useEffect} from 'react'
import '../css/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)   
  }
    
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
  }

  }, [])

  return (
    <div>
      <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className='list'>
        <Link to='/Home' className='items link-btn'>HOME</Link>
        {/* <Link to='/Schedule' className="items link-btn">SCHEDULE</Link> */}
        <Link to='/Profile' className="items link-btn">PROFILE</Link>
        <Link to='/Dashboard' className="items link-btn">DASHBOARD</Link>
        <Link to='/Login' className="items link-btn">LOGIN </Link>
        <Link to='/Register' className="items link-btn">REGISTER</Link>
        
      </ul>
      )}
      <button onClick={toggleNav} className="btn">|||</button>
      </nav>
    </div>
  )
}

export default Navbar
