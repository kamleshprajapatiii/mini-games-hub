// Dice Roll Game

$(document).ready(function() {
    // Dice faces using unicode
    const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    
    // Game State
    let scores = [0, 0];
    let currentRoundScore = 0;
    let activePlayer = 0;
    let targetScore = 100;
    let isPlaying = true;

    // Initialize game
    function initGame() {
        scores = [0, 0];
        currentRoundScore = 0;
        activePlayer = 0;
        isPlaying = true;

        $('#player1Score').text('0');
        $('#player2Score').text('0');
        $('#currentRoundScore').text('0');
        $('#dice1, #dice2').text('🎲');
        $('#resultMessage').text('').removeClass('result-win result-lose');
        
        updatePlayerStatus();
        enableButtons();
    }

    // Roll dice
    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Update player status display
    function updatePlayerStatus() {
        if (activePlayer === 0) {
            $('#player1Status').text('Your Turn').removeClass('text-gray-500').addClass('text-yellow-400');
            $('#player2Status').text('Waiting').removeClass('text-yellow-400').addClass('text-gray-500');
        } else {
            $('#player1Status').text('Waiting').removeClass('text-yellow-400').addClass('text-gray-500');
            $('#player2Status').text('Your Turn').removeClass('text-gray-500').addClass('text-yellow-400');
        }
    }

    // Switch player
    function switchPlayer() {
        currentRoundScore = 0;
        $('#currentRoundScore').text('0');
        activePlayer = activePlayer === 0 ? 1 : 0;
        updatePlayerStatus();
    }

    // Disable/Enable buttons
    function disableButtons() {
        $('#rollBtn, #holdBtn').prop('disabled', true).addClass('opacity-50');
    }

    function enableButtons() {
        $('#rollBtn, #holdBtn').prop('disabled', false).removeClass('opacity-50');
    }

    // Check for winner
    function checkWinner() {
        if (scores[activePlayer] >= targetScore) {
            isPlaying = false;
            disableButtons();
            
            const winner = activePlayer === 0 ? 'Player 1' : 'Player 2';
            $('#resultMessage')
                .addClass('result-win')
                .html(`🎉 ${winner} Wins! 🎉`);
            
            return true;
        }
        return false;
    }

    // Roll button click
    $('#rollBtn').on('click', function() {
        if (!isPlaying) return;

        const dice1Value = rollDice();
        const dice2Value = rollDice();

        // Add rolling animation
        $('#dice1, #dice2').addClass('rolling');
        disableButtons();

        setTimeout(() => {
            $('#dice1').removeClass('rolling').text(diceFaces[dice1Value - 1]);
            $('#dice2').removeClass('rolling').text(diceFaces[dice2Value - 1]);
            enableButtons();

            // Check for 1
            if (dice1Value === 1 || dice2Value === 1) {
                // Lost round points
                $('#resultMessage')
                    .removeClass('result-win')
                    .addClass('result-lose')
                    .text('💀 Rolled a 1! Lost round points!');
                
                setTimeout(() => {
                    $('#resultMessage').text('').removeClass('result-lose');
                    switchPlayer();
                }, 1500);
            } else {
                // Add to round score
                currentRoundScore += dice1Value + dice2Value;
                $('#currentRoundScore').text(currentRoundScore);
                $('#resultMessage').text('').removeClass('result-win result-lose');
            }
        }, 500);
    });

    // Hold button click
    $('#holdBtn').on('click', function() {
        if (!isPlaying || currentRoundScore === 0) return;

        // Add round score to total
        scores[activePlayer] += currentRoundScore;
        
        if (activePlayer === 0) {
            $('#player1Score').text(scores[0]);
        } else {
            $('#player2Score').text(scores[1]);
        }

        // Check winner
        if (!checkWinner()) {
            switchPlayer();
        }
    });

    // Reset button
    $('#resetBtn').on('click', initGame);

    // Target score selection
    $('.target-btn').on('click', function() {
        $('.target-btn').removeClass('active ring-2 ring-white/50');
        $(this).addClass('active ring-2 ring-white/50');
        targetScore = parseInt($(this).data('target'));
        initGame();
    });

    // Start game
    initGame();
});
