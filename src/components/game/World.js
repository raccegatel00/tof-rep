import styled from "styled-components";
import PlaneBlock from "./figures/PlaneBlock";

export default function World(props) {
    return (
        <PlaneBlock width={'10000'} height={'10000'} color={'grey'} x={-4000} y={-4000} z={100} angleX={'60'} angleY={'0'} angleZ={0}>
            {props.children}
        </PlaneBlock>
    )
}
