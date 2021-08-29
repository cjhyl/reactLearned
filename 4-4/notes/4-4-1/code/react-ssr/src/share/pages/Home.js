import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return <div onClick={() => {console.log('hello')}}>
    Home Works 123
    <Link to="/list">jump to list</Link>
  </div>
}

export default Home;