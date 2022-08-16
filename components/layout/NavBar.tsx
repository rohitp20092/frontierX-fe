import React from 'react'

//Icons
import SearchIcon from '../icons/SearchIcon'
import Logo from '../icons/Logo'

export default function Navbar() {
  const navLinks = () => {
    return <span className="ml-2">Lorem</span>
  }
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-3 lg:px-[40px] py-[25px] bg-black">
      <div className="w-full px-0 mx-auto flex flex-wrap md:flex-nowrap items-center justify-start lg:justify-between">
        <div className="w-full md:w-52 lg:w-64 relative flex justify-center xl:w-auto lg:static lg:block md:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white mb-4 md:mb-0"
            href="#pablo"
          >
            <Logo />
          </a>
        </div>
        <div className="flex ml-0 w-full xl:w-auto xl:ml-auto items-center justify-between flex-wrap md:flex-nowrap">
          <div className="relative mx-auto text-gray-600 w-full xl:w-[657px]">
            <div className="absolute top-3 left-4">
              <SearchIcon />
            </div>
            <input
              className="border-0 w-full bg-[#1F1F1F] text-[#A2A2A2] h-10 px-5 pr-16 pl-12 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
          </div>
          <div className="md:pl-[41px] pl-0 w-full md:w-auto mt-4 md:mt-0">
            <ul className="flex list-none lg:ml-auto justify-center">
              <li className="nav-item">
                <a
                  className="pr-3 py-2 flex items-center leading-snug text-white hover:opacity-75 text-[15px] font-extrabold"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  {navLinks()}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center leading-snug text-white hover:opacity-75 text-[15px] font-extrabold"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  {navLinks()}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="pl-3 py-2 flex items-center leading-snug text-white hover:opacity-75 text-[15px] font-extrabold"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  {navLinks()}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
