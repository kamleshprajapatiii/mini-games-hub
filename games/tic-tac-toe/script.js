// Tic Tac Toe Game

$(document).ready(function() {
    // Game State
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;
    let gameMode = 'pvp'; // 'pvp' or 'pvc'
    let scores = { X: 0, O: 0, draw: 0 };

    // Winning combinations
    const winPatterns = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal
        [2, 4, 6]  // Anti-diagonal
    ];

    // Initialize game
    function initGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameActive = true;
        
        $('.cell').removeClass('taken x o winner').text('');
        $('#resultMessage').text('').removeClass('result-win result-lose result-draw');
        updateTurnDisplay();
    }

    // Update turn display
    function updateTurnDisplay() {
        const colorClass = currentPlayer === 'X' ? 'text-red-400' : 'text-blue-400';
        $('#turnDisplay').html(`Player <span class="${colorClass}">${currentPlayer}</span>'s Turn`);
    }

    // Check winner
    function checkWinner() {
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return { winner: board[a], pattern: pattern };
            }
        }
        return null;
    }

    // Check draw
    function checkDraw() {
        return board.every(cell => cell !== '');
    }

    // Computer move (simple AI)
    function computerMove() {
        if (!gameActive || currentPlayer !== 'O') return;

        // Try to win
        for (let pattern of winPatterns) {
            const move = findWinningMove(pattern, 'O');
            if (move !== -1) {
                makeMove(move);
                return;
            }
        }

        // Block player
        for (let pattern of winPatterns) {
            const move = findWinningMove(pattern, 'X');
            if (move !== -1) {
                makeMove(move);
                return;
            }
        }

        // Take center if available
        if (board[4] === '') {
            makeMove(4);
            return;
        }

        // Take corners
        const corners = [0, 2, 6, 8];
        const availableCorners = corners.filter(i => board[i] === '');
        if (availableCorners.length > 0) {
            makeMove(availableCorners[Math.floor(Math.random() * availableCorners.length)]);
            return;
        }

        // Take any available
        const available = board.map((cell, i) => cell === '' ? i : -1).filter(i => i !== -1);
        if (available.length > 0) {
            makeMove(available[Math.floor(Math.random() * available.length)]);
        }
    }

    // Find winning move
    function findWinningMove(pattern, player) {
        const [a, b, c] = pattern;
        const cells = [board[a], board[b], board[c]];
        const playerCount = cells.filter(c => c === player).length;
        const emptyCount = cells.filter(c => c === '').length;

        if (playerCount === 2 && emptyCount === 1) {
            if (board[a] === '') return a;
            if (board[b] === '') return b;
            if (board[c] === '') return c;
        }
        return -1;
    }

    // Make move
    function makeMove(index) {
        if (!gameActive || board[index] !== '') return;

        board[index] = currentPlayer;
        const $cell = $(`.cell[data-index="${index}"]`);
        $cell.addClass(`taken ${currentPlayer.toLowerCase()}`).text(currentPlayer);

        // Check for winner
        const result = checkWinner();
        if (result) {
            gameActive = false;
            scores[result.winner]++;
            updateScores();
            
            // Highlight winning cells
            result.pattern.forEach(i => {
                $(`.cell[data-index="${i}"]`).addClass('winner');
            });

            const colorClass = result.winner === 'X' ? 'result-win' : 'result-lose';
            $('#resultMessage').addClass(colorClass).text(`🎉 Player ${result.winner} Wins!`);
            return;
        }

        // Check for draw
        if (checkDraw()) {
            gameActive = false;
            scores.draw++;
            updateScores();
            $('#resultMessage').addClass('result-draw').text('🤝 It\'s a Draw!');
            return;
        }

        // Switch player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateTurnDisplay();

        // Computer move
        if (gameMode === 'pvc' && currentPlayer === 'O' && gameActive) {
            setTimeout(computerMove, 500);
        }
    }

    // Update scores
    function updateScores() {
        $('#xScore').text(scores.X);
        $('#oScore').text(scores.O);
        $('#drawScore').text(scores.draw);
    }

    // Cell click
    $('.cell').on('click', function() {
        if (gameMode === 'pvc' && currentPlayer === 'O') return;
        const index = parseInt($(this).data('index'));
        makeMove(index);
    });

    // Reset button
    $('#resetBtn').on('click', initGame);

    // Game mode selection
    $('.mode-btn').on('click', function() {
        $('.mode-btn').removeClass('active ring-2 ring-white/50');
        $(this).addClass('active ring-2 ring-white/50');
        gameMode = $(this).data('mode');
        initGame();
    });

    // Initialize
    initGame();
});
