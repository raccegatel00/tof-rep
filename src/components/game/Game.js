import './Game.css';
import World from "./World";
import styled from "styled-components";
import GasStation from "./figures/GasStation/GasStation";
import OtherCar from "./figures/Car/OtherCar";
import GUI from "./components/GUI";
import LogicCar, {STATUS_END, STATUS_GO_AWAY, STATUS_GO_GAS, STATUS_NONE} from "./figures/Car/LogicCar";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {ModalPromo} from "../modal/ModalPromo";
import {ModalGame} from "../modal/ModalGame";

const ContainerGameBlock = styled.div`
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
