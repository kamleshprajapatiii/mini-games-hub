// Coin Flip Game

$(document).ready(function() {
    // Game State
    let stats = {
        heads: 0,
        tails: 0,
        total: 0,
        headsStreak: 0,
        tailsStreak: 0,
        currentStreak: 0,
        lastResult: null,
        correctPredictions: 0,
        totalPredictions: 0
    };

    let prediction = null;
    let isFlipping = false;

    // Flip coin
    function flipCoin() {
        if (isFlipping) return;
        
        isFlipping = true;
        const $coin = $('#coin');
        
        // Add flipping animation
        $coin.addClass('flipping');
        $('#resultDisplay').text('Flipping...');
        $('#flipBtn').prop('disabled', true).addClass('opacity-50');

        // Determine result
        const result = Math.random() < 0.5 ? 'heads' : 'tails';

        setTimeout(() => {
            $coin.removeClass('flipping heads tails').addClass(result);
            
            // Update stats
            stats.total++;
            stats[result]++;

            // Update streaks
            if (result === stats.lastResult) {
                stats.currentStreak++;
            } else {
                stats.currentStreak = 1;
            }

            if (result === 'heads') {
                stats.headsStreak = Math.max(stats.headsStreak, stats.currentStreak);
            } else {
                stats.tailsStreak = Math.max(stats.tailsStreak, stats.currentStreak);
            }

            stats.lastResult = result;

            // Check prediction
            if (prediction) {
                stats.totalPredictions++;
                if (prediction === result) {
                    stats.correctPredictions++;
                    $('#resultDisplay').html(`<span class="text-green-400">✅ ${result.toUpperCase()}!</span> You guessed right!`);
                } else {
                    $('#resultDisplay').html(`<span class="text-red-400">${result.toUpperCase()}!</span> Wrong guess!`);
                }
            } else {
                $('#resultDisplay').html(`<span class="${result === 'heads' ? 'text-yellow-400' : 'text-gray-400'}">${result.toUpperCase()}!</span>`);
            }

            // Reset prediction
            prediction = null;
            $('.predict-btn').removeClass('ring-2 ring-white');

            updateDisplay();
            
            isFlipping = false;
            $('#flipBtn').prop('disabled', false).removeClass('opacity-50');
        }, 1000);
    }

    // Update display
    function updateDisplay() {
        $('#headsCount').text(stats.heads);
        $('#tailsCount').text(stats.tails);
        $('#totalFlips').text(stats.total);
        $('#headsStreak').text(stats.headsStreak);
        $('#tailsStreak').text(stats.tailsStreak);
        $('#currentStreak').text(stats.currentStreak);
        $('#correctPredictions').text(stats.correctPredictions);
        $('#totalPredictions').text(stats.totalPredictions);
    }

    // Reset stats
    function resetStats() {
        stats = {
            heads: 0,
            tails: 0,
            total: 0,
            headsStreak: 0,
            tailsStreak: 0,
            currentStreak: 0,
            lastResult: null,
            correctPredictions: 0,
            totalPredictions: 0
        };
        prediction = null;
        $('.predict-btn').removeClass('ring-2 ring-white');
        $('#resultDisplay').text('Click to flip!');
        $('#coin').removeClass('tails').addClass('heads');
        updateDisplay();
    }

    // Event handlers
    $('#flipBtn').on('click', flipCoin);
    $('#resetBtn').on('click', resetStats);

    // Prediction buttons
    $('.predict-btn').on('click', function() {
        if (isFlipping) return;
        $('.predict-btn').removeClass('ring-2 ring-white');
        $(this).addClass('ring-2 ring-white');
        prediction = $(this).data('predict');
    });

    // Initialize
    updateDisplay();
});
