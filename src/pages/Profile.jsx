import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div>
        <div>click <Link to="/"><span className='hover:underline text-blue-500'>here</span></Link> to go to home page</div>
    </div>
  )
}
