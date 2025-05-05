import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import GameInfo from './pages/GameInfo'
import Achievement from './pages/Achievment'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Game from './pages/Game'
import Tutorial from './pages/Tutorial'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/gameinfo" element={<GameInfo />} />
      <Route path="/achievement" element={<Achievement />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/game" element={<Game/>} />
      <Route path="/tutorial" element={<Tutorial/>} />
    </Routes>
  )
}

export default App
