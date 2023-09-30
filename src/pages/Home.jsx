import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Home() {
  let url = "https://panorbit.in/api/users.json"
  const [data,setData] = useState([]); 
  const fetchData = async () => {
    const d = await axios.get(url);
    setData(d.data["users"]);
  }
  useEffect(() => {
    fetchData()
  },[])
  const goToDetails = () => {
    this.props.router.push('/profile');
  };
  return (
    <div>
        <div>click <Link to="/profile"><span className='hover:underline text-blue-500'>here</span></Link> to go to profile page</div>
        <div>
          {data.map((object,i) => {
            return (
              <div className='flex' key={i} onClick={() => goToDetails()}>
                <Link to="/profile" state={object}>
                <img className='w-5 h-5 rounded-xl' src={object.profilepicture} key={i}/> 
                <p>{object.name}</p>
                </Link>
              </div>
            )
          })}
        </div>
    </div>
  )
}
