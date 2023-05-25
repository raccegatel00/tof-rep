import './Game.css';
import World from "./World";
import styled from "styled-components";
import Car from "./figures/Car/Car";
import GasStation from "./figures/GasStation/GasStation";
import OtherCar from "./figures/Car/OtherCar";
import asphalt from '../../img/game/asphalt-1-2.jpg'
import GUI from "./components/GUI";
import LogicCar, {STATUS_END, STATUS_GO_AWAY, STATUS_GO_GAS, STATUS_NONE} from "./figures/Car/LogicCar";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCarStatus} from "../../store/reducers/gameCarStatusReducer";
import {ModalPhone} from "../modal/ModalPhone";
import {ModalPromo} from "../modal/ModalPromo";
import {ModalGame} from "../modal/ModalGame";

const ContainerGameBlock = styled.div`
    position: absolute;
    width: 100%;
    height: 800px;
    perspective: 1500px;
    overflow:hidden;
`;

export default function Game() {
    const carStatus = useSelector((state) => state.game_car_status.value);
    const level = useSelector((state) => state.game_progress.level);

    const [isOpenModalPromo, setIsOpenModalPromo] = useState(false);
    const [isOpenModalGame, setIsOpenModalGame] = useState(true);

    const openModalPromo = () => {
        setIsOpenModalPromo(!isOpenModalPromo);
    };

    useEffect(() => {
        if (level == 3) {
            openModalPromo();
        }
    }, [level])

    return (
        <ContainerGameBlock>
            <GUI/>
            <World>
                <OtherCar/>
                { carStatus !== STATUS_END &&
                    (<LogicCar key={level} status={carStatus}/>)
                }
                <GasStation x={5200} y={3500}/>
            </World>
            {isOpenModalPromo && <ModalPromo handleClose={() => setIsOpenModalPromo(false)}></ModalPromo>}
            {isOpenModalGame && <ModalGame handleClose={() => setIsOpenModalGame(false)}></ModalGame>}
        </ContainerGameBlock>
    )
}
