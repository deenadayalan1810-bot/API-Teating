import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home.jsx';
import TeamDetails from '../pages/TeamDetails.jsx';

const App = () => {
  return (
    <div >
      <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route path="/ipl/:id" element={<TeamDetails></TeamDetails>}></Route>
      </Routes>
        
      
    </div>
  )
}

export default App
