import React from 'react'
import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs'
import {FaFire, FaHome, FaMailBulk, FaPoo, FaQuestion, FaSearch} from 'react-icons/fa'
const Sidebar = () => {


    return (
        <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
            <SideBarIcon icon={<FaFire size ='28'/>} />
            <SideBarIcon text='home'  href='./'icon={<FaHome size='28'/>}/>
            <SideBarIcon text='search page'  href='./repos'icon={<FaSearch size='28'/>}/>
            <SideBarIcon text='about' href='./about' icon={<FaQuestion size ='28'/>}/>
            <SideBarIcon text='contact' href = './contact' icon={<FaMailBulk size ='28'/>}/>
            
        </div>
    )
}
const SideBarIcon = ({icon, text='tooltip', onClick, href}) => (
    <div className = 'sidebar-icon group' >
        
        <div onClick={() => window.location.href=`${href}`}>

        {icon}
        </div>
        <span class='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)

export default Sidebar
