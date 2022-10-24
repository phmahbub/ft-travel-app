import React, { useContext, useState } from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import Button from "../Utilities/Button";
import { AuthContext } from "../../Context/Context";
import swal from "sweetalert";

const NewNavBar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogout = () =>{
    logOut()
    .then(() => {
     user.email? swal("Log out successful"): swal("Please Sign in");
    })
    .catch((error)=>{

    })

  }


  const links = [
    { name: "Home", link: "/home" },
    { name: "Products", link: "/products" },
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
  ];
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={
        nav
          ? "newNav active  w-full fixed  left-0"
          : "newNav w-full fixed  left-0"
      }
    >
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-orange-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          PC Institute
        </div>
        {/* {<div>
          <input
            type="text"
            name="search"
            id="search"
            className="border-2 border-orange-400 px-5 py-2 md:ml-3 rounded md:mb-0 mb-3"
            placeholder="Search Here"
          />
        </div>} */}
        <div
          onClick={() => setOpen(!open)}
          className="text-4xl absolute right-8 top-3 cursor-pointer md:hidden text-orange-500"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex items-center md:items-center md:pb-0 pb-6 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:bg-transparent bg-orange-100 md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open? "top-20" : "top-[-500px]"
          } `}
        >
          {links.map((link) => {
            return (
              <li
                key={link.name}
                className="md:ml-8 md:my-0 my-4 text-xl font-semibold "
              >
                <NavLink
                  to={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
          <div className="md:flex items-center justify-center">
            <div>
              <img
               src={user?.photoURL}
                className="profile-image md:ml-3 ml-0 md:mb-0 mb-3"
                alt=""
              />
            </div>
            <div>
            {
                user?.email?  <Link onClick={handleLogout} ><Button>Log out</Button></Link> :
                <Link to='/signup'><Button>Sign in</Button></Link>
               }

              
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NewNavBar;
