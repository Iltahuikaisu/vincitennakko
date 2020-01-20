import axios from 'axios'
const url = '/play_game'

const playPoint = () => {
    return(
    axios.post(url,url).then((value)=>{
        console.log(value.data)
        return(value.data)
    })
    )
}

export default {playPoint}