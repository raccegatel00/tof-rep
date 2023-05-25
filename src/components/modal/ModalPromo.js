import styled from "styled-components";
import {FormModal, FormTitle} from "./Modal";

export const Promo = styled.h2`
    color: #ad0625; 
    text-transform: uppercase; 
    text-align: center;
`;

export function ModalPromo(props) {
    return (
        <div className={'modal open'}>
            <div className={'modal-bg modal-exit'} onClick={props.handleClose}></div>
            <div className={'modal-container'}>
                <FormTitle>
                    Поздравляем! Вы выиграли бесполезный набор текста!
                </FormTitle>
                <FormModal>
                    <Promo>#KOKOJOMBA</Promo>
                </FormModal>
            </div>
        </div>
    )
}
