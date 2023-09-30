import React from 'react'
import { Link ,useLocation} from 'react-router-dom'

export default function Profile() {
const location = useLocation()
const data = location.state;
console.log(data,"prop data in profile page")
  return (
    <div>
        <div>click <Link to="/"><span className='hover:underline text-blue-500'>here</span></Link> to go to home page</div>
        <div>
          <ul>
            <li>{data.name}</li>
          </ul>
        </div>
    </div>
  )
}
