import axios from 'axios';
import {popularGamesURL, upcomingGamesURL, newGamesURL, searchedURL} from '../api';

//Action creator
export const loadGames = () => async (dispatch) => {
    //dispatch Loading Games
    dispatch({
        type: "LOADING_GAMES",
    });

    //Fetch Axios
    const popularData = await axios.get(popularGamesURL(), {
        headers: {
            'Origin': 'https://api.rawg.io/api/',
        }
    });
    const newGamesData = await axios.get(newGamesURL(), {
        headers: {
            'Origin': 'https://api.rawg.io/api/',
        }
    });
    const upcomingGamesData = await axios.get(upcomingGamesURL(), {
        headers: {
            'Origin': 'https://api.rawg.io/api/',
        }
    });
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            newGames: newGamesData.data.results,
            upcoming: upcomingGamesData.data.results,
        },
    });
};

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchedData = await axios.get(searchedURL(game_name), {
        headers: {
            'Origin': 'https://api.rawg.io/api/',
        }
    });
    dispatch({
        type: "FETCH_SEARCH",
        payload: {
            searched: searchedData.data.results,
        },
    });
};
