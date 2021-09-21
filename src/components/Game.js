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
        // const homeSpread = (info.markets[1].outcomes[0].point) ? info.markets[1].outcomes[0].point : ''
        // const awaySpread = info.markets[1].outcomes[1].point
    
        return (
            <ImageListItem key={info.key}>
                <Card>
                    <CardContent>
                        <Typography fontSize='1.5rem' fontWeight='500'>{info.title}</Typography>
                        <Typography>{homeName}: {homePrice}</Typography>
                        <Typography>{awayName}: {awayPrice}</Typography>
                    </CardContent>
                </Card>
            </ImageListItem>
        )
    })

    return (
            <ImageList sx={{ width: '100%' }} cols={4}>
                {gameInfo}
            </ImageList>
    )
}
// { info.markets[1].outcomes[0].point && <Typography>{info.markets[1].outcomes[0].point}</Typography> }
// { info.markets[1].outcomes[1].point && <Typography>{info.markets[1].outcomes[1].point}</Typography> }

export default Game