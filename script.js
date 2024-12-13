// Inicializa o contador
let count = 0;

// Seleciona o botão e o display do contador
const button = document.getElementById('clickButton');
const counterDisplay = document.getElementById('counterDisplay');

// Adiciona um evento de clique ao botão
button.addEventListener('click', () => {
    count++; // Incrementa o contador
    counterDisplay.textContent = `Cliques: ${count}`; // Atualiza o texto exibido
});
