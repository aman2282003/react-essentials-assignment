import { useState } from 'react'
import PortfolioCard from './components/PortfolioCard'
import MovieDatabase from './components/MovieDatabase'
import './App.css'

function App() {
  const [activeProject, setActiveProject] = useState('portfolio')

  return (
    <>
      <nav className="project-nav">
        <button
          className={`nav-btn ${activeProject === 'portfolio' ? 'active' : ''}`}
          onClick={() => setActiveProject('portfolio')}
        >
          👤 Portfolio Card
        </button>
        <button
          className={`nav-btn ${activeProject === 'movies' ? 'active' : ''}`}
          onClick={() => setActiveProject('movies')}
        >
          🎬 Movie Database
        </button>
      </nav>

      <div className="projects-container">
        {activeProject === 'portfolio' && <PortfolioCard />}
        {activeProject === 'movies' && <MovieDatabase />}
      </div>
    </>
  )
}

export default App
