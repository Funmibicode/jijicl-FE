import React from 'react'

const Card = ({name, children}) => {

  const time = "day";
  let open = true;
  
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg mt-4">  
      <h3 className="text-2xl font-bold mb-2"> welcome {name} </h3>  
      <p className="mb-2">How is your {time} going</p>
      <p className="inline-block px-4 py-2 rounded-full bg-amber-400 text-black"> 
        The card is {open ? "open" : "closed"}
      </p>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export default Card