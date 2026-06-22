import React from 'react'

const Card = (props, children) => {

  const time = "2:44";
  let open = "true";
  
  return (
    <div>
    
      <h3 className="w-6 h-8 bg-rose-600"> welcome {name} </h3>
      <p>
        How is your {time} going 
      </p>
      <p className="w-5 h-5 rounded-full bg-amber-400"> 
        The card is  {open ? "open" : "close"}
      </p>
        <div> {children} </div>
    </div>
      
  )
}

export default Card