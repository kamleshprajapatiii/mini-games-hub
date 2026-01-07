// Whack a Mole Game

$(document).ready(function() {
    // Game State
    let score = 0;
    let timeLeft = 30;
    let gameTimer = null;
    let moleTimer = null;
    let isPlaying = false;
    let moleSpeed = 700; // milliseconds
    let highScore = localStorage.getItem('whackHighScore') || 0;
    let lastHole = -1;

    // Initialize
    $('#highScore').text(highScore);

    // Show random mole
    function showMole() {
        if (!isPlaying) return;

        // Hide all moles first
        $('.hole').removeClass('active');

        // Get random hole (avoid same hole twice)
        let randomHole;
        do {
            randomHole = Math.floor(Math.random() * 9);
        } while (randomHole === lastHole);
        lastHole = randomHole;

        // Show mole
        $(`.hole[data-hole="${randomHole}"]`).addClass('active');

        // Hide mole after random time
        const hideTime = Math.random() * (moleSpeed - 200) + 200;
        setTimeout(() => {
            $(`.hole[data-hole="${randomHole}"]`).removeClass('active');
        }, hideTime);
    }

    // Start game
    function startGame() {
        score = 0;
        timeLeft = 30;
        isPlaying = true;

        $('#score').text('0');
        $('#timer').text('30');
        $('#startScreen').addClass('hidden');
        $('#resultScreen').addClass('hidden');
        $('#gameBoard').removeClass('hidden');
        $('#difficultySection').addClass('hidden');

        // Start timers
        gameTimer = setInterval(() => {
            timeLeft--;
            $('#timer').text(timeLeft);

            if (timeLeft <= 10) {
                $('#timer').removeClass('text-yellow-400').addClass('text-red-400');
            }

            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);

        moleTimer = setInterval(showMole, moleSpeed);
        showMole();
    }

    // End game
    function endGame() {
        isPlaying = false;
        clearInterval(gameTimer);
        clearInterval(moleTimer);
        $('.hole').removeClass('active');

        // Update high score
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('whackHighScore', highScore);
            $('#highScore').text(highScore);
        }

        // Show result
        $('#gameBoard').addClass('hidden');
        $('#resultScreen').removeClass('hidden');
        $('#difficultySection').removeClass('hidden');

        if (score >= 30) {
            $('#resultEmoji').text('🏆');
            $('#resultTitle').text('Amazing!');
        } else if (score >= 20) {
            $('#resultEmoji').text('🎉');
            $('#resultTitle').text('Great Job!');
        } else if (score >= 10) {
            $('#resultEmoji').text('👍');
            $('#resultTitle').text('Good Effort!');
        } else {
            $('#resultEmoji').text('💪');
            $('#resultTitle').text('Keep Trying!');
        }

        $('#resultText').text(`You scored ${score} points!`);
        $('#timer').removeClass('text-red-400').addClass('text-yellow-400');
    }

    // Whack mole
    $('.hole').on('click', function() {
        if (!isPlaying) return;
        
        const $hole = $(this);
        if ($hole.hasClass('active') && !$hole.hasClass('whacked')) {
            // Hit!
            score++;
            $('#score').text(score);
            
            $hole.removeClass('active').addClass('whacked');
            
            // Remove whacked class after animation
            setTimeout(() => {
                $hole.removeClass('whacked');
            }, 300);
        }
    });

    // Start button
    $('#startBtn').on('click', startGame);

    // Play again button
    $('#playAgainBtn').on('click', function() {
        $('#resultScreen').addClass('hidden');
        $('#startScreen').removeClass('hidden');
    });

    // Difficulty selection
    $('.difficulty-btn').on('click', function() {
        $('.difficulty-btn').removeClass('active ring-2 ring-white/50');
        $(this).addClass('active ring-2 ring-white/50');
        moleSpeed = parseInt($(this).data('speed'));
    });
});
