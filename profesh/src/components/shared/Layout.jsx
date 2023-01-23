import React, { useState } from 'react'
import "./Layout.css"

import SearchBar from "./SearchBar"
import Navigation from "./Navigation"

export default function Layout(props) {

  const [viewNav, setViewNav] = useState(false)

  const { searchQuery, setSearchQuery} = props
  
  return (
    <div className='layout-container'>

      <SearchBar viewNav={viewNav} setViewNav={setViewNav} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className='body-container'>
        {props.children}
      </div>

      <Navigation viewNav={viewNav} setViewNav={setViewNav} />

    </div>
  )
}