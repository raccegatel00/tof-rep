import './Game.css';
import World from "./World";
import styled from "styled-components";
import Car from "./figures/Car/Car";
import GasStation from "./figures/GasStation/GasStation";
import OtherCar from "./figures/Car/OtherCar";
import asphalt from '../../img/game/asphalt-1-2.jpg'
import GUI from "./components/GUI";
import LogicCar, {STATUS_GO_AWAY, STATUS_GO_GAS, STATUS_NONE} from "./figures/Car/LogicCar";
import {useEffect, useState} from "react";

const ContainerGameBlock = styled.div`
    position: absolute;
    width: 100%;
    height: 800px;
    perspective: 1500px;
    overflow:hidden;
`;

export default function Game() {
    const [carStatus, setCarStatus] = useState(STATUS_NONE);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCarStatus(STATUS_GO_GAS);
        }, 1000);
        return () => clearTimeout(timer);
    }, [])

    const handleFullFill = () => {
        setCarStatus(STATUS_GO_AWAY);
    }

    return (
        <ContainerGameBlock>
            <GUI/>
            <World>
                <OtherCar/>
                <LogicCar status={carStatus}/>
                <GasStation x={5200} y={3500}/>
            </World>

        </ContainerGameBlock>
    )
}
