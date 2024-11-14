import React from 'react';
import LogoImg from "../../src/assets/logo.png";

import { menulists } from "../../src/assets/data/data";
import { Badges,CustomLink } from './CustomComponents';
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
// const menulists = [
//   { id: 1, path: "/", link: "home" },
//   { id: 2, path: "/shop", link: "Shop" },
//   { id: 3, path: "/blog", link: "Blog" },
//   { id: 4, path: "/about", link: "about" },
//   { id: 5, path: "/services", link: "Services" },
//   { id: 6, path: "/contact", link: "Contact" },
// ];

export default function Header() {
  return (
    <div>
      <header className='header py-3 px-3 bg-white-100 relative z-20'>
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
                    {/* <div className='lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:z-10'> */}
                        <div className='uppercase hidden lg:block text-inherit relative z-20'>
                          <CustomLink href="">login</CustomLink>        
                          <span>/</span>
                          <CustomLink>
                            register
                          </CustomLink>

                        </div>
                      
                        <div className='icon flex items-center justify-center gap-6'> 

                          <IoSearchOutline size ={23} />
                          <div className='relative z-20'>
                          <IoCartOutline size ={23} />
                          <div className='absolute -top-2 -right-1.5'>
                              <Badges color = 'bg-primary-green'>0</Badges>
                          </div>  
                          </div>

                        </div>
                  
                    {/* </div> */}

                  </div>
        </nav>
      </header>
    </div>
  );
}
