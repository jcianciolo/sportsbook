import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ImageListItem from '@mui/material/ImageListItem'
import ImageList from '@mui/material/ImageList'

const Game = ({game}) => {
    const gameInfo = game.bookmakers.map((info) => {
        const homeName = info.markets[0].outcomes[0].name
        const homePrice = info.markets[0].outcomes[0].price
        const awayName = info.markets[0].outcomes[1].name
        const awayPrice = info.markets[0].outcomes[1].price
    
        return (
            <ImageListItem key={info.key}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography>{info.title}</Typography>
                        <Typography>{homeName}: {homePrice}</Typography>
                        <Typography>{awayName}: {awayPrice}</Typography>
                    </CardContent>
                </Card>
            </ImageListItem>
        )
    })

    return (
            <ImageList sx={{ width: '100%', height: 450 }} cols={3}>
                {gameInfo}
            </ImageList>
    )
}


export default Game