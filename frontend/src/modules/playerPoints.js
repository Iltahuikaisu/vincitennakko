import cookieConfig from './cookieConfig'


const setPoints = (props) => {
    props.setCookie('points', { playerPoints: props.playerPoints }, cookieConfig)

}

export default {setPoints}