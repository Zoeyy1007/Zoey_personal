import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import CSProjects from "./pages/CSProjects";

function App() {
  return (
    <div className="bg-zinc-400 min-h-screen relative">
      <div className="relative z-50">
        <Navbar />
      </div>


      {/* Route paths */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/projects" element={<CSProjects/>} />
      </Routes>

      
    </div>
  )
}

export default App