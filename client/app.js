const button = document.querySelector('button');
const input = document.querySelector('input');
const resultado = document.querySelector('h1');

const resource = 'users';

async function getUsers() {
    const id = Number(input.value);    const response = await fetch(`http://localhost:3000/${resource}`);

    if (!response.ok) {
        resultado.textContent = 'Erro ao buscar usuários.';
        return;
    }

    const data = await response.json();
    const user = data.find(user => user.id === id);

    if (!user) {
        resultado.textContent = `Usuário de Id ${id} não encontrado`;
        return;
    }

    resultado.textContent = `Usuário: ${user.name}, Idade: ${user.age}, Status: ${user.status}`;
}

resultado.textContent = 'Informe um ID e clique em Buscar';
button.addEventListener('click', getUsers);

