import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="fixed w-[98%] m-4 rounded-full bg-gray-200 text-blue-900 shadow-md">
        <div className="mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">

          <nav className="flex flex-wrap md:w-full items-center justify-between text-base">
          <Link to="/" className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
              <span className="ease-in duration-300 font-serif bg-blue-800 p-3 rounded-full text-white text-xl me-3">AR</span>
          </Link>

          <Link to="/" className="flex title-font font-semibold items-center mb-4 md:mb-0">
              <span className="font-mono text-blue-800 text-xl me-3">Ali Raza</span>
          </Link>

            <Link to="/" className="flex md:w-1/5 title-font font-medium items-center md:justify-end mb-4 md:mb-0 relative overflow-hidden">
              <span className="font-serif bg-blue-800 p-3 rounded-full text-white text-xl relative z-10">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z"/>
                </svg>
              </span>
              <span className="absolute left-0 bg-blue-800 p-3 rounded-full text-white text-xl transform translate-x-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                MENU
              </span>
            </Link>
          </nav>
        </div>
    </header>
    )
}

export default Header