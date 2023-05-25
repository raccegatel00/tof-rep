import './GasStation.css';
import Rectangle from "../Rectangle";
import {lightenDarkenColor} from "../../components/ColorChanger";
import {useEffect, useState} from "react";

export default function GasStation(props) {
    const tombColor = '#8e7679';
    const roofColor = '#a6a8a3';
    const gasStationColor = '#891c24';
    const gasStationSecondaryColor = '#FFFFFF';

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        if (props.x) setX(props.x);

        if (props.y) setY(props.y);
    }, [props])

    return (
        <>
            {/*# construction*/}

            <Rectangle
                height={100}
                width={100}
                depth={370}
                x={x}
                y={y}
                z={0}
                topColor={tombColor}
                rightColor={tombColor}
                frontColor={lightenDarkenColor(tombColor, -30)}
                leftColor={lightenDarkenColor(tombColor, -60)}
                bottomColor={tombColor}
                backColor={tombColor}
            />

            <Rectangle
                height={500}
                width={500}
                depth={50}
                x={x-200}
                y={y-100}
                z={370}
                topColor={roofColor}
                rightColor={roofColor}
                frontColor={lightenDarkenColor(roofColor, -30)}
                leftColor={lightenDarkenColor(roofColor, -60)}
                bottomColor={roofColor}
                backColor={roofColor}
            />

            {/*# gas stand*/}

            {/*# top*/}
            <Rectangle
                height={80}
                width={80}
                depth={50}
                x={x+10}
                y={y+130}
                z={80}
                topColor={gasStationSecondaryColor}
                rightColor={gasStationSecondaryColor}
                frontColor={lightenDarkenColor(gasStationSecondaryColor, -30)}
                leftColor={lightenDarkenColor(gasStationSecondaryColor, -60)}
                bottomColor={gasStationSecondaryColor}
                backColor={gasStationSecondaryColor}
            />

            {/*# screen*/}

            <Rectangle
                height={70}
                width={70}
                depth={40}
                x={x+9}
                y={y+135}
                z={85}
                color={'#000000'}
            />

            <Rectangle
                height={10}
                width={10}
                depth={40}
                x={x+30}
                y={y+190}
                z={120}
                color={'#848191'}
                leftColor={'#524a60'}
                frontColor={'#b5a7bc'}
            />

            {/*# bottom*/}
            <Rectangle
                height={80}
                width={80}
                depth={80}
                x={x+10}
                y={y+130}
                z={0}
                topColor={gasStationColor}
                rightColor={gasStationColor}
                frontColor={lightenDarkenColor(gasStationColor, -30)}
                leftColor={lightenDarkenColor(gasStationColor, -60)}
                bottomColor={gasStationColor}
                backColor={gasStationColor}
            />
            
            
        </>
    )
}
