import Game from "./Game"
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Games = ({odds}) => {
    const games = odds.map((game) => {
        return (
            <div key={game.id}>
                <Typography variant="h3">{game.commence_time}</Typography>
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
