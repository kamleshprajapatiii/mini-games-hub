// Memory Flip Game

$(document).ready(function() {
    // Emoji sets for cards
    const emojis = ['🎮', '🎯', '🎲', '🎨', '🎭', '🎪', '🎬', '🎤', '🚀', '🌟', '💎', '🔮', '🎸', '🎺', '🎻', '🥁'];
    
    // Game State
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let totalPairs = 8;
    let moves = 0;
    let timer = null;
    let seconds = 0;
    let isLocked = false;
    let gameStarted = false;
    let bestScore = localStorage.getItem('memoryFlipBest') || null;

    // Initialize game
    function initGame() {
        // Reset state
        cards = [];
        flippedCards = [];
        matchedPairs = 0;
        moves = 0;
        seconds = 0;
        isLocked = false;
        gameStarted = false;

        // Clear timer
        if (timer) {
            clearInterval(timer);
            timer = null;
        }

        // Update display
        $('#moves').text('0');
        $('#pairs').text(`0/${totalPairs}`);
        $('#timer').text('0:00');
        $('#resultArea').addClass('hidden');

        // Show best score
        if (bestScore) {
            $('#bestScore').text(bestScore);
        }

        // Generate cards
        generateCards();
    }

    // Generate cards
    function generateCards() {
        const $gameBoard = $('#gameBoard');
        $gameBoard.empty();

        // Select emojis for pairs
        const selectedEmojis = emojis.slice(0, totalPairs);
        const cardPairs = [...selectedEmojis, ...selectedEmojis];
        
        // Shuffle cards
        shuffleArray(cardPairs);

        // Create card elements
        cardPairs.forEach((emoji, index) => {
            const cardHtml = `
                <div class="memory-card" data-emoji="${emoji}" data-index="${index}">
                    <div class="memory-card-inner">
                        <div class="memory-card-front">
                            <i class="fas fa-question"></i>
                        </div>
                        <div class="memory-card-back">
                            ${emoji}
                        </div>
                    </div>
                </div>
            `;
            $gameBoard.append(cardHtml);
        });

        // Add click handlers
        $('.memory-card').on('click', handleCardClick);
    }

    // Shuffle array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Handle card click
    function handleCardClick() {
        if (isLocked) return;
        
        const $card = $(this);
        
        // Ignore if already flipped or matched
        if ($card.hasClass('flipped') || $card.hasClass('matched')) return;

        // Start timer on first click
        if (!gameStarted) {
            gameStarted = true;
            startTimer();
        }

        // Flip card
        $card.addClass('flipped');
        flippedCards.push($card);

        // Check for match when 2 cards are flipped
        if (flippedCards.length === 2) {
            moves++;
            $('#moves').text(moves);
            checkForMatch();
        }
    }

    // Check for match
    function checkForMatch() {
        isLocked = true;

        const [card1, card2] = flippedCards;
        const emoji1 = card1.data('emoji');
        const emoji2 = card2.data('emoji');

        if (emoji1 === emoji2) {
            // Match found
            card1.addClass('matched');
            card2.addClass('matched');
            matchedPairs++;
            $('#pairs').text(`${matchedPairs}/${totalPairs}`);
            
            flippedCards = [];
            isLocked = false;

            // Check for win
            if (matchedPairs === totalPairs) {
                gameWon();
            }
        } else {
            // No match - flip back after delay
            setTimeout(() => {
                card1.removeClass('flipped');
                card2.removeClass('flipped');
                flippedCards = [];
                isLocked = false;
            }, 1000);
        }
    }

    // Start timer
    function startTimer() {
        timer = setInterval(() => {
            seconds++;
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            $('#timer').text(`${mins}:${secs.toString().padStart(2, '0')}`);
        }, 1000);
    }

    // Game won
    function gameWon() {
        clearInterval(timer);

        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        const timeStr = `${mins}:${secs.toString().padStart(2, '0')}`;

        // Check for best score (based on moves)
        if (!bestScore || moves < parseInt(bestScore)) {
            bestScore = moves;
            localStorage.setItem('memoryFlipBest', bestScore);
            $('#bestScore').text(bestScore);
        }

        // Show result
        $('#resultText').text('🎉 Congratulations! You Won!');
        $('#resultStats').html(`Completed in <span class="text-cyan-400">${moves}</span> moves and <span class="text-yellow-400">${timeStr}</span>`);
        $('#resultArea').removeClass('hidden').addClass('animate-bounce-in');
    }

    // Reset button
    $('#resetBtn').on('click', function() {
        $('#resultArea').removeClass('animate-bounce-in');
        initGame();
    });

    // Start game
    initGame();
});
