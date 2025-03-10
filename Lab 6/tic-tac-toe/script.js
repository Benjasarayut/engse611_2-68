const tiles = Array.from(document.querySelectorAll('.tile'));
const currentPlayerSpan = document.querySelector('.current-player');
const modeSelect = document.getElementById('mode');
const resultDisplay = document.querySelector('.result');
const newGameButton = document.getElementById('newGame');
const resetButton = document.getElementById('reset');
const scoreXDisplay = document.getElementById('scoreX');
const scoreODisplay = document.getElementById('scoreO');

let board = Array(9).fill('');
let currentPlayer = 'X';
let isGameActive = true;
let scoreX = 0;
let scoreO = 0;

const winningPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

// ---- อัปเดตคะแนน ----
const updateScore = () => {
    scoreXDisplay.innerText = `Player X: ${scoreX}`;
    scoreODisplay.innerText = `Player O: ${scoreO}`;
};

updateScore();

// ---- รีเซ็ตเกม ----
const resetGame = () => {
    board.fill('');
    tiles.forEach(tile => {
        tile.innerText = '';
        tile.classList.remove('playerX', 'playerO');
    });
    isGameActive = true;
    resultDisplay.classList.add('hide');
    currentPlayer = 'X';
    currentPlayerSpan.innerText = currentPlayer;
};

// ---- ประกาศผล ----
const announceResult = (winner) => {
    if (winner === 'X') {
        resultDisplay.innerHTML = 'Player <span class="playerX">X</span> Wins!';
        scoreX++;
    } else if (winner === 'O') {
        resultDisplay.innerHTML = 'Player <span class="playerO">O</span> Wins!';
        scoreO++;
    } else {
        resultDisplay.innerText = 'It\'s a Tie!';
    }
    updateScore();
    resultDisplay.classList.remove('hide');
    isGameActive = false;
};

// ---- ตรวจสอบสถานะบอร์ด ----
const checkWinner = () => {
    for (const [a, b, c] of winningPatterns) {
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            announceResult(board[a]);
            return true;
        }
    }
    if (!board.includes('')) {
        announceResult('T');
        return true;
    }
    return false;
};

// ---- ฟังก์ชัน Minimax ----
const checkWinnerForMinimax = (newBoard) => {
    for (const [a, b, c] of winningPatterns) {
        if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
            return newBoard[a];
        }
    }
    if (!newBoard.includes('')) return 'T';
    return null;
};

const minimax = (newBoard, isMax) => {
    let winner = checkWinnerForMinimax(newBoard);
    if (winner === 'X') return -10;
    if (winner === 'O') return 10;
    if (winner === 'T') return 0;

    let bestScore = isMax ? -Infinity : Infinity;

    for (let i = 0; i < newBoard.length; i++) {
        if (newBoard[i] === '') {
            newBoard[i] = isMax ? 'O' : 'X';
            let score = minimax(newBoard, !isMax);
            newBoard[i] = '';
            bestScore = isMax
                ? Math.max(score, bestScore)
                : Math.min(score, bestScore);
        }
    }

    return bestScore;
};

// ---- เลือกการเดินของ AI ----
const getBestMove = () => {
    let bestScore = -Infinity;
    let move = -1;

    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            board[i] = 'O';
            let score = minimax(board, false);
            board[i] = '';
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }

    return move;
};

// ---- ฟังก์ชันให้ AI เล่น ----
const aiMove = () => {
    if (!isGameActive) return;

    let mode = modeSelect.value;
    let move;

    if (mode === 'easy') {
        let emptyTiles = board.map((v, i) => v === '' ? i : null).filter(v => v !== null);
        move = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    } else if (mode === 'medium') {
        move = getBestMove();
    } else if (mode === 'hard') {
        move = getBestMove();
    }

    if (move !== -1) {
        board[move] = 'O';
        tiles[move].innerText = 'O';
        tiles[move].classList.add('playerO');

        if (checkWinner()) return;

        switchPlayer();
    }
};

// ---- ฟังก์ชันกดเล่น ----
const handleClick = (index) => {
    if (!board[index] && isGameActive) {
        board[index] = currentPlayer;
        tiles[index].innerText = currentPlayer;
        tiles[index].classList.add(`player${currentPlayer}`);

        if (checkWinner()) return;

        switchPlayer();

        if (currentPlayer === 'O' && modeSelect.value !== '2P') {
            setTimeout(aiMove, 300);
        }
    }
};

// ---- เปลี่ยนผู้เล่น ----
const switchPlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    currentPlayerSpan.innerText = currentPlayer;
};

// ---- ตั้งค่า Event ----
tiles.forEach((tile, index) => {
    tile.addEventListener('click', () => handleClick(index));
});

newGameButton.addEventListener('click', resetGame);
resetButton.addEventListener('click', () => {
    scoreX = 0;
    scoreO = 0;
    updateScore();
    resetGame();
});
