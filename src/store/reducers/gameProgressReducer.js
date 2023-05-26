import { createSlice } from '@reduxjs/toolkit'
import {useState} from "react";

export const gameProgressReducer = createSlice({
    name: 'game_progress',
    initialState: {
        value: 0,
        level: 0
    },
    reducers: {
        increment: (state, action) => {
            state.value += action.payload
        },
        setFull: (state) => {
            state.value = 100;
        },
        resetValue: (state) => {
            state.value = 0;
        },
        nextLevel: (state) => {
            state.level++;
        }
    },
})

export const { increment, setFull, resetValue, nextLevel } = gameProgressReducer.actions

export default gameProgressReducer
