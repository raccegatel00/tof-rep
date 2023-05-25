import styled from "styled-components";
import PlaneBlock from "./figures/PlaneBlock";

export default function World(props) {
    return (
        <PlaneBlock width={'10000'} height={'1000'} color={'grey'} x={'0'} y={'0'} z={'0'} angleX={'60'} angleY={'0'} angleZ={0}>
            {props.children}
        </PlaneBlock>
    )
}
