import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Searchbox from './components/Searchbox/Searchbox'
import Jobs from './components/opportunities/opportunities'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <Navbar />
      <Searchbox />
      <Jobs />
      <Footer />
    </div>
  )
}

export default App
