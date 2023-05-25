import './Game.css';
import World from "./World";
import styled from "styled-components";
import Car from "./figures/Car/Car";

const ContainerGameBlock = styled.div`
    position: absolute;
    width: 100%;
    height: 800px;
    perspective: 1000px;
    overflow:hidden;
`;

export default function Game() {
    return (
        <ContainerGameBlock>
            <World>
                <Car x={500} y={200}></Car>
            </World>
        </ContainerGameBlock>
    )
}
