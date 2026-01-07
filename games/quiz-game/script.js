// Quiz Game

$(document).ready(function() {
    // Questions Database - 100+ Questions
    const questions = [
        // ========== SCIENCE (20 Questions) ==========
        {
            category: "Science",
            question: "What is the chemical symbol for Gold?",
            options: ["Go", "Au", "Ag", "Gd"],
            correct: 1
        },
        {
            category: "Science",
            question: "What planet is known as the Red Planet?",
            options: ["Venus", "Jupiter", "Mars", "Saturn"],
            correct: 2
        },
        {
            category: "Science",
            question: "How many bones are in the human body?",
            options: ["186", "206", "226", "246"],
            correct: 1
        },
        {
            category: "Science",
            question: "What gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correct: 2
        },
        {
            category: "Science",
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Liver", "Brain", "Skin"],
            correct: 3
        },
        {
            category: "Science",
            question: "What is the speed of light?",
            options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
            correct: 0
        },
        {
            category: "Science",
            question: "Which element has the atomic number 1?",
            options: ["Helium", "Oxygen", "Carbon", "Hydrogen"],
            correct: 3
        },
        {
            category: "Science",
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            correct: 2
        },
        {
            category: "Science",
            question: "How many planets are in our solar system?",
            options: ["7", "8", "9", "10"],
            correct: 1
        },
        {
            category: "Science",
            question: "What is the chemical formula for water?",
            options: ["HO2", "H2O", "OH2", "H2O2"],
            correct: 1
        },
        {
            category: "Science",
            question: "Which planet has the most moons?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            correct: 1
        },
        {
            category: "Science",
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"],
            correct: 2
        },
        {
            category: "Science",
            question: "What is the most abundant gas in Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correct: 2
        },
        {
            category: "Science",
            question: "At what temperature does water boil?",
            options: ["90°C", "100°C", "110°C", "120°C"],
            correct: 1
        },
        {
            category: "Science",
            question: "What type of animal is a dolphin?",
            options: ["Fish", "Reptile", "Mammal", "Amphibian"],
            correct: 2
        },
        {
            category: "Science",
            question: "What is the closest star to Earth?",
            options: ["Proxima Centauri", "Alpha Centauri", "The Sun", "Sirius"],
            correct: 2
        },
        {
            category: "Science",
            question: "How many teeth does an adult human have?",
            options: ["28", "30", "32", "34"],
            correct: 2
        },
        {
            category: "Science",
            question: "What is the chemical symbol for Iron?",
            options: ["Ir", "In", "Fe", "I"],
            correct: 2
        },
        {
            category: "Science",
            question: "Which blood type is known as the universal donor?",
            options: ["A", "B", "AB", "O"],
            correct: 3
        },
        {
            category: "Science",
            question: "What is the largest planet in our solar system?",
            options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
            correct: 1
        },

        // ========== GEOGRAPHY (20 Questions) ==========
        {
            category: "Geography",
            question: "What is the capital of Japan?",
            options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
            correct: 2
        },
        {
            category: "Geography",
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            correct: 3
        },
        {
            category: "Geography",
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            correct: 1
        },
        {
            category: "Geography",
            question: "Which river is the longest in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            correct: 1
        },
        {
            category: "Geography",
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            correct: 2
        },
        {
            category: "Geography",
            question: "Which country has the largest population?",
            options: ["USA", "India", "China", "Indonesia"],
            correct: 2
        },
        {
            category: "Geography",
            question: "What is the largest desert in the world?",
            options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
            correct: 3
        },
        {
            category: "Geography",
            question: "Which mountain is the tallest in the world?",
            options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
            correct: 1
        },
        {
            category: "Geography",
            question: "What is the capital of Canada?",
            options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
            correct: 2
        },
        {
            category: "Geography",
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "South Korea", "Japan", "Thailand"],
            correct: 2
        },
        {
            category: "Geography",
            question: "What is the largest country by area?",
            options: ["Canada", "USA", "China", "Russia"],
            correct: 3
        },
        {
            category: "Geography",
            question: "Which continent is the Sahara Desert located in?",
            options: ["Asia", "Africa", "Australia", "South America"],
            correct: 1
        },
        {
            category: "Geography",
            question: "What is the capital of Brazil?",
            options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
            correct: 2
        },
        {
            category: "Geography",
            question: "Which ocean lies between Africa and Australia?",
            options: ["Pacific", "Atlantic", "Indian", "Arctic"],
            correct: 2
        },
        {
            category: "Geography",
            question: "What is the capital of Egypt?",
            options: ["Alexandria", "Cairo", "Luxor", "Giza"],
            correct: 1
        },
        {
            category: "Geography",
            question: "Which country has the most islands?",
            options: ["Indonesia", "Philippines", "Sweden", "Finland"],
            correct: 2
        },
        {
            category: "Geography",
            question: "What is the deepest ocean trench?",
            options: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Philippine Trench"],
            correct: 2
        },
        {
            category: "Geography",
            question: "Which European country is shaped like a boot?",
            options: ["Spain", "France", "Italy", "Greece"],
            correct: 2
        },
        {
            category: "Geography",
            question: "What is the capital of South Korea?",
            options: ["Busan", "Seoul", "Incheon", "Daegu"],
            correct: 1
        },
        {
            category: "Geography",
            question: "Which is the longest river in India?",
            options: ["Yamuna", "Godavari", "Ganga", "Brahmaputra"],
            correct: 2
        },

        // ========== HISTORY (20 Questions) ==========
        {
            category: "History",
            question: "In which year did World War II end?",
            options: ["1943", "1944", "1945", "1946"],
            correct: 2
        },
        {
            category: "History",
            question: "Who was the first person to walk on the Moon?",
            options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
            correct: 2
        },
        {
            category: "History",
            question: "In which year did India gain independence?",
            options: ["1945", "1946", "1947", "1948"],
            correct: 2
        },
        {
            category: "History",
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
            correct: 2
        },
        {
            category: "History",
            question: "Which empire built the Colosseum in Rome?",
            options: ["Greek", "Roman", "Byzantine", "Ottoman"],
            correct: 1
        },
        {
            category: "History",
            question: "Who painted the Mona Lisa?",
            options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Botticelli"],
            correct: 2
        },
        {
            category: "History",
            question: "In which year did the Titanic sink?",
            options: ["1910", "1911", "1912", "1913"],
            correct: 2
        },
        {
            category: "History",
            question: "Who discovered America in 1492?",
            options: ["Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus", "Amerigo Vespucci"],
            correct: 2
        },
        {
            category: "History",
            question: "Which war was fought between the North and South in the USA?",
            options: ["Revolutionary War", "Civil War", "World War I", "War of 1812"],
            correct: 1
        },
        {
            category: "History",
            question: "Who was known as the Iron Lady?",
            options: ["Queen Elizabeth II", "Angela Merkel", "Margaret Thatcher", "Indira Gandhi"],
            correct: 2
        },
        {
            category: "History",
            question: "The Great Wall of China was built to protect against which group?",
            options: ["Japanese", "Mongols", "Koreans", "Russians"],
            correct: 1
        },
        {
            category: "History",
            question: "Who was the first woman to fly solo across the Atlantic?",
            options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"],
            correct: 0
        },
        {
            category: "History",
            question: "In which year did the Berlin Wall fall?",
            options: ["1987", "1988", "1989", "1990"],
            correct: 2
        },
        {
            category: "History",
            question: "Who wrote the Declaration of Independence?",
            options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
            correct: 2
        },
        {
            category: "History",
            question: "Which ancient wonder was located in Alexandria?",
            options: ["Hanging Gardens", "Colossus", "Lighthouse", "Mausoleum"],
            correct: 2
        },
        {
            category: "History",
            question: "Who was the first Emperor of China?",
            options: ["Qin Shi Huang", "Han Wudi", "Tang Taizong", "Kublai Khan"],
            correct: 0
        },
        {
            category: "History",
            question: "The French Revolution began in which year?",
            options: ["1776", "1789", "1799", "1804"],
            correct: 1
        },
        {
            category: "History",
            question: "Who led India's independence movement with non-violence?",
            options: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Sardar Patel"],
            correct: 2
        },
        {
            category: "History",
            question: "Which civilization built Machu Picchu?",
            options: ["Maya", "Aztec", "Inca", "Olmec"],
            correct: 2
        },
        {
            category: "History",
            question: "Who was the last queen of Egypt?",
            options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Berenice"],
            correct: 1
        },

        // ========== TECHNOLOGY (15 Questions) ==========
        {
            category: "Technology",
            question: "Who is the founder of Microsoft?",
            options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
            correct: 1
        },
        {
            category: "Technology",
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
            correct: 0
        },
        {
            category: "Technology",
            question: "Who created Facebook?",
            options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Larry Page"],
            correct: 2
        },
        {
            category: "Technology",
            question: "What does CPU stand for?",
            options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Unit"],
            correct: 1
        },
        {
            category: "Technology",
            question: "Which company made the iPhone?",
            options: ["Samsung", "Google", "Apple", "Microsoft"],
            correct: 2
        },
        {
            category: "Technology",
            question: "What does WiFi stand for?",
            options: ["Wireless Fidelity", "Wired Fiber", "Wide Frequency", "Wireless Fiber"],
            correct: 0
        },
        {
            category: "Technology",
            question: "Who is the CEO of Tesla?",
            options: ["Jeff Bezos", "Tim Cook", "Elon Musk", "Sundar Pichai"],
            correct: 2
        },
        {
            category: "Technology",
            question: "What programming language is known for web development?",
            options: ["Python", "JavaScript", "C++", "Java"],
            correct: 1
        },
        {
            category: "Technology",
            question: "What does URL stand for?",
            options: ["Uniform Resource Locator", "Universal Reference Link", "Unified Resource Link", "Universal Resource Locator"],
            correct: 0
        },
        {
            category: "Technology",
            question: "Which company owns Android?",
            options: ["Apple", "Microsoft", "Google", "Samsung"],
            correct: 2
        },
        {
            category: "Technology",
            question: "What year was the first iPhone released?",
            options: ["2005", "2006", "2007", "2008"],
            correct: 2
        },
        {
            category: "Technology",
            question: "What does RAM stand for?",
            options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Random Available Memory"],
            correct: 0
        },
        {
            category: "Technology",
            question: "Who founded Amazon?",
            options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Larry Ellison"],
            correct: 1
        },
        {
            category: "Technology",
            question: "What does PDF stand for?",
            options: ["Portable Document Format", "Print Document File", "Personal Data File", "Public Document Format"],
            correct: 0
        },
        {
            category: "Technology",
            question: "Which company developed ChatGPT?",
            options: ["Google", "Microsoft", "OpenAI", "Meta"],
            correct: 2
        },

        // ========== SPORTS (15 Questions) ==========
        {
            category: "Sports",
            question: "Which country won the FIFA World Cup 2022?",
            options: ["France", "Brazil", "Argentina", "Germany"],
            correct: 2
        },
        {
            category: "Sports",
            question: "How many players are on a basketball team on the court?",
            options: ["4", "5", "6", "7"],
            correct: 1
        },
        {
            category: "Sports",
            question: "In which sport is the term 'home run' used?",
            options: ["Cricket", "Baseball", "Tennis", "Golf"],
            correct: 1
        },
        {
            category: "Sports",
            question: "Who has won the most Grand Slam titles in tennis (men)?",
            options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
            correct: 2
        },
        {
            category: "Sports",
            question: "Which country hosts the Tour de France?",
            options: ["Italy", "Spain", "France", "Belgium"],
            correct: 2
        },
        {
            category: "Sports",
            question: "How many players are on a cricket team?",
            options: ["9", "10", "11", "12"],
            correct: 2
        },
        {
            category: "Sports",
            question: "Which sport uses a shuttlecock?",
            options: ["Tennis", "Squash", "Badminton", "Table Tennis"],
            correct: 2
        },
        {
            category: "Sports",
            question: "Who is known as the 'God of Cricket'?",
            options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Kapil Dev"],
            correct: 2
        },
        {
            category: "Sports",
            question: "In which sport would you perform a slam dunk?",
            options: ["Volleyball", "Basketball", "Tennis", "Handball"],
            correct: 1
        },
        {
            category: "Sports",
            question: "Which country has won the most FIFA World Cups?",
            options: ["Germany", "Argentina", "Brazil", "Italy"],
            correct: 2
        },
        {
            category: "Sports",
            question: "What is the national sport of Japan?",
            options: ["Karate", "Judo", "Sumo Wrestling", "Kendo"],
            correct: 2
        },
        {
            category: "Sports",
            question: "Who holds the record for most goals in football?",
            options: ["Lionel Messi", "Cristiano Ronaldo", "Pelé", "Diego Maradona"],
            correct: 1
        },
        {
            category: "Sports",
            question: "How long is a marathon race?",
            options: ["26.2 miles", "24.2 miles", "28.2 miles", "30 miles"],
            correct: 0
        },
        {
            category: "Sports",
            question: "Which sport is played at Wimbledon?",
            options: ["Golf", "Cricket", "Tennis", "Rugby"],
            correct: 2
        },
        {
            category: "Sports",
            question: "In which year did Usain Bolt set the 100m world record?",
            options: ["2008", "2009", "2010", "2012"],
            correct: 1
        },

        // ========== ENTERTAINMENT (15 Questions) ==========
        {
            category: "Entertainment",
            question: "Which movie won the Oscar for Best Picture in 2020?",
            options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
            correct: 2
        },
        {
            category: "Entertainment",
            question: "Who played Iron Man in the Marvel movies?",
            options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
            correct: 2
        },
        {
            category: "Entertainment",
            question: "Which band sang 'Bohemian Rhapsody'?",
            options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"],
            correct: 2
        },
        {
            category: "Entertainment",
            question: "What is the highest-grossing film of all time?",
            options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars"],
            correct: 1
        },
        {
            category: "Entertainment",
            question: "Who is the 'King of Pop'?",
            options: ["Elvis Presley", "Prince", "Michael Jackson", "Freddie Mercury"],
            correct: 2
        },
        {
            category: "Entertainment",
            question: "Which TV series features dragons and the Iron Throne?",
            options: ["The Witcher", "Lord of the Rings", "Game of Thrones", "Vikings"],
            correct: 2
        },
        {
            category: "Entertainment",
            question: "Who directed the movie 'Titanic'?",
            options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Martin Scorsese"],
            correct: 1
        },
        {
            category: "Entertainment",
            question: "What is the name of Harry Potter's pet owl?",
            options: ["Errol", "Pigwidgeon", "Hedwig", "Scabbers"],
            correct: 2
        },
        {
            category: "Entertainment",
            question: "Which artist painted the Sistine Chapel ceiling?",
            options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
            correct: 2
        },
        {
            category: "Entertainment",
            question: "In 'Friends', what is the name of Ross's first wife?",
            options: ["Rachel", "Carol", "Emily", "Julie"],
            correct: 1
        },
        {
            category: "Entertainment",
            question: "Who wrote the Harry Potter book series?",
            options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "Stephen King"],
            correct: 2
        },
        {
            category: "Entertainment",
            question: "Which superhero is known as the 'Dark Knight'?",
            options: ["Superman", "Spider-Man", "Batman", "Iron Man"],
            correct: 2
        },
        {
            category: "Entertainment",
            question: "What is the name of the fictional country in Black Panther?",
            options: ["Genosha", "Wakanda", "Latveria", "Sokovia"],
            correct: 1
        },
        {
            category: "Entertainment",
            question: "Who sang 'Shape of You'?",
            options: ["Justin Bieber", "Ed Sheeran", "Bruno Mars", "The Weeknd"],
            correct: 1
        },
        {
            category: "Entertainment",
            question: "Which animated movie features a clownfish named Nemo?",
            options: ["Shark Tale", "Finding Nemo", "The Little Mermaid", "Moana"],
            correct: 1
        },

        // ========== INDIA (15 Questions) ==========
        {
            category: "India",
            question: "What is the capital of India?",
            options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
            correct: 2
        },
        {
            category: "India",
            question: "Who was the first Prime Minister of India?",
            options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Dr. Rajendra Prasad"],
            correct: 1
        },
        {
            category: "India",
            question: "Which is the largest state of India by area?",
            options: ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Uttar Pradesh"],
            correct: 2
        },
        {
            category: "India",
            question: "In which year was the Indian Constitution adopted?",
            options: ["1947", "1948", "1949", "1950"],
            correct: 3
        },
        {
            category: "India",
            question: "Who designed the Indian national flag?",
            options: ["Mahatma Gandhi", "Pingali Venkayya", "Jawaharlal Nehru", "Bhagat Singh"],
            correct: 1
        },
        {
            category: "India",
            question: "What is the national animal of India?",
            options: ["Lion", "Elephant", "Tiger", "Peacock"],
            correct: 2
        },
        {
            category: "India",
            question: "Which city is known as the 'Pink City'?",
            options: ["Jodhpur", "Udaipur", "Jaipur", "Jaisalmer"],
            correct: 2
        },
        {
            category: "India",
            question: "Who wrote the Indian national anthem?",
            options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Muhammad Iqbal"],
            correct: 1
        },
        {
            category: "India",
            question: "Which is the longest river in India?",
            options: ["Yamuna", "Godavari", "Ganga", "Brahmaputra"],
            correct: 2
        },
        {
            category: "India",
            question: "How many states are there in India?",
            options: ["26", "28", "29", "30"],
            correct: 1
        },
        {
            category: "India",
            question: "Which monument is known as the symbol of love?",
            options: ["Red Fort", "Qutub Minar", "Taj Mahal", "India Gate"],
            correct: 2
        },
        {
            category: "India",
            question: "Who is known as the 'Missile Man of India'?",
            options: ["Vikram Sarabhai", "Homi Bhabha", "APJ Abdul Kalam", "C.V. Raman"],
            correct: 2
        },
        {
            category: "India",
            question: "Which is the smallest state of India?",
            options: ["Sikkim", "Goa", "Tripura", "Mizoram"],
            correct: 1
        },
        {
            category: "India",
            question: "What is the national bird of India?",
            options: ["Sparrow", "Parrot", "Peacock", "Eagle"],
            correct: 2
        },
        {
            category: "India",
            question: "Which dance form originated in Tamil Nadu?",
            options: ["Kathak", "Bharatanatyam", "Odissi", "Kathakali"],
            correct: 1
        }
    ];

    // Game State
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timer = null;
    let timeLeft = 15;
    let highScore = localStorage.getItem('quizHighScore') || 0;
    let answered = false;

    // Initialize game
    function initGame() {
        // Shuffle and select 10 questions
        currentQuestions = shuffleArray([...questions]).slice(0, 10);
        currentQuestionIndex = 0;
        score = 0;
        answered = false;

        $('#score').text('0');
        $('#highScore').text(highScore);
        $('#questionArea').removeClass('hidden');
        $('#resultArea').addClass('hidden');
        $('#nextBtnContainer').addClass('hidden');

        showQuestion();
    }

    // Shuffle array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Show question
    function showQuestion() {
        answered = false;
        const question = currentQuestions[currentQuestionIndex];
        
        // Update progress
        const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
        $('#progressBar').css('width', progress + '%');
        $('#questionNum').text(`${currentQuestionIndex + 1}/${currentQuestions.length}`);

        // Show question
        $('#categoryBadge').text(question.category);
        $('#questionText').text(question.question);

        // Generate options
        const $optionsContainer = $('#optionsContainer');
        $optionsContainer.empty();

        question.options.forEach((option, index) => {
            const optionHtml = `
                <button class="option-btn w-full text-left px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white hover:bg-white/10 hover:border-violet-500/50 transition-all" data-index="${index}">
                    <span class="inline-block w-8 h-8 bg-violet-500/20 text-violet-400 rounded-full text-center leading-8 mr-3">${String.fromCharCode(65 + index)}</span>
                    ${option}
                </button>
            `;
            $optionsContainer.append(optionHtml);
        });

        // Add click handlers
        $('.option-btn').on('click', function() {
            if (answered) return;
            checkAnswer($(this), parseInt($(this).data('index')));
        });

        // Start timer
        startTimer();
    }

    // Start timer
    function startTimer() {
        timeLeft = 15;
        $('#timer').text(timeLeft).removeClass('text-red-400').addClass('text-yellow-400');

        if (timer) clearInterval(timer);

        timer = setInterval(() => {
            timeLeft--;
            $('#timer').text(timeLeft);

            if (timeLeft <= 5) {
                $('#timer').removeClass('text-yellow-400').addClass('text-red-400');
            }

            if (timeLeft <= 0) {
                clearInterval(timer);
                timeUp();
            }
        }, 1000);
    }

    // Time up
    function timeUp() {
        if (answered) return;
        answered = true;

        const question = currentQuestions[currentQuestionIndex];
        
        // Show correct answer
        $('.option-btn').addClass('disabled');
        $(`.option-btn[data-index="${question.correct}"]`).addClass('correct');

        showNextButton();
    }

    // Check answer
    function checkAnswer($button, selectedIndex) {
        answered = true;
        clearInterval(timer);

        const question = currentQuestions[currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;

        // Disable all options
        $('.option-btn').addClass('disabled').off('click');

        // Show result
        if (isCorrect) {
            score += 10 + timeLeft; // Bonus for remaining time
            $button.addClass('correct');
            $('#score').text(score);
        } else {
            $button.addClass('wrong');
            $(`.option-btn[data-index="${question.correct}"]`).addClass('correct');
        }

        showNextButton();
    }

    // Show next button
    function showNextButton() {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            $('#nextBtnContainer').removeClass('hidden');
        } else {
            // Game over
            setTimeout(showResults, 1000);
        }
    }

    // Show results
    function showResults() {
        $('#questionArea').addClass('hidden');
        $('#nextBtnContainer').addClass('hidden');
        $('#resultArea').removeClass('hidden');

        // Update high score
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('quizHighScore', highScore);
            $('#highScore').text(highScore);
        }

        // Show result based on score
        const percentage = (score / (currentQuestions.length * 25)) * 100; // Max score per question is ~25

        if (percentage >= 80) {
            $('#resultEmoji').text('🏆');
            $('#resultTitle').text('Excellent!');
        } else if (percentage >= 60) {
            $('#resultEmoji').text('🎉');
            $('#resultTitle').text('Great Job!');
        } else if (percentage >= 40) {
            $('#resultEmoji').text('👍');
            $('#resultTitle').text('Good Effort!');
        } else {
            $('#resultEmoji').text('📚');
            $('#resultTitle').text('Keep Learning!');
        }

        $('#resultText').text(`You scored ${score} points!`);
    }

    // Next question
    $('#nextBtn').on('click', function() {
        currentQuestionIndex++;
        $('#nextBtnContainer').addClass('hidden');
        showQuestion();
    });

    // Play again
    $('#playAgainBtn').on('click', initGame);

    // Initialize
    $('#highScore').text(highScore);
    initGame();
});
