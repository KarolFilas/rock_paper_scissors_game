const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: '',
    aiHand: '',
}

const hands = [...document.querySelectorAll('.select img')]

// pierwsza funkcja
function handSelection() {
    console.log(this);
    game.playerHand = this.dataset.option
    hands.forEach(hand => hand.style.boxShadow = '')
    this.style.boxShadow = '0 0 0 4px red'
}

function aiChoice() {
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option
    return aiHand
}

function checkResult(player, ai) {
    if (player === ai) {
        return 'draw'
    } else if ((player === 'papier' && ai === 'kamień') ||
        (player === 'kamień' && ai === 'nożyczki') ||
        (player === 'nożyczki' && ai === 'papier')) {
        return 'win'
    } else {
        return 'loss'
    }
}

// funkcja sterująca
function startGame() {
    if (!game.playerHand) {
        return alert('Wybierz dłoń')
    }
    game.aiHand = aiChoice()
    const gameResult = checkResult(game.playerHand, game.aiHand)
}

hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame)




















