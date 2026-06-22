import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/NavBar'



const Home = () => {
  return (
    <div className="bg-rose-300 text-white">
      <Navbar/>
      <div>Home page</div>
      <Card name="funmibi"> 
        <p> Home page card children components </p>
      </Card>
    </div>
  )
}

export default Home