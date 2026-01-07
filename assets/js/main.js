// Mini Games Hub - Main JavaScript

$(document).ready(function() {
    console.log('Mini Games Hub Loaded!');
    
    // Add animation to game cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-bounce-in');
            }
        });
    }, observerOptions);

    // Observe all game cards
    document.querySelectorAll('.group').forEach(card => {
        observer.observe(card);
    });
});
