import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <div>click <Link to="/profile"><span className='hover:underline text-blue-500'>here</span></Link> to go to profile page</div>
    </div>
  )
}
