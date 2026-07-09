import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()

  const links = [
    {name:'Home' , path:'/'},
    {name:'Cart', path:'/Cart'},
  ];
  
  return (
    <nav className="sticky top-0 z-50 bg-[#0A1123]/90 backdrop-blur-md border-b border-[#3A3E6C] mb-8">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold text-[#8387C3] tracking-tight">
          JigI
        </Link>
        <ul className="flex gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path
            
            return(
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={`text-lg font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'text-white border-b-2 border-[#8387C3] pb-1' 
                      : 'text-[#959BB5] hover:text-white'
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