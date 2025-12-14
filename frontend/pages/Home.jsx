import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { teamImages } from "../src/data/team";

const Home = () => {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/ipl")
      .then(res => res.json())
      .then(data => setTeams(data));
  }, []);


  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">IPL Teams</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {teams.length === 0 ? (
          <p className="text-center">Loading teams...</p>
        ): (
          teams.map((team) => (
            
          <div
            key={team._id}
            onClick={() => navigate(`/ipl/${team._id}`)} // ✅ ID correct
            className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md
                       cursor-pointer hover:scale-105 transition"
          >
            <img
              src={teamImages[team.team]}   // ✅ team.team = "RCB"
              alt={team.team}
              className="w-32 h-32 object-contain"
            />

            <p className="text-center mt-4 font-semibold text-gray-700">
              {team.team}
            </p>
          </div>
        ))
        )}
        
      </div>
    </div>
  );
};

export default Home;
