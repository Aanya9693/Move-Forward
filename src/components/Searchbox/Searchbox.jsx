import React from 'react'
import './Searchbox.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Searchbox = () => {
  return (
    <div className='searchDiv'>
      <form action="">
        <div className="firstDiv">
          <div className="searchIcon">
            <AiOutlineSearch className='aioutine icon'/>
            <input type="text" className='inputText' placeholder='Search here....' />
            <AiOutlineCloseCircle className='aioutine icon' />
            <button className='search_Button'>Search</button>
            </div>
        </div>
      </form>

      <div className='secDiv'>
          <label className='gender'>Sort by:</label>
          <select name='' className='selectBox'>
            <option value=''>Women</option>
            <option value=''>Men</option>
          </select>

          <select name='' className='selectBox'>
            <option value=''>Intenships</option>
            <option value=''>Mentorships</option>
            <option value=''>Jobs</option>
            <option value=''>Fellowship</option>
          </select>

          <span>Clear All</span>
      </div>


    </div>
  )
}

export default Searchbox
