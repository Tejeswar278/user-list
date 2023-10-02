import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import "./Home.css"
import List from '../components/List';

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

  return (
    <div className='absolute w-full h-full'>
        <div className=' h-3/5 border-solid border-2 w-2/5 m-auto mt-28 object-scale-down rounded-3xl pb-2 shadow-2xl'>
          <div className='font-semibold text-xl text-center p-10 bg-slate-100 text-slate-600 rounded-t-3xl'>Select an account</div>
          <List data={data}/>
        </div>
    </div>
  )
}
