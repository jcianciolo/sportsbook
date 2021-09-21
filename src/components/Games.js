import Game from "./Game"
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import SportsFootballIcon from '@mui/icons-material/SportsFootball';

const Games = ({odds}) => {
    const games = odds.map((game) => {
        return (
            <div key={game.id}>
                <Card raised>
                    <CardContent>
                        <Typography variant="h3">
                            <SportsFootballIcon fontSize='large' />{game.home_team} vs. {game.away_team}<SportsFootballIcon fontSize='large' />
                        </Typography>
                        <Typography variant="h4">Kickoff: {game.commence_time}</Typography>
                    </CardContent>
                </Card>

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
