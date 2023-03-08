import React, { useEffect, useState } from 'react'
import {  MutatingDots  } from 'react-loader-spinner';
import ReactStars from 'react-stars';
import {getDocs} from "firebase/firestore"
import {moviesRef} from "../firebase/firebase"
import { Link } from 'react-router-dom';

const Cards = () => {

const [data , setData] = useState([]);
const [loading , setLoading] = useState(false)

  useEffect(() => {
    async function getData() {
       setLoading(true)
       const _data = await getDocs(moviesRef);
       _data.forEach((doc) => {
        setData((prv) => [...prv , {...(doc.data()) , id: doc.id}])
       })

       setLoading(false)
    }
    getData()
  },[])


  return (
    
    <div  className='flex flex-wrap justify-between px-3 mt-2 ' >
        {loading ? <div className='w-full flex justify-center items-center h-96' ><MutatingDots height={100}width={100} color="pink" secondaryColor='rgba(63, 113, 207, 0.946)'/></div> :
        data.map((e ,i) => {
            return (
      <Link to={`/detail/${e.id}`} ><div key={i} className='card font-medium shadow-lg p-2 cursor-pointer hover:-translate-y-3  mt-6 transition-all duration-500 rounded-md ' >
        <img className='h-60 md:h-72' src={e.image} alt="/"/>
        <h1>
          {e.title}
        </h1>
        <h1 className='flex items-center ' ><span className='text-pink-500 mr-1'>Rating: </span>
        <ReactStars
        size={20} half={true}
        value={e.rating/e.rated}
        edit={false}
        />
        </h1>
        <h1><span className='text-pink-500'>Year: </span>{e.year}</h1>
       </div>
       </Link> 
        )})
            }
    </div>
            
  )
}

export default Cards
