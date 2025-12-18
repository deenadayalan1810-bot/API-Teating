import { useEffect, useState } from 'react'
import {teamImages} from "../src/data/team"
import { useNavigate } from 'react-router-dom'

const home = () => {

  const [team, setTeam] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    fetch("http://localhost:5000/ipl")
    .then(res => res.json())
    .then(data => setTeam(data))
  }, [])
  return (
    <div className="m-h-screen bg-gray-200 px-6 py-10">
      <h1 className="text-center text-3xl font-bold mb-5">IPL Teams</h1>

      
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
      {team.length === 0 ? (
        <p className='text-center'>Loading teams...</p>
      ):(
        team.map((team) =>(
          <div onClick={()=>navigate(`/ipl/${team._id}`)} key={team._id} className='cursor-pointer text-center bg-white flex flex-col justify-center items-center'>
          <img src={teamImages[team.team]} alt={team.team} className='object-contain w-35 h-40'/>
          <p className='text-center text-xl font-bold'>{team.team}</p>
        </div>
        ))
      )}
      </div>
    </div>
  )
}

export default home
