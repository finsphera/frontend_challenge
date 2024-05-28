import React from 'react'
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { TbMovie, TbSearch } from "react-icons/tb";
import { FaHouse } from "react-icons/fa6";
import MenuItem from '../MenuItem/MenuItem'

const Sidebar = () => {
  return (
    <nav className='nav_sidebar'>
      <MenuItem
        icon={<FaHouse />}
        path='/'
      />
      <MenuItem
        icon={<PiTelevisionSimpleBold />}
        path='/tv-series'
      />
      <MenuItem
        icon={<TbMovie />}
        path='/movies'
      />
      <MenuItem
        icon={<TbSearch />}
        path='/search'
      />
    </nav>
  )
}

export default Sidebar
