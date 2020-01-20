import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Points = (props) => {
    let variant = 'primary'
    let message = 'Try again.' 
    if (props.cookies.points) {
        if (props.cookies.points.playerPoints < 1) {
            variant = 'danger'
            message = ' You lost. Better luck next time' 
        } else if (props.cookies.points.playerPoints > 20 ){
            variant = 'success'
            message = 'You are winning!'
    }
    const currentPoints = props.cookies.points.playerPoints
    return (
        <Alert variant={variant}>
            {`You have ${currentPoints} points. ${message}`}
        </Alert>
    )

}
return(
<Alert>Waiting for points</Alert>
)
}

export default Points