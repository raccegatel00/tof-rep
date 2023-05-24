import styled from "styled-components";

const FormTitle = styled.h1`
    color: #E9B206; 
    text-transform: uppercase; 
    text-align: center;
`;

const FormModal = styled.form`
    display: flex; 
    flex-direction: column;
`;

const InputText = styled.input`
    border: none; 
    border-bottom: solid #A3A3A3 1px;
    font-size: 16px; 
    padding: 4px; 
    margin-top: 10px;
`;

const ButtonForm = styled.button`
    margin-top: 60px; 
    margin-right: auto;
    margin-left: auto; 
    transition-duration: 0.5s;
    
    &:hover {
        background: rgba(242, 246, 249, 1); 
        color: #C01870; 
        cursor: pointer;
        transition-duration: 0.5s;
    }
`;

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
