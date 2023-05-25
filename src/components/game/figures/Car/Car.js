import './Car.css';
import Rectangle from "../Rectangle";
import {useEffect, useState} from "react";
import {getRandomColor, lightenDarkenColor} from "../../components/ColorChanger";


export default function Car(props) {
    const [downKeys, setDownKeys] = useState(new Set());
    const [x, setX] = useState(props.x);
    const [y, setY] = useState(0);
    const [bumpColor, setBumpColor] = useState('#638465');
    const [color, setColor] = useState('#f4e8cb');
    const [moldingColor, setMoldingColor] = useState('#3f323d');
    const [glassColor, setGlassColor] = useState('#377e84')
    const wheelColor = '#000000';
    const bumpDepth = 15;
    const mainDepth = 60;
    const glassDepth = 60;

    const height = 300;
    const width = 150;

    const z = 40;

    const handleUserKeyPress = event => {
        const { key, keyCode } = event;

        downKeys.add(keyCode)
        setDownKeys(downKeys);

        console.log(event);
        if(downKeys.has(87)){
            setY(y - 10);
        }

        if(downKeys.has(83)){
            setY(y + 10);
        }

        if(downKeys.has(68)){
            setX(x + 10);
        }

        if(downKeys.has(65)){
            setX(x - 10);
        }
    };

    const handleUserKeyUp = event => {
        const { key, keyCode } = event;

        downKeys.delete(keyCode);
        setDownKeys(downKeys);
    };

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        window.addEventListener("keyup", handleUserKeyUp);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
            window.removeEventListener("keydown", handleUserKeyUp);
        };
    }, [handleUserKeyPress, handleUserKeyUp]);

    useEffect(() => {
        if (props.x) setX(props.x);

        if (props.y) setY(props.y);

        if (props.color) setColor(props.color)
    }, [props])


    return (
        <div id='car'>
            {/*# bumpers*/}
            <Rectangle
                height={height}
                width={width}
                depth={bumpDepth}
                x={x}
                y={y}
                z={z}
                topColor={bumpColor}
                rightColor={bumpColor}
                frontColor={lightenDarkenColor(bumpColor, -30)}
                leftColor={lightenDarkenColor(bumpColor, -60)}
                bottomColor={bumpColor}
                backColor={bumpColor}
            />
            {/*# main construct*/}
            <Rectangle
                height={height-10}
                width={width-10}
                depth={mainDepth}
                x={x+5}
                y={y+5}
                z={z+bumpDepth}
                topColor={color}
                rightColor={color}
                frontColor={lightenDarkenColor(color, -30)}
                leftColor={lightenDarkenColor(color, -60)}
                bottomColor={color}
                backColor={color}
            />
            {/*# glass construct*/}
            <>
                {/*# top*/}
                <Rectangle
                    height={height-170}
                    width={width-20}
                    depth={10}
                    x={x+10}
                    y={y+120}
                    z={z+bumpDepth+mainDepth+glassDepth-10}
                    topColor={moldingColor}
                    rightColor={moldingColor}
                    frontColor={lightenDarkenColor(moldingColor, -30)}
                    leftColor={lightenDarkenColor(moldingColor, -60)}
                    bottomColor={moldingColor}
                    backColor={moldingColor}
                />
                {/*# back left*/}
                <Rectangle
                    height={10}
                    width={10}
                    depth={glassDepth-10}
                    x={x+10}
                    y={y+120}
                    z={z+bumpDepth+mainDepth}
                    topColor={moldingColor}
                    rightColor={moldingColor}
                    frontColor={lightenDarkenColor(moldingColor, -30)}
                    leftColor={lightenDarkenColor(moldingColor, -60)}
                    bottomColor={moldingColor}
                    backColor={moldingColor}
                />
                {/*# back right*/}
                <Rectangle
                    height={10}
                    width={10}
                    depth={glassDepth-10}
                    x={x+width-20}
                    y={y+120}
                    z={z+bumpDepth+mainDepth}
                    topColor={moldingColor}
                    rightColor={moldingColor}
                    frontColor={lightenDarkenColor(moldingColor, -30)}
                    leftColor={lightenDarkenColor(moldingColor, -60)}
                    bottomColor={moldingColor}
                    backColor={moldingColor}
                />
                {/*# front left*/}
                <Rectangle
                    height={10}
                    width={10}
                    depth={glassDepth}
                    x={x+10}
                    y={y+height-60}
                    z={z+bumpDepth+mainDepth}
                    topColor={moldingColor}
                    rightColor={moldingColor}
                    frontColor={lightenDarkenColor(moldingColor, -30)}
                    leftColor={lightenDarkenColor(moldingColor, -60)}
                    bottomColor={moldingColor}
                    backColor={moldingColor}
                />
                {/*# front right*/}
                <Rectangle
                    height={10}
                    width={10}
                    depth={glassDepth-10}
                    x={x+width-20}
                    y={y+height-60}
                    z={z+bumpDepth+mainDepth}
                    topColor={moldingColor}
                    rightColor={moldingColor}
                    frontColor={lightenDarkenColor(moldingColor, -30)}
                    leftColor={lightenDarkenColor(moldingColor, -60)}
                    bottomColor={moldingColor}
                    backColor={moldingColor}
                />
                {/*# glass*/}
                <Rectangle
                    height={height-180}
                    width={width-30}
                    depth={glassDepth-10}
                    x={x+15}
                    y={y+125}
                    z={z+bumpDepth+mainDepth}
                    topColor={glassColor}
                    rightColor={glassColor}
                    frontColor={lightenDarkenColor(glassColor, -30)}
                    leftColor={lightenDarkenColor(glassColor, -60)}
                    bottomColor={glassColor}
                    backColor={glassColor}
                />
            </>
            <div id='wheel'>
                <Rectangle
                    height={40}
                    width={20}
                    depth={40}
                    x={x+5}
                    y={y+20}
                    z={z-40}
                    color={wheelColor}
                />

                <Rectangle
                    height={40}
                    width={20}
                    depth={40}
                    x={x+5}
                    y={y+170}
                    z={z-40}
                    color={wheelColor}
                />

                <Rectangle
                    height={40}
                    width={20}
                    depth={40}
                    x={x+width-25}
                    y={y+20}
                    z={z-40}
                    color={wheelColor}
                />
                <Rectangle
                    height={40}
                    width={20}
                    depth={40}
                    x={x+width-25}
                    y={y+170}
                    z={z-40}
                    color={wheelColor}
                />
            </div>
        </div>
    )
}
