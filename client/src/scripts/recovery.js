const email = document.querySelector('input[type="email"]')
const newPassword = document.querySelector('#new-password')
const confirmNewPassword = document.querySelector('#confirm-new-password')
const checkbox = document.querySelector('input[type="checkbox"]')
const labelPassword = document.querySelector('#placa')
const button = document.querySelector('button')

button.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const newPasswordValue = newPassword.value;
    const confirmNewPasswordValue = confirmNewPassword.value;

    if (!emailValue || !newPasswordValue || !confirmNewPassword)
        return alert('Preencha todos os campos');

    if (
        emailValue !== sessionStorage.getItem('email'))
        return alert('E-mail não cadastrado!')

    if (newPasswordValue !== confirmNewPassword)
        return alert('As senhas não coincidem, tente novamente!')

    sessionStorage.setItem('password', newPasswordValue);
    alert('Senha Atualizada com sucesso!')

    window.location.href = './login.html';
});

checkbox.addEventListener('change', () => {
    const AttributeValue = newPassword.getAttribute('type')
            if (AttributeValue === 'password') {
            newPassword.setAttribute('type', 'text');
            confirmNewPassword.setAttribute('type', 'text')
            labelPassword.textContent = 'Ocultar senha'
            return
        }


    newPassword.setAttribute('type', 'password');
    confirmNewPassword.setAttribute('type', 'password')
    labelPassword.textContent = 'Mostrar senha'

})
