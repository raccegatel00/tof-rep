import { configureStore } from '@reduxjs/toolkit'
import {gameProgressReducer} from "./reducers/gameProgressReducer";
import {gameCarStatusReducer} from "./reducers/gameCarStatusReducer";

export default configureStore({
    reducer: {
        game_progress: gameProgressReducer.reducer,
        game_car_status: gameCarStatusReducer.reducer,
    },
})
