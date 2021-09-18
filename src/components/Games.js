import Game from "./Game"
import Typography from '@mui/material/Typography'


const Games = ({odds}) => {
    const games = odds.map((game) => {
        return (
            <Game key={game.id} game={game} />
        )
    })
    

    return (
        <div>
            {games}
        </div>
    )
}

export default Games
