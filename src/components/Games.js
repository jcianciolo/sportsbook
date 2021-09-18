import Game from "./Game"
import Typography from '@mui/material/Typography'


const Games = ({odds}) => {
    const games = odds.map((game) => {
        return (
            <div>
                <Typography variant="h2">{game.commence_time}</Typography>
                <Game key={game.id} game={game} />
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
