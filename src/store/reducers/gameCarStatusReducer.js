import { createSlice } from '@reduxjs/toolkit'
import {STATUS_GO_AWAY, STATUS_GO_GAS, STATUS_NONE, STATUS_WAIT_GAS} from "../../components/game/figures/Car/LogicCar";

export const gameCarStatusReducer = createSlice({
    name: 'game_car_status',
    initialState: {
        value: 0,
    },
    reducers: {
        setCarStatus: (state, action) => {
            if (action.payload in [STATUS_NONE, STATUS_GO_AWAY, STATUS_WAIT_GAS, STATUS_GO_GAS]) {
                state.value = action.payload
            }
            state.value = action.payload
        }
    },
})

export const { setCarStatus } = gameCarStatusReducer.actions

export default gameCarStatusReducer.reducer
