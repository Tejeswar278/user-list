import React, { useState } from 'react'
import { Link ,useLocation} from 'react-router-dom'
import "./Profile.css"
import List from '../components/List';

export default function Profile() {
const location = useLocation()
const data = location.state;
const datalist = location.state1
console.log(data,"prop data in profile page")

const [togglestate, setToggleState] = useState(1)
const [heading, setHeading] = useState("Profile")
const [show, setshow] = useState(false)

const toggletab = (index) => {
  if(index === 1){
    setHeading("Profile")
  }else if(index === 2){
    setHeading("Posts")
  }else if(index === 3){
    setHeading("Gallery")
  }else{
    setHeading("ToDo")
  }
  setToggleState(index)
}

// let url = `https://maps.google.com/maps?q=${data.address.geo.lat},${data.address.geo.lng}&hl=es;&output=embed&zoom=9`;
let url = `https://maps.google.com/maps?q=17.385044,78.486671&hl=es;&output=embed&zoom=9`;

let location_ = {
    address: `${data.address.street},${data.address.suite},${data.address.city},${data.address.zipcode}`,
    lat: data.address.geo.lat,
    lng: data.address.geo.lng,
  }

  return (
    <div className='container'>
        {/* <div>click <Link to="/"><span className='hover:underline text-blue-500'>here</span></Link> to go to home page</div> */}

        <div className='tabs'>
          <div className={togglestate === 1?"active" : ""} onClick={() => toggletab(1)}>Profile</div>
          <div className={togglestate === 2?"active" : ""} onClick={() => toggletab(2)}>Post</div>
          <div className={togglestate === 3?"active" : ""} onClick={() => toggletab(3)}>Gallary</div>
          <div className={togglestate === 4?"active" : ""} onClick={() => toggletab(4)}>ToDo</div>
        </div>
        <div className='tab-content'>

          <header className='border-slate-400 h-16'>
            <div className='flex justify-between p-4'>
                <div className='font-semibold text-xl text-slate-600'>
                    {heading}
                </div>
                <div>
                    <div className='flex justify-end hover:cursor-pointer' onClick={() => setshow(!show)}>
                        <img className='w-8 h-8 rounded-full' src={data.profilepicture}/> 
                        <div className='whitespace-normal text-slate-500 text-lg ms-3 align-middle'><p >{data.name}</p></div>
                    </div>
                    <div className={show === true?"w-80 bg-white mt-3 rounded-xl shadow-2xl border-t absolute right-10 flex items-center flex-col" : "display"}>
                        <div className='mt-12 mb-3'>
                            <img className='w-24 rounded-full items-center' src={data.profilepicture}/>
                        </div>
                        <div className='text-xl'>
                            {data.name}
                        </div>
                        <div className='text-slate-400 text-md'>
                            {data.email}
                        </div>
                        <div className='mb-5'>List</div>
                        <div className='mb-5 text-white font-medium'>
                            <Link className='bg-red-600 rounded-full py-2 mb-5 px-6' to="/">Sign-out</Link>
                        </div>
                    </div>
                <div>
                </div>
              </div>
            </div>
          </header>

          <div className={togglestate === 1?"active" : ""}>
            <div className='flex'>
                <div className='w-2/3 items-center'>
                    <img className='w-48 rounded-full m-auto mt-10 mb-4' src={data.profilepicture} alt={data.name}/>
                    <div className='text-center text-2xl font-medium text-slate-600 mb-5'>{data.name}</div>
                    <div className='grid-table'>
                        <table className='m-auto'>
                            <tbody className='space-y-10'>
                                <tr>
                                    <td className='flex justify-end text-slate-400 pe-3 text-xl'>Username</td>
                                    <td className='text-slate-400 text-xl'>:</td>
                                    <td className='text-xl ps-3 font-medium text-slate-600'>{data.username}</td>
                                </tr>
                                <tr>
                                    <td className='flex justify-end text-slate-400 pe-3 text-xl'>e-mail</td>
                                    <td className='text-slate-400 text-xl'>:</td>
                                    <td className='text-xl ps-3 font-medium text-slate-600'>{data.email}</td>
                                </tr>
                                <tr>
                                    <td className='flex justify-end text-slate-400 pe-3 text-xl'>phone</td>
                                    <td className='text-slate-400 text-xl'>:</td>
                                    <td className='text-xl ps-3 font-medium text-slate-600'>{data.phone}</td>
                                </tr>
                                <tr>
                                    <td className='flex justify-end text-slate-400 pe-3 text-xl'>Website</td>
                                    <td className='text-slate-400 text-xl'>:</td>
                                    <td className='text-xl ps-3 font-medium text-slate-600'>{data.website}</td>
                                </tr>
                                <tr className='text-center border-t'><td colSpan={3} className=' text-slate-400 text-xl'>Company</td></tr>
                                <tr>
                                        <td className='flex justify-end text-slate-400 pe-3 text-xl'>Name</td>
                                        <td className='text-slate-400 text-xl'>:</td>
                                        <td className='text-xl ps-3 font-medium text-slate-600'>{data.company.name}</td>
                                    </tr>
                                    <tr>
                                        <td className='flex justify-end text-slate-400 pe-3 text-xl'>catchphrase</td>
                                        <td className='text-slate-400 text-xl'>:</td>
                                        <td className='text-xl ps-3 font-medium text-slate-600'>{data.company.catchPhrase}</td>
                                    </tr>
                                    <tr>
                                        <td className='flex justify-end text-slate-400 pe-3 text-xl'>bs</td>
                                        <td className='text-slate-400 text-xl'>:</td>
                                        <td className='text-xl ps-3 font-medium text-slate-600'>{data.company.bs}</td>
                                    </tr>
                            </tbody>                            
                        </table>
                    </div>
                </div>
                <div className='border-s border-slate-400 w-full mt-10 ps-10'>
                    <table>
                        <tbody>
                            <tr> <th className='text-slate-400 text-2xl font-normal mb-5'>Address :</th></tr>
                            <tr>
                                <td className='flex justify-end text-slate-400 pe-3 text-xl'>Street</td>
                                <td className='text-slate-400 text-xl'>:</td>
                                <td className='text-xl ps-3 font-medium text-slate-600'>{data.address.street}</td>
                            </tr>
                            <tr>
                                <td className='flex justify-end text-slate-400 pe-3 text-xl'>Suite</td>
                                <td className='text-slate-400 text-xl'>:</td>
                                <td className='text-xl ps-3 font-medium text-slate-600'>{data.address.suite}</td>
                            </tr>
                            <tr>
                                <td className='flex justify-end text-slate-400 pe-3 text-xl'>City</td>
                                <td className='text-slate-400 text-xl'>:</td>
                                <td className='text-xl ps-3 font-medium text-slate-600'>{data.address.city}</td>
                            </tr>
                            <tr>
                                <td className='flex justify-end text-slate-400 pe-3 text-xl'>Zipcode</td>
                                <td className='text-slate-400 text-xl'>:</td>
                                <td className='text-xl ps-3 font-medium text-slate-600'>{data.address.zipcode}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='w-full mt-5'>
                        <iframe className='w-full h-72 rounded-3xl' src={url}></iframe>
                            <div className='flex justify-end'>
                            <span className='text-slate-400 me-1'>Lat:</span>{location_.lat}<span className='text-slate-400 ms-3 me-1'>Long:</span>{location_.lng}
                            </div>
                    </div>
                </div>
            </div>
          </div>

          <div className={togglestate === 2?"cstabs active" : ""}>
            comming soon
          </div>

          <div className={togglestate === 3?"active cstabs" : ""}>
            comming soon
          </div>

          <div className={togglestate === 4?"active cstabs" : ""}>
            comming soon
          </div>
        </div>
    </div>
  )
}
