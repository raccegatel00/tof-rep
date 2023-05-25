import styled from "styled-components";
import {ButtonForm, FormModal, FormTitle, InputText} from "./Modal";

export function ModalPhone(props) {
    return (
        <div className={'modal open'}>
            <div className={'modal-bg modal-exit'} onClick={props.handleClose}></div>
            <div className={'modal-container'}>
                <FormTitle>
                    Связаться с нами
                </FormTitle>
                <FormModal>
                    <label htmlFor="name">Имя</label>
                    <InputText type="text" name={'name'} alt={'Введите имя'}/>
                    <label htmlFor="phone" style={{marginTop: '48px'}}>Телефон</label>
                    <InputText type="tel" name={'phone'} alt={'Введите телефон'}/>
                    <ButtonForm type={'submit'}>Связаться с нами</ButtonForm>
                </FormModal>
            </div>
        </div>
    )
}
