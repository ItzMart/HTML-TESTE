// Estado inicial
let count = 0;
let players = JSON.parse(localStorage.getItem("players")) || {}; // Carrega jogadores do localStorage
let activePlayers = 0;

// Referências aos elementos do DOM
const welcomeScreen = document.getElementById("welcomeScreen");
const mainApp = document.getElementById("mainApp");
const usernameInput = document.getElementById("usernameInput");
const startButton = document.getElementById("startButton");
const clickButton = document.getElementById("clickButton");
const counterDisplay = document.getElementById("counterDisplay");
const rankingList = document.getElementById("rankingList");
const activePlayersDisplay = document.getElementById("activePlayers");
const themeToggle = document.getElementById("themeToggle");

// Tema escuro/claro
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Entrada do nome do usuário
startButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username) {
        if (!(username in players)) {
            players[username] = 0; // Adiciona novo jogador com pontuação inicial
        }
        activePlayers++;
        savePlayers();
        updateActivePlayers();
        updateRanking();
        welcomeScreen.classList.add("hidden");
        mainApp.classList.remove("hidden");
    }
});

// Botão de clique
clickButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username in players) {
        players[username]++;
        count = players[username]; // Atualiza contador local
        counterDisplay.textContent = `Cliques: ${count}`;
        savePlayers();
        updateRanking();
    }
});

// Atualiza o número de jogadores ativos
function updateActivePlayers() {
    activePlayersDisplay.textContent = `Jogadores ativos: ${activePlayers}`;
}

// Atualiza o ranking na tela
function updateRanking() {
    rankingList.innerHTML = ""; // Limpa o ranking
    const sortedPlayers = Object.entries(players).sort((a, b) => b[1] - a[1]);
    for (const [username, score] of sortedPlayers) {
        const listItem = document.createElement("li");
        listItem.textContent = `${username}: ${score} cliques`;
        rankingList.appendChild(listItem);
    }
}

// Salva os jogadores e suas pontuações no localStorage
function savePlayers() {
    localStorage.setItem("players", JSON.stringify(players));
}

// Carrega os dados ao iniciar
window.addEventListener("load", () => {
    updateRanking();
    updateActivePlayers();
});
