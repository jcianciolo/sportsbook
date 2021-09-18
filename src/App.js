import { useState, useEffect } from 'react';
import './App.css';
import Game from './components/Game';
import Games from './components/Games';
import Typography from '@mui/material/Typography'
import '@fontsource/roboto'
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonAppBar from './components/ButtonAppBar';

function App() {
  const [odds, setOdds] = useState()
  const [loading, setLoading] = useState(false)
  // const API_KEY = REACT_APP_API_KEY
  // const url = `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${API_KEY}&regions=us&markets=h2h,spreads&oddsFormat=american`
  
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
      <ButtonAppBar position="sticky" />
        {loading && (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )}
        {odds && <Games odds={odds} />  }
    </div>
  );
}

export default App;
