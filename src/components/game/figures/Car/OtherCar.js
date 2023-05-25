import './OtherCar.css';
import Car from "./Car";
import {useState} from "react";

export default function OtherCar() {
    return (
        <>
            <div id='other_car' style={
                {
                    animationDuration: '4s',
                    animationDelay: '6s'
                }
            }>
                <Car x={4500} y={5000}></Car>
            </div>

            <div id='other_car' style={
                {
                    animationDuration: '6s',
                    animationDelay: '4s'
                }
            }>
                <Car x={4300} y={5000}></Car>
            </div>
        </>
    )
}
