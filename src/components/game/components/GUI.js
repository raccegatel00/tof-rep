import styled from "styled-components";
import FuelFillButton from "./buttons/FuelFillButton";
import ProgressBar from "./ProgressBar/ProgressBar";
import {useEffect, useState} from "react";



const GUIBlock = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    justify-content:flex-end;
    z-index: 1000;
    align-items: center;
    flex-direction: column;
`;

const BottomButtons = styled.div`
    height:200px;
    width:100%;
`;



export default function GUI(props) {
    const [currentProgress, setCurrentProgress] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [koef, setKoef] = useState(20);

    const handleFill = () => {
        let val = currentProgress + koef;

        if (val >= 100) {
            setCurrentProgress(100);
        } else {
            setCurrentProgress(val);
        }
    }

    useEffect(() => {
        if (currentProgress == 100) {
            if (props.handleFullFill)
            {

            }
        }
    }, [currentProgress])


    return (
        <GUIBlock>
            <ProgressBar progress={currentProgress}/>
            <BottomButtons>
                <FuelFillButton handle={handleFill}/>
            </BottomButtons>
        </GUIBlock>
    )
}
