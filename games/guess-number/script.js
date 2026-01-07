// Guess the Number Game

$(document).ready(function() {
    // Game State
    let secretNumber;
    let attempts;
    let maxNumber = 100;
    let bestScore = localStorage.getItem('guessNumberBest') || null;
    let previousGuesses = [];

    // Initialize game
    function initGame() {
        secretNumber = Math.floor(Math.random() * maxNumber) + 1;
        attempts = 0;
        previousGuesses = [];
        
        $('#attempts').text('0');
        $('#hint').text('');
        $('#guessInput').val('').prop('disabled', false).focus();
        $('#guessBtn').prop('disabled', false);
        $('#resultArea').addClass('hidden');
        $('#previousGuesses').empty();
        $('#message').html(`I'm thinking of a number between <span class="text-green-400 font-bold">1</span> and <span class="text-green-400 font-bold">${maxNumber}</span>`);
        
        if (bestScore) {
            $('#bestScore').text(bestScore);
        }
    }

    // Check guess
    function checkGuess() {
        const guess = parseInt($('#guessInput').val());
        
        // Validate input
        if (isNaN(guess) || guess < 1 || guess > maxNumber) {
            $('#hint').text(`Please enter a number between 1 and ${maxNumber}`).removeClass('text-cyan-400').addClass('text-red-400');
            $('#guessInput').addClass('animate-shake');
            setTimeout(() => $('#guessInput').removeClass('animate-shake'), 500);
            return;
        }

        // Check if already guessed
        if (previousGuesses.includes(guess)) {
            $('#hint').text('You already guessed that number!').removeClass('text-cyan-400').addClass('text-orange-400');
            return;
        }

        attempts++;
        previousGuesses.push(guess);
        $('#attempts').text(attempts);
        
        // Add to previous guesses display
        const guessClass = guess < secretNumber ? 'bg-blue-500/30 text-blue-400' : 
                          guess > secretNumber ? 'bg-red-500/30 text-red-400' : 
                          'bg-green-500/30 text-green-400';
        $('#previousGuesses').append(`<span class="px-3 py-1 rounded-full ${guessClass}">${guess}</span>`);
        
        $('#hint').removeClass('text-red-400 text-orange-400').addClass('text-cyan-400');
        
        if (guess === secretNumber) {
            // Winner!
            gameWon();
        } else if (guess < secretNumber) {
            $('#hint').text('📈 Too Low! Try higher...');
        } else {
            $('#hint').text('📉 Too High! Try lower...');
        }
        
        $('#guessInput').val('').focus();
    }

    // Game won
    function gameWon() {
        $('#guessInput').prop('disabled', true);
        $('#guessBtn').prop('disabled', true);
        
        // Update best score
        if (!bestScore || attempts < bestScore) {
            bestScore = attempts;
            localStorage.setItem('guessNumberBest', bestScore);
            $('#bestScore').text(bestScore);
        }
        
        // Show result
        $('#resultEmoji').text('🎉');
        $('#resultText').html(`Congratulations! You found <span class="text-green-400">${secretNumber}</span> in <span class="text-yellow-400">${attempts}</span> attempts!`);
        $('#resultArea').removeClass('hidden').addClass('animate-bounce-in');
        $('#hint').text('');
    }

    // Event Handlers
    $('#guessBtn').on('click', checkGuess);
    
    $('#guessInput').on('keypress', function(e) {
        if (e.which === 13) {
            checkGuess();
        }
    });

    $('#playAgainBtn').on('click', function() {
        $('#resultArea').removeClass('animate-bounce-in');
        initGame();
    });

    // Difficulty selection
    $('.difficulty-btn').on('click', function() {
        $('.difficulty-btn').removeClass('active ring-2 ring-white/50');
        $(this).addClass('active ring-2 ring-white/50');
        maxNumber = parseInt($(this).data('max'));
        initGame();
    });

    // Start game
    initGame();
});
