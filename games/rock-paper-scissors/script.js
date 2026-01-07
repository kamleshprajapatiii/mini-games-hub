// Rock Paper Scissors Game

$(document).ready(function() {
    // Game State
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    // Choices
    const choices = {
        rock: '✊',
        paper: '✋',
        scissors: '✌️'
    };

    // Get computer choice
    function getComputerChoice() {
        const options = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        return options[randomIndex];
    }

    // Determine winner
    function getWinner(player, computer) {
        if (player === computer) {
            return 'draw';
        }
        
        if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'player';
        }
        
        return 'computer';
    }

    // Update display
    function updateDisplay(playerChoice, computerChoice, result) {
        // Show choices with animation
        $('#playerChoice').addClass('animate-bounce-in').text(choices[playerChoice]);
        $('#computerChoice').addClass('animate-bounce-in').text(choices[computerChoice]);

        // Remove animation class after animation ends
        setTimeout(() => {
            $('#playerChoice, #computerChoice').removeClass('animate-bounce-in');
        }, 500);

        // Show result message
        const $resultMessage = $('#resultMessage');
        $resultMessage.removeClass('result-win result-lose result-draw');

        if (result === 'player') {
            playerScore++;
            $resultMessage.addClass('result-win').text('🎉 You Win!');
        } else if (result === 'computer') {
            computerScore++;
            $resultMessage.addClass('result-lose').text('😢 You Lose!');
        } else {
            drawScore++;
            $resultMessage.addClass('result-draw').text('🤝 It\'s a Draw!');
        }

        // Update scores
        $('#playerScore').text(playerScore);
        $('#computerScore').text(computerScore);
        $('#drawScore').text(drawScore);
    }

    // Handle choice button click
    $('.choice-btn').on('click', function() {
        const playerChoice = $(this).data('choice');
        const computerChoice = getComputerChoice();
        const result = getWinner(playerChoice, computerChoice);
        
        updateDisplay(playerChoice, computerChoice, result);
    });

    // Reset game
    $('#resetBtn').on('click', function() {
        playerScore = 0;
        computerScore = 0;
        drawScore = 0;
        
        $('#playerScore').text('0');
        $('#computerScore').text('0');
        $('#drawScore').text('0');
        $('#playerChoice').text('❓');
        $('#computerChoice').text('❓');
        $('#resultMessage').text('').removeClass('result-win result-lose result-draw');
    });
});
