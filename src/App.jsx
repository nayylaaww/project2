import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import GameInfo from './pages/GameInfo'
import Achievement from './pages/Achievment'
import Login from './pages/Login'
import Tutorial from './pages/Tutorial'
import LevelPage from './pages/LevelPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/gameinfo" element={<GameInfo />} />
      <Route path="/achievement" element={<Achievement />} />
      <Route path="/login" element={<Login />} />
      <Route path="/levelpage" element={<LevelPage/>} />
      <Route path="/tutorial" element={<Tutorial/>} />
    </Routes>
  )
}

export default App
