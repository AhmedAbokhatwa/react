import React from 'react';
import LogoImg from "../../src/assets/logo.png";
import CustomLink from "./CustomComponents";
import PropTypes from "prop-types";
// import { menulists } from "../src/assets/data/data.js";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
const menulists = [
  { id: 1, path: "/", link: "home" },
  { id: 2, path: "/shop", link: "Shop" },
  { id: 3, path: "/blog", link: "Blog" },
  { id: 4, path: "/about", link: "about" },
  { id: 5, path: "/services", link: "Services" },
  { id: 6, path: "/contact", link: "Contact" },
];

export default function Header() {
  return (
    <div>
      <header className='header py-12 px-3 bg-white-100 relative z-20'>
        <nav className='p-4 flex justify-between items-center relative'>
          <div className='flex items-center gap-14'>
              <div>
                <img src={LogoImg} alt="Logo" className='h-7'/>
              </div>
              <div className='hidden lg:flex items-center justify-between gap-8'>
                {menulists.map((list) => (
                  <li key={list.id} className='uppercase list-none'>
                    <a href={list.path}>{list.link}</a>
                  </li>
                ))}
              </div>
          </div>
                  <div className='flex items-center gap-8 icons'>
                    <div className='lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:z-10'>
{/* 
                      <CustomLink>
                      login
                    </CustomLink> */}
                    <span>/</span>
                    <h4>
                      register
                    </h4>
                    <div className='icon flex items-center justify-center gap-6'> 
                      <IoSearchOutline size ={23} />
                        
                      <IoCartOutline size ={23} />
                    </div>
                  
                    </div>

                  </div>
        </nav>
      </header>
    </div>
  );
}
