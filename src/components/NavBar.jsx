import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()

  const links = [
    {name:'Home' , path:'/'},
    {name:'Cart', path:'/Cart'},
  ];
  
  return (
    <nav className="sticky top-0 z-50 bg-rose-700/80 backdrop-blur-md border-b border-white/20 mb-8">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <ul className="flex gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path
            
            return(
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={`text-lg font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'text-white border-b-2 border-white pb-1' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>  
      </div>
    </nav>
  )
}

export default NavBar