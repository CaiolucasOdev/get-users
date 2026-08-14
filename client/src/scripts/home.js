const button = document.querySelector('button')
const title = document.querySelector('h1')

button.addEventListener('click', () =>{
    const value = confirm('Deseja realmente sair?');

    if(!value) return;

    button.style.display = 'none'
    title.textContent = 'Saindo.'
    

    setInterval(()=> {
        title.textContent = 'Saindo..'
    }, 3000)
    setInterval(()=> {
        title.textContent = 'Saindo...'
    }, 3000)
    
    setInterval(()=> {
        window.location.href = './login.html'
    }, 3000)


})