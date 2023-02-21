//import api
import {GameDetailsURL, GameScreenShotURL} from '../api';
//import axios
import axios from 'axios';


export const loadDetails = (id) => async (dispatch) => {
    //dispatch is loading
    dispatch({
        type: "LOADING_GAMES",
    })
    const detailsData = await axios.get(GameDetailsURL(id), {
        headers: {
            'Origin': 'https://api.rawg.io/api/',
        }
    });
    console.log('loco')
    console.log(detailsData.data)
    const screenshotData = await axios.get(GameScreenShotURL(id), {
        headers: {
            'Origin': 'https://api.rawg.io/api/',
          }
    });

    dispatch({
        type: 'GAME_DETAILS',
        payload: {
            gameDetail: detailsData.data,
            screen: screenshotData.data,
        },
    });
};
