import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import LoginPage from './containers/login_page/LoginPage'
import Main from './containers/main_page/main'
import Podcasts from './containers/podcasts/podcasts'
import Matches from './containers/matches/matches'
import Transfers from './containers/transfers/transfers'
import './utils/axios'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/news" element={<Matches />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/podcasts" element={<Podcasts />} />
      </Routes>
    </Router>
  )
}

export default App
