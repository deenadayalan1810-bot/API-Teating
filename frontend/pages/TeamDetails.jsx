import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { teamImages } from "../src/data/team";

const TeamDetails = () => {

  const {id} = useParams();
  const [team, setTeam] = useState(null);

  useEffect(()=>{
    fetch(`http://localhost:5000/ipl/${id}`)
    .then(res => res.json())
    .then(data => setTeam(data) )
  }, [id])

  if(!team){
    return <h2 className='text-center mt-10'>Loading...</h2>
  }
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10"
    >
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <img 
           src={teamImages[team.team]}
           alt={team.team}
           className="w-40 mx-auto mb-6"
        />

        <h1 className="text-2xl font-bold text-center mb-2">{team.team}</h1>
      
        <p className="text-center mb-4">Title Won: {team.titleWon}</p>

        <h2 className="text-xl font-semibold mb-2">Players</h2>
        <ul className="list-disc pl-6">
          {team.players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>
      
    </div>
  )
}

export default TeamDetails
