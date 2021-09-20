import Game from "./Game"
import Typography from '@mui/material/Typography'
import SportsFootballIcon from '@mui/icons-material/SportsFootball';

const Games = ({odds}) => {
    const games = odds.map((game) => {
        return (
            <div key={game.id}>
                <Typography variant="h3">
                    <SportsFootballIcon fontSize='large' /> {game.commence_time} <SportsFootballIcon fontSize='large' />
                </Typography>
                <Game game={game} />
            </div>

        )
    })
    

    return (
        <div>
            {games}
        </div>
    )
}

export default Games
