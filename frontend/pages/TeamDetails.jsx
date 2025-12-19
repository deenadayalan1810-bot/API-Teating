import React, { useEffect, useState } from 'react'
import {teamImages} from "../src/data/team"
import { useNavigate, useParams } from 'react-router-dom'
import { playerImages, DEFAULT} from '../src/data/player_Images'

const TeamDetails = () => {

  const [teams, setTeams] = useState(null)
  const {teamId} = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    fetch(`http://localhost:5000/ipl/team/${teamId}`)
    .then(res => res.json())
    .then(data => setTeams(data))
  }, [teamId]);

  const playersImagebg = {
    RCB : "bg-[#b60e11]",
    CSK : "bg-[#ffd200]",
    MI : "bg-[#083f88]",
    KKR : "bg-[#3a225d]",
    RR : "bg-[#e50693]"
  }

  const playersBorder = {
    RCB : "from-[#151517] via-[#191518] to-transparent",
    CSK : "from-[#39399E] via-[#1478E3] to-transparent",
    MI : "from-[#020621] via-[#001848] to-transparent",
    KKR : "from-[#f2bf26] via-[#f2bf2699] to-transparent",
    RR : "from-[#2e133a] via-[#421b56] to-transparent"
  }

  if(!teams){
    return <p className='text-center font-bold text-3xl'>Loading teams details...</p>
  }
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="w-[80%] mx-auto bg-white p-6 rounded-xl shadow-md">
        <img src={teamImages[teams.team]}
        alt={teams.team} 
        className='w-80 mx-auto mb-2'/>

        <h2 className='text-center mb-20 font-semibold text-3xl'>Titles Won: {teams.titleWon}</h2>
        <h2 className='text-2xl font-semibold text-center font-semibold mb-2'>Players</h2>
        
        <div className='grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3'>
          {teams.players.map((player, index)=>(
            <div key={index}
            className='flex flex-col items-center'
            >
              <div className='border-1 relative overflow-hidden rounded-lg shadow-md'>
              <img
              className={`${playersImagebg[teams.team] || "bg-gray-300"} sm:w-50 sm:h-35 md:w-70 md:h-60  rounded-sm object-contain mx-auto`}
              src={playerImages[teams.team]?.[index] || DEFAULT} alt={player} />
              <div className={`absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t ${playersBorder[teams.team] || "from-blue-600/100"}  to-transparent blur-sm`}>
              </div>
              <div className='absolute inset-x-0 bottom-2 flex justify-center z-10 '>
                <p className='text-white sm:text-lg text-center md:text-xl font-bold'>{player}</p>
              </div>
                
              
              
              </div>

            </div>
          ))}
        </div>
        

        <button
        onClick={()=>navigate("/")}
        className='bg-green-200 hover:bg-green-500 cursor-pointer text-center flex justify-center mx-auto my-5 p-2 rounded-xl text-xl'>Back to Home</button>
      </div>
      
    </div>
  )
}

export default TeamDetails
