const base_url = "https://api.rawg.io/api/";
const api_key = "cf7ed84876514eaabbcdd4838d03292f";
//const cors_enable_url = "https://cors-anywhere.herokuapp.com/"

const getCurrentMonth = () => {
    const month = new Date().getMonth() +1;
    if (month < 10) {
        return `0${month}`;
    }else {
        return month;
    }
};

getCurrentMonth();

const getCurrrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`;
    }else {
        return day;
    }
}

getCurrrentDay();

//Current year/month/day
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear -1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear +1}-${currentMonth}-${currentDay}`;

 //url for most popular games.
 const popular_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
 const new_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-release&page_size=10`;
 const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const newGamesURL = () => `${base_url}${new_games};`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const GameDetailsURL = (game_id) => `${base_url}games/${game_id}?&key=${api_key}`;
export const GameScreenShotURL = (game_id) => `${base_url}games/${game_id}/screenshots?&key=${api_key}`;
export const searchedURL = (game_name) => `${base_url}games?&key=${api_key}&search=${game_name}&page_size=9`;
