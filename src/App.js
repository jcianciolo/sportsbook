import { useState, useEffect } from 'react';
import './App.css';
import Game from './components/Game';
import Games from './components/Games';
import Typography from '@mui/material/Typography'
import '@fontsource/roboto'

function App() {
  const [odds, setOdds] = useState()
  const [loading, setLoading] = useState(false)
  const API_KEY = '1b325cb1602f827b2757de63505eacd4'
  const url = `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${API_KEY}&regions=us&markets=h2h,spreads&oddsFormat=american`
  
  useEffect(() => {
    const fetchOdds = async () => {
      setLoading(true)
      const res = await fetch('http://localhost:8000/odds')
      const data = await res.json()

      setOdds(data)
      setLoading(false)
    }

    fetchOdds()

  }, [])

  return (
    <div className="App">
        {loading && <Typography>Loading...</Typography>}
        {odds && <Games odds={odds} />  }
    </div>
  );
}

export default App;
