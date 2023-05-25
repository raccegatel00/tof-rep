import {useCallback, useEffect, useState} from "react";
import PlaneBlock from "./PlaneBlock";

export default function Rectangle(props) {
    const [leftColor, setLeftColor] = useState('red');
    const [rightColor, setRightColor] = useState('red');
    const [topColor, setTopColor] = useState('red');
    const [bottomColor, setBottomColor] = useState('red');
    const [frontColor, setFrontColor] = useState('red');
    const [backColor, setBackColor] = useState('red');
    const [height, setHeight] = useState(10);
    const [width, setWidth] = useState(10);
    const [depth, setDepth] = useState(10);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);
    const [angleX, setAngleX] = useState(0);
    const [angleY, setAngleY] = useState(0);
    const [angleZ, setAngleZ] = useState(0);

    useEffect(() => {
        if (props.color) {
            setLeftColor(props.color);
            setRightColor(props.color);
            setTopColor(props.color);
            setBottomColor(props.color);
            setFrontColor(props.color);
            setBackColor(props.color);
        }

        if (props.leftColor) setLeftColor(props.leftColor);
        if (props.rightColor) setRightColor(props.rightColor);
        if (props.topColor) setTopColor(props.topColor);
        if (props.bottomColor) setBottomColor(props.bottomColor);
        if (props.backColor) setBackColor(props.backColor);
        if (props.frontColor) setFrontColor(props.frontColor);

        if (props.height) setHeight(props.height);
        if (props.width) setWidth(props.width);
        if (props.depth) setDepth(props.depth)

        if (props.x) setX(props.x);
        if (props.y) setY(props.y);
        if (props.z) setZ(props.z);

        if (props.angleX) {
            setAngleX(props.angleX)
        }
        if (props.angleY) setAngleY(props.angleY)
        if (props.angleZ) setAngleZ(props.angleZ)
    }, [props])


    return (
        <>
            {/*# bottom*/}
            <PlaneBlock width={width} height={height} color={bottomColor} x={x} y={y} z={z} angleX={angleX} angleY={angleY} angleZ={angleZ}/>
            {/*# back*/}
            <PlaneBlock width={width} height={depth} color={backColor} x={x} y={y-(depth/2)} z={z+(depth/2)} angleX={angleX+90} angleY={angleY} angleZ={angleZ}/>
            {/*# front*/}
            <PlaneBlock width={width} height={depth} color={frontColor} x={x} y={y-(depth/2)+height} z={z+(depth/2)} angleX={angleX+90} angleY={angleY} angleZ={angleZ}/>
            {/*# left*/}
            <PlaneBlock width={depth} height={height} color={leftColor} x={x-(depth/2)} y={y} z={z+(depth/2)} angleX={angleX} angleY={angleY+90} angleZ={angleZ}/>
            {/*# right*/}
            <PlaneBlock width={depth} height={height} color={rightColor} x={x-(depth/2)+width} y={y} z={z+(depth/2)} angleX={angleX} angleY={angleY+90} angleZ={angleZ}/>
            {/*# top*/}
            <PlaneBlock width={width} height={height} color={topColor} x={x} y={y} z={z+depth} angleX={angleX} angleY={angleY} angleZ={angleZ}/>
        </>
    )
}
