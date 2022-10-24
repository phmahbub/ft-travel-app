import React, { useState } from "react";
import "./Nav.css"
import { Link } from "react-router-dom";
import Button from "../Utilities/Button";

const NewNavBar = () => {
    const links=[
        {name:'Home', link:'/home'},
        {name:'Products', link:'/products'},
        {name:'Places', link:'/places'},
        {name:'About', link:'/about'},
    ]
    const [open, setOpen] = useState(false)
    const [nav, setNav] = useState(false)

    const changeBackground =()=>{
      if(window.scrollY>=20){
        setNav(true)
      }else{
        setNav(false)
      }
    }
    window.addEventListener('scroll', changeBackground)

  return (
    <div className={nav?'newNav active  w-full fixed  left-0':'newNav w-full fixed  left-0'}>
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppoms] text-gray-800">
          <span className="text-3xl text-orange-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          PC Institute
        </div>
        <div onClick={()=>setOpen(!open)} className="text-4xl absolute right-8 top-6 cursor-pointer md:hidden text-orange-500">
        <ion-icon name={open?'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex items-center md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${open? 'top-20':'top-[-490px]'} md:opacity-90 opacity-80`}>
            {
                links.map((link)=>{
                    return(
                       <li key={link.name} className="md:ml-8 md:my-0 my-5 text-xl font-semibold ">
                           <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500' >{link.name}</Link>
                       </li>
                    )
                    
                })
            }
           <div className="md:flex items-center justify-center">
           <div><input 
            type="text" 
            name="search"
            id="search" 
            className="border-2 border-orange-400 px-5 py-2 md:ml-3 rounded md:mb-0 mb-3"
            placeholder="Search Here"/></div>
            <div><Button>Get Started</Button></div>
           </div>
        </ul>
      </div>
    </div>
  );
};

export default NewNavBar;
