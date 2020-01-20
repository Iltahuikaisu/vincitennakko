import ServerInterface from './serverInterface'
import React from 'react';
import playerPoints from './playerPoints';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

const onPlayGameClick = (props) => {
    console.log('click not possible')
    props.setClickPossible(false)

    ServerInterface.playPoint().then((value) => {

        console.log('server responded')
        const newPoints = props.cookies.points.playerPoints - 1
        console.log(`new points ${newPoints}`)
        playerPoints.setPoints({playerPoints:newPoints, setCookie:props.setCookie})
        props.setClickPossible(true)
        console.log('clicks possible')
        const pointsAfterGame = newPoints + value.prizePoints
        console.log(value.prizePoints)
        if (value.prizePoints > 0) {
            playerPoints.setPoints({playerPoints:pointsAfterGame, setCookie:props.setCookie})
            props.setNotification(`You won ${value.prizePoints} points! 10 points until next prize!`)
        } else {
            props.setNotification(`You lost. ${value.distanceToNextPrize} points until next prize!`)
        }
    
})
}


const Game = (props) => {
    if (props.cookies.points) {
        if (props.cookies.points.playerPoints < 1) {
            return(
                <Container style={{'padding':'15px'}}>
                    <Button onClick={()=>playerPoints.setPoints({playerPoints:20, setCookie:props.setCookie})}>Try again</Button>
                </Container>
            )
        }
    }
    console.log('game rendered')
    return (
        <Container style={{'padding':'15px'}}>
        <Button variant='danger'  onClick={() => {
                onPlayGameClick(props)
            }}>Play the game</Button>
        </Container>
    )
}

export default Game