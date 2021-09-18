import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'


const Game = ({game}) => {
    const gameInfo = game.bookmakers.map((info) => {
        return (
            <div key={info.key}>
                <Card>
                    <CardContent>
                        <Typography variant="h4">{info.title}</Typography>
                        <Typography variant="h5">{info.markets[0].outcomes[0].name}: {info.markets[0].outcomes[0].price}</Typography>
                        <Typography variant="h5">{info.markets[0].outcomes[1].name}: {info.markets[0].outcomes[1].price}</Typography>
                    </CardContent>
                </Card>
               
            </div>

        )
    })

    return (
            <div>
                {gameInfo}
            </div>
    )
}


export default Game