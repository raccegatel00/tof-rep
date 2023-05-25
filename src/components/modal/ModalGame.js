import styled from "styled-components";
import {ButtonForm, FormModal, FormTitle} from "./Modal";

export const Promo = styled.h2`
    color: #ad0625; 
    text-transform: uppercase; 
    text-align: center;
`;

export function ModalGame(props) {
    return (
        <div className={'modal open'}>
            <div className={'modal-bg modal-exit'} onClick={props.handleClose}></div>
            <div className={'modal-container'}>
                <FormTitle>
                    Заправьте несколько машин и получите промокод.
                </FormTitle>
                <ButtonForm onClick={props.handleClose}>Поехали!</ButtonForm>
            </div>
        </div>
    )
}
