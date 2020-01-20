const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.static('./build'))
const PORT = process.env.PORT || 3001
var number = 0

app.post('/play_game', (req, res) => {
    const nextNumber = number + 1
    const response = {
        prizePoints: 0,
        distanceToNextPrize: 0
    }
    const distanceToLastGrandPrize = nextNumber % 500
    const distanceToLastMediumPrize = nextNumber % 100
    const distanceToLastSmallPrize = nextNumber % 10
    if (distanceToLastGrandPrize === 0) {
        response.prizePoints = 250
        response.distanceToNextPrize = 10
    } else if (distanceToLastMediumPrize === 0) {
        response.prizePoints = 40
        response.distanceToNextPrize = 10
    } else if (distanceToLastSmallPrize === 0) {
        response.prizePoints = 5
        response.distanceToNextPrize = 10
    } else {
        response.prizePoints = 0
        response.distanceToNextPrize = 10 - distanceToLastSmallPrize
    }
    number = nextNumber
    res.status(201).json(response).catch((error)=> {
        console.error(`Socket destroyd? ${error.details}`)
        
        res.status(500).json(error)
    })
}
)

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.json({ error: err })
}

app.use(errorHandler)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


