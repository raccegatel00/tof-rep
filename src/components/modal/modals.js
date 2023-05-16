import './modal.css';

export const openModalPhone = function () {
    const modal = document.createElement('div');

    modal.className = 'modal open'

    const closeBg = document.createElement('div')
    closeBg.className = 'modal-bg modal-exit'
    closeBg.onclick = () => {
        modal.remove()
    }

    const body = document.createElement('div')
    body.className = 'modal-container'

    const text = document.createElement('h1')
    text.textContent = 'Связаться с нами'
    text.style = 'color: #E9B206; text-transform: uppercase; text-align: center;';

    const form = document.createElement('form')
    form.style = 'display: flex; flex-direction: column;'

    const nameLabel = document.createElement('label')
    nameLabel.textContent = 'Имя'
    nameLabel.for = 'name'

    const inputName = document.createElement('input')
    inputName.name = 'name'
    inputName.type = 'text'
    inputName.alt = 'Введите имя'
    inputName.style = 'border: none; border-bottom: solid #A3A3A3 1px;' +
        'font-size: 16px; padding: 4px; margin-top: 10px;';

    const phoneLabel = document.createElement('label')
    phoneLabel.textContent = 'Телефон'
    phoneLabel.for = 'phone'
    phoneLabel.style = 'margin-top: 48px;'

    const inputPhone = document.createElement('input')
    inputPhone.name = 'phone'
    inputPhone.type = 'tel'
    inputPhone.alt = 'Введите телефон'
    inputPhone.style = 'border: none; border-bottom: solid #A3A3A3 1px;' +
        'font-size: 16px; padding: 4px; margin-top: 10px;';

    const button = document.createElement('button')
    button.type = 'submit'
    button.textContent = 'Связаться с нами'
    const buttonStyleDefault = 'margin-top: 60px; margin-right: auto;' +
        'margin-left: auto; transition-duration: 0.5s;';
    const buttonStyleHover = 'background: rgba(242, 246, 249, 1); color: #C01870; cursor: pointer;' +
        'transition-duration: 0.5s;';
    button.style = buttonStyleDefault
    button.onmouseenter = () => {
        button.style = buttonStyleDefault + buttonStyleHover;
    }
    button.onmouseleave = () => {
        button.style = buttonStyleDefault;
    }

    form.appendChild(nameLabel)
    form.appendChild(inputName)
    form.appendChild(phoneLabel)
    form.appendChild(inputPhone)
    form.appendChild(button)

    body.appendChild(text)
    body.appendChild(form)
    modal.appendChild(closeBg)
    modal.appendChild(body)

    document.body.appendChild(modal)
}

export function openModalReason() {
    const modal = document.createElement('div');

    modal.className = 'modal open'

    const closeBg = document.createElement('div')
    closeBg.className = 'modal-bg modal-exit'
    closeBg.onclick = () => {
        modal.remove()
    }

    const body = document.createElement('div')
    body.className = 'modal-container'

    const text = document.createElement('h1')
    text.textContent = 'Получить консультацию'
    text.style = 'color: #E9B206; text-transform: uppercase; text-align: center;';

    const form = document.createElement('form')
    form.style = 'display: flex; flex-direction: column;'

    const nameLabel = document.createElement('label')
    nameLabel.textContent = 'Имя'
    nameLabel.for = 'name'

    const inputName = document.createElement('input')
    inputName.name = 'name'
    inputName.type = 'text'
    inputName.alt = 'Введите имя'
    inputName.style = 'border: none; border-bottom: solid #A3A3A3 1px;' +
        'font-size: 16px; padding: 4px; margin-top: 10px;';

    const phoneLabel = document.createElement('label')
    phoneLabel.textContent = 'Телефон'
    phoneLabel.for = 'phone'
    phoneLabel.style = 'margin-top: 48px;'

    const inputPhone = document.createElement('input')
    inputPhone.name = 'phone'
    inputPhone.type = 'tel'
    inputPhone.alt = 'Введите телефон'
    inputPhone.style = 'border: none; border-bottom: solid #A3A3A3 1px;' +
        'font-size: 16px; padding: 4px; margin-top: 10px;';

    const reasonLabel = document.createElement('label')
    reasonLabel.textContent = 'Тема разговора'
    reasonLabel.for = 'reason'
    reasonLabel.style = 'margin-top: 48px;'

    const inputReason = document.createElement('textarea')
    inputReason.name = 'reason'
    inputReason.alt = 'Введите тему разговора'
    inputReason.style = 'border: none; border-bottom: solid #A3A3A3 1px;' +
        'font-size: 16px; padding: 4px; margin-top: 10px;';

    const button = document.createElement('button')
    button.type = 'submit'
    button.textContent = 'Получить звонок'
    const buttonStyleDefault = 'margin-top: 60px; margin-right: auto;' +
        'margin-left: auto; transition-duration: 0.5s;';
    const buttonStyleHover = 'background: rgba(242, 246, 249, 1); color: #C01870; cursor: pointer;' +
        'transition-duration: 0.5s;';
    button.style = buttonStyleDefault
    button.onmouseenter = () => {
        button.style = buttonStyleDefault + buttonStyleHover;
    }
    button.onmouseleave = () => {
        button.style = buttonStyleDefault;
    }


    form.appendChild(nameLabel)
    form.appendChild(inputName)
    form.appendChild(phoneLabel)
    form.appendChild(inputPhone)
    form.appendChild(reasonLabel)
    form.appendChild(inputReason)
    form.appendChild(button)

    body.appendChild(text)
    body.appendChild(form)
    modal.appendChild(closeBg)
    modal.appendChild(body)

    document.body.appendChild(modal)
}

export function openModalImage(e) {
    console.log(e.target)
    let img = e.target.cloneNode()
    const modal = document.createElement('div');

    modal.className = 'modal open'

    const closeBg = document.createElement('div')
    closeBg.className = 'modal-bg modal-exit'
    closeBg.onclick = () => {
        modal.remove()
    }

    const body = document.createElement('div')
    body.className = 'modal-container'

    body.appendChild(img)

    modal.appendChild(closeBg)
    modal.appendChild(body)

    document.body.appendChild(modal)
}
