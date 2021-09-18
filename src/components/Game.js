import Typography from '@mui/material/Typography'

const Game = ({game}) => {
    const gameInfo = game.bookmakers.map((info) => {
        return (
            <div key={info.key}>
                <Typography>{info.title}</Typography>
                <Typography>{info.markets[0].outcomes[0].name}: {info.markets[0].outcomes[0].price}</Typography>
                <Typography>{info.markets[0].outcomes[1].name}: {info.markets[0].outcomes[1].price}</Typography>
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