import React from 'react'
import { Link } from 'react-router-dom'
import "../pages/Home.css"

export default function List({data}) {
    console.log(data,"data inside link component")
  return (
    <div className='overflow-y-scroll h-auto max-h-96 overscroll-auto rounded-br-3xl scrollbar mr-2 ms-6'>
            {data.map((object,i) => {
              return (
                <div className='flex border-solid  border-slate-300 py-3 border-b-2 w-11/12' key={i} onClick={() => goToDetails()}>
                  <Link className='flex items-center' to="/profile" state={object} state1={data}>
                    <img className='w-8 h-8 rounded-full' src={object.profilepicture} key={i}/> 
                    <div className='whitespace-normal text-slate-500 text-lg nameborder ms-3 align-middle'><p >{object.name}</p></div>
                  </Link>
                </div>
              )
            })}
          </div>
  )
}
