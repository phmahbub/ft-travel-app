import React from "react";
import { Link } from "react-router-dom";

const NewNavBar = () => {
    let links=[
        {name:'Home', link:'/home'},
        {name:'Products', link:'/products'},
        {name:'Places', link:'/places'},
        {name:'About', link:'/about'},
    ]

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppoms] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          PC Institute
        </div>
        <ul className="md:flex items-center ">
            {
                links.map((link)=>{
                    return(
                       <li key={link.name} className="md:ml-8 text-xl font-semibold ">
                           <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500' >{link.name}</Link>
                       </li>
                    )
                    
                })
            }
        </ul>
      </div>
    </div>
  );
};

export default NewNavBar;
