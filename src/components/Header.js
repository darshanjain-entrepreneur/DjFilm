import React , {useContext} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Appstate } from '../App';
const Header = () => {

const useAppstate = useContext(Appstate)

  return (
    <div className=' sticky z-10 top-0 bg-black header text-3xl flex justify-between items-center text-yellow-500 font-bold p-3 border-b-2 border-gray-500' >
       <Link  to={"/"} ><span>Dj<span className='text-white' >Film</span></span></Link>

         {useAppstate.login ?
      <Link to={"/addmovie"}><Button>
      <h1 className='text-lg  flex items-center cursor-pointer  text-blue-400 ' >
          <AddCircleIcon className='mr-1' />  Add Movie
       </h1>
      </Button></Link>
      :
      <Link to={"/login"}><Button className=''>
      <h1 className='text-lg p-1 font-sans hover:bg-red-400 flex items-center cursor-pointer rounded-sm font-bold bg-green-400 text-gray-900 ' >
           Login
       </h1>
      </Button></Link>

          }
    </div>
  )
}

export default Header