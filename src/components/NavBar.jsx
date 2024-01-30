import React from 'react'


const NavBar = () => {
    return ( 
    <div className="flex w-screen items-center justify-between h-16 px-4 bg-white dark:bg-gray-800">
      <div>
        <a className="flex items-center" href="#">
          <FlagIcon className="w-6 h-6 text-black dark:text-white" />
          <span className="ml-2 text-lg font-semibold text-black dark:text-white">Company</span>
        </a>
      </div>
      <nav className="lg:flex hidden space-x-4">
        <a
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          href="#"
        >
          Product
        </a>
        <a
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          href="#"
        >
          About
        </a>
        <a
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          href="#"
        >
          Contact
        </a>
      </nav>
      <div className="lg:hidden flex items-center">
        <button className="text-black dark:text-white">
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}




    


export default NavBar