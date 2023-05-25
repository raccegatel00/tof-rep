import styled from "styled-components";
import {useEffect, useState} from "react";

// export const PlaneBlock = styled.div`
//     position:absolute;
//     width:${props => props.width}px;
//     height:${props => props.height}px;
//     background-color:${props => props.color};
//     transform:
//         translate3d(${props => props.x}px,${props => props.y}px,${props => props.z}px)
//         rotateX(${props => props.angleX}deg)
//         rotateY(${props => props.angleY}deg)
//         rotateZ(${props => props.angleZ}deg);
//     transform-style:preserve-3d;
//     transition: 0.1s;
// `;

export default function PlaneBlock(props) {
    const [color, setColor] = useState('red');
    const [height, setHeight] = useState('10');
    const [width, setWidth] = useState('10');
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);
    const [angleX, setAngleX] = useState(0);
    const [angleY, setAngleY] = useState(0);
    const [angleZ, setAngleZ] = useState(0);

    useEffect(() => {
        if (props.color) setColor(props.color);

        if (props.height) setHeight(props.height);

        if (props.width) setWidth(props.width);

        if (props.x) setX(props.x);

        if (props.y) setY(props.y);

        if (props.z) setZ(props.z);

        if (props.angleX) setAngleX(props.angleX);

        if (props.angleY) setAngleY(props.angleY);

        if (props.angleZ) setAngleZ(props.angleZ);
    }, [props])

    return (
        <div style={
            {
                position:'absolute',
                width: width + 'px',
                height: height + 'px',
                backgroundColor: color,
                transform: `translate3d(` + x + `px, ` + y + `px, ` + z + `px) ` +
                    `rotateX(` + angleX + `deg) ` +
                    `rotateY(` + angleY + `deg) ` +
                    `rotateZ(` + angleZ + `deg) `,
                transformStyle:'preserve-3d',
            }
        }>
            {props.children}
        </div>
    )
}
