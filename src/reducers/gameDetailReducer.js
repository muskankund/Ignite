const initialState = {
    gameDetail: {
        platforms: [],
    },
     screen: {
         results:[],
        },
    isLoading: true,
};

const DetailReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GAME_DETAILS":
            return {...state,
                gameDetail: action.payload.gameDetail,
                screen: action.payload.screen,
                isLoading: false,
            };
        case "LOADING_GAMES":
            return {...state, isLoading: true}
        default:
            return {...state};
    };
};

export default DetailReducer;