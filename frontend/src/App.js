import React, { useEffect, useState } from 'react';
import './App.css';
import Game from './modules/game'
import { useCookies } from 'react-cookie'
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'
import playerPoints from './modules/playerPoints'
import CookieWarning from './modules/cookiealert'
import Container from 'react-bootstrap/Container'
import Points from './modules/points'

const Notification = (props) => {
    return (
        <Alert variant={'primary'}>
            {props.notification}
        </Alert>
    )
}


function App() {
    const [cookies, setCookie] = useCookies()
    const [notification, setNotification] = useState('')
    const [clickPossible, setClickPossible] = useState(true)
    const [showWarning, setShowWarning] = useState(true)
    useEffect((props) => {
        setNotification(`Press button and win points.`)
        if (!cookies.points) {
            console.log('cookies set')
            playerPoints.setPoints({playerPoints:20, setCookie:setCookie})
            
        }
    }, []
    )
    
    return (
        <div>
            <Container>
                <h1>
                    Welcome to button game
                </h1>
            </Container>
            <div>
                <Container>
                    <Game setCookie={setCookie}
                        cookies={cookies}
                        setNotification={setNotification}
                        clickPossible={clickPossible}
                        setClickPossible={setClickPossible}
                        />
                </Container>
                <Container>
                    <Points cookies={cookies} 
                        setCookie={setCookie}/>
                </Container>
                <Container>
                <Notification notification={notification}
                    setNotification={setNotification} />
                </Container>
            
            </div>
            <Container style={{'padding':'15px'}}>
            <CookieWarning setShow={setShowWarning}
                show ={showWarning}/>
            </Container>
        </div>
    );
}

export default App;
