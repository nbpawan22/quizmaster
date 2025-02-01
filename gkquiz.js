
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },

    {
        question: "What is the capital of Japan?",
        options: ["Seoul","Tokyo", "Beijing",  "Bangkok"],
        answer: "Tokyo"
    },
    {
        question: "What is the capital of Canada?",
        options: [ "Toronto", "Vancouver","Ottawa", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Brisbane","Canberra"],
        answer: "Canberra"
    },
    {
        question: "What is the capital of Brazil?",
        options: [ "Rio de Janeiro", "Brasília","São Paulo", "Buenos Aires"],
        answer: "Brasília"
    },
    {
        question: "What is the capital of Germany?",
        options: [ "Munich","Berlin", "Hamburg", "Frankfurt"],
        answer: "Berlin"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Rome", "Milan", "Venice", "Florence"],
        answer: "Rome"
    },
    {
        question: "What is the capital of Spain?",
        options: [ "Barcelona", "Valencia", "Seville","Madrid"],
        answer: "Madrid"
    },
    {
        question: "What is the capital of Russia?",
        options: [ "Saint Petersburg", "Moscow","Novosibirsk", "Yekaterinburg"],
        answer: "Moscow"
    },
    {
        question: "What is the capital of China?",
        options: [ "Shanghai", "Beijing","Guangzhou", "Shenzhen"],
        answer: "Beijing"
    },
    {
        question: "What is the capital of India?",
        options: [ "Mumbai", "Bangalore", "Kolkata","New Delhi"],
        answer: "New Delhi"
    },
    {
        question: "What is the capital of South Korea?",
        options: [ "Busan","Seoul", "Incheon", "Daegu"],
        answer: "Seoul"
    },
    {
        question: "What is the capital of Mexico?",
        options: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
        answer: "Mexico City"
    },
    {
        question: "What is the capital of Argentina?",
        options: [ "Córdoba","Buenos Aires", "Rosario", "Mendoza"],
        answer: "Buenos Aires"
    },
    {
        question: "What is the capital of Egypt?",
        options: [ "Alexandria","Cairo", "Giza", "Luxor"],
        answer: "Cairo"
    },
    {
        question: "What is the capital of South Africa?",
        options: [ "Cape Town","Pretoria", "Johannesburg", "Durban"],
        answer: "Pretoria"
    },
    {
        question: "What is the capital of Turkey?",
        options: [ "Istanbul", "Izmir", "Bursa","Ankara"],
        answer: "Ankara"
    },
    {
        question: "What is the capital of Thailand?",
        options: [ "Chiang Mai","Bangkok", "Phuket", "Pattaya"],
        answer: "Bangkok"
    },
    {
        question: "What is the capital of Vietnam?",
        options: [ "Ho Chi Minh City", "Da Nang","Hanoi", "Hai Phong"],
        answer: "Hanoi"
    },
    {
        question: "What is the capital of Indonesia?",
        options: [ "Surabaya", "Bandung", "Medan","Jakarta"],
        answer: "Jakarta"
    },
    {
        question: "What is the capital of Malaysia?",
        options: ["Kuala Lumpur", "George Town", "Johor Bahru", "Ipoh"],
        answer: "Kuala Lumpur"
    },
    {
        question: "What is the capital of the United Kingdom?",
        options: [ "Manchester", "Birmingham","London", "Liverpool"],
        answer: "London"
    },
    {
        question: "What is the capital of the United States?",
        options: ["New York","Washington, D.C.",  "Los Angeles", "Chicago"],
        answer: "Washington, D.C."
    },
    {
        question: "What is the capital of France?",
        options: ["Lyon","Paris",  "Marseille", "Toulouse"],
        answer: "Paris"
    },
    {
        question: "What is the capital of Greece?",
        options: [ "Thessaloniki", "Patras","Athens", "Heraklion"],
        answer: "Athens"
    },
    {
        question: "What is the capital of Portugal?",
        options: ["Porto", "Braga", "Coimbra","Lisbon"],
        answer: "Lisbon"
    },
    {
        question: "What is the capital of Sweden?",
        options: [ "Gothenburg","Stockholm", "Malmö", "Uppsala"],
        answer: "Stockholm"
    },
    {
        question: "What is the capital of Norway?",
        options: [ "Bergen", "Trondheim", "Stavanger","Oslo"],
        answer: "Oslo"
    },
    {
        question: "What is the capital of Finland?",
        options: ["Espoo","Helsinki",  "Tampere", "Vantaa"],
        answer: "Helsinki"
    },
    {
        question: "What is the capital of Denmark?",
        options: [ "Aarhus","Copenhagen", "Odense", "Aalborg"],
        answer: "Copenhagen"
    },
    {
        question: "What is the capital of Switzerland?",
        options: ["Zurich","Bern",  "Geneva", "Basel"],
        answer: "Bern"
    },
    {
        question: "What is the capital of Austria?",
        options: [ "Linz","Vienna", "Salzburg","Graz",],
        answer: "Vienna"
    },
    {
        question: "What is the capital of Belgium?",
        options: [ "Antwerp", "Ghent","Brussels", "Bruges"],
        answer: "Brussels"
    },
    {
        question: "What is the capital of the Netherlands?",
        options: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"],
        answer: "Amsterdam"
    },
    {
        question: "What is the capital of Poland?",
        options: [ "Kraków","Warsaw", "Łódź", "Wrocław"],
        answer: "Warsaw"
    },
    {
        question: "What is the capital of Czech Republic?",
        options: [ "Brno", "Ostrava", "Plzeň","Prague"],
        answer: "Prague"
    },
    {
        question: "What is the capital of Hungary?",
        options: ["Budapest", "Debrecen", "Szeged", "Miskolc"],
        answer: "Budapest"
    },
    {
        question: "What is the capital of Romania?",
        options: [ "Cluj-Napoca", "Timișoara","Bucharest", "Iași"],
        answer: "Bucharest"
    },
    {
        question: "What is the capital of Ukraine?",
        options: [ "Kharkiv","Kyiv", "Odessa", "Dnipro"],
        answer: "Kyiv"
    },
    {
        question: "What is the capital of Saudi Arabia?",
        options: [ "Jeddah", "Riyadh","Mecca", "Medina"],
        answer: "Riyadh"
    },
    {
        question: "What is the capital of Iran?",
        options: ["Tehran", "Mashhad", "Isfahan", "Karaj"],
        answer: "Tehran"
    },
    {
        question: "What is the capital of Iraq?",
        options: [ "Basra", "Baghdad","Mosul", "Erbil"],
        answer: "Baghdad"
    },
    {
        question: "What is the capital of Israel?",
        options: ["Jerusalem", "Tel Aviv", "Haifa", "Beersheba"],
        answer: "Jerusalem"
    },
    {
        question: "What is the capital of Pakistan?",
        options: [ "Karachi", "Lahore", "Faisalabad","Islamabad"],
        answer: "Islamabad"
    },
    {
        question: "What is the capital of Bangladesh?",
        options: ["Dhaka", "Chittagong", "Khulna", "Rajshahi"],
        answer: "Dhaka"
    },
    {
        question: "What is the capital of Nepal?",
        options: ["Kathmandu", "Pokhara", "Lalitpur", "Bharatpur"],
        answer: "Kathmandu"
    },
    {
        question: "What is the capital of Sri Lanka?",
        options: [ "Kandy","Colombo", "Galle", "Jaffna"],
        answer: "Colombo"
    },
    {
        question: "What is the capital of Philippines?",
        options: ["Manila", "Quezon City", "Cebu City", "Davao City"],
        answer: "Manila"
    },
    {
        question: "What is the capital of Singapore?",
        options: [ "Jurong", "Woodlands", "Tampines","Singapore",],
        answer: "Singapore"
    },
    {
        question: "What is the capital of New Zealand?",
        options: [ "Auckland", "Christchurch", "Hamilton","Wellington"],
        answer: "Wellington"
    },
    {
        question: "What is the capital of Ireland?",
        options: ["Dublin", "Cork", "Galway", "Limerick"],
        answer: "Dublin"
    },
    {
        question: "What is the capital of Scotland?",
        options: [ "Glasgow", "Aberdeen", "Dundee","Edinburgh"],
        answer: "Edinburgh"
    },
    {
        question: "What is the capital of Wales?",
        options: ["Cardiff", "Swansea", "Newport", "Bangor"],
        answer: "Cardiff"
    },
    {
        question: "What is the capital of Northern Ireland?",
        options: [ "Derry", "Lisburn","Belfast", "Newry"],
        answer: "Belfast"
    },
    {
        question: "What is the capital of Iceland?",
        options: ["Reykjavik", "Kópavogur", "Hafnarfjörður", "Akureyri"],
        answer: "Reykjavik"
    },
    {
        question: "What is the capital of Greenland?",
        options: [ "Sisimiut", "Ilulissat", "Qaqortoq","Nuuk",],
        answer: "Nuuk"
    },
    {
        question: "What is the capital of Cuba?",
        options: ["Havana", "Santiago de Cuba", "Camagüey", "Holguín"],
        answer: "Havana"
    },
    {
        question: "What is the capital of Jamaica?",
        options: ["Kingston", "Montego Bay", "Spanish Town", "Portmore"],
        answer: "Kingston"
    },
    {
        question: "What is the capital of Haiti?",
        options: ["Cap-Haïtien", "Gonaïves","Port-au-Prince",  "Saint-Marc"],
        answer: "Port-au-Prince"
    },
    {
        question: "What is the capital of Dominican Republic?",
        options: ["Santiago", "La Romana","Santo Domingo",  "San Pedro de Macorís"],
        answer: "Santo Domingo"
    },
    {
        question: "What is the capital of Puerto Rico?",
        options: ["San Juan", "Bayamón", "Carolina", "Ponce"],
        answer: "San Juan"
    },
    {
        question: "What is the capital of Costa Rica?",
        options: ["San José", "Limón", "Alajuela", "Heredia"],
        answer: "San José"
    },
    {
        question: "What is the capital of Panama?",
        options: [ "San Miguelito", "Tocumen","Panama City", "David"],
        answer: "Panama City"
    },
    {
        question: "What is the capital of Colombia?",
        options: ["Medellín", "Cali", "Barranquilla","Bogotá"],
        answer: "Bogotá"
    },
    {
        question: "What is the capital of Venezuela?",
        options: [ "Maracaibo", "Valencia","Caracas", "Barquisimeto"],
        answer: "Caracas"
    },
    {
        question: "What is the capital of Ecuador?",
        options: [ "Guayaquil","Quito", "Cuenca", "Santo Domingo"],
        answer: "Quito"
    },
    {
        question: "What is the capital of Peru?",
        options: [ "Arequipa","Lima", "Trujillo", "Chiclayo"],
        answer: "Lima"
    },
    {
        question: "What is the capital of Bolivia?",
        options: ["La Paz", "Sucre", "Santa Cruz", "Cochabamba"],
        answer: "La Paz"
    },
    {
        question: "What is the capital of Chile?",
        options: [ "Valparaíso", "Concepción","Santiago", "La Serena"],
        answer: "Santiago"
    },
    {
        question: "What is the capital of Paraguay?",
        options: [ "Ciudad del Este", "San Lorenzo", "Luque","None"],
        answer: "None"
    },
    {
        question: "What is the capital of Uruguay?",
        options: [ "Salto", "Paysandú", "Las Piedras","Montevideo",],
        answer: "Montevideo"
    },
    {
        question: "What is the capital of Zimbabwe?",
        options: ["Harare", "Bulawayo", "Chitungwiza", "Mutare"],
        answer: "Harare"
    },
    {
        question: "What is the capital of Kenya?",
        options: [ "Mombasa", "Kisumu","Nairobi", "Nakuru"],
        answer: "Nairobi"
    },
    {
        question: "What is the capital of Ethiopia?",
        options: ["Addis Ababa", "Dire Dawa", "Mekele", "Gondar"],
        answer: "Addis Ababa"
    },
    {
        question: "What is the capital of Nigeria?",
        options: [ "Lagos","Abuja", "Kano", "Ibadan"],
        answer: "Abuja"
    },
    {
        question: "What is the capital of Ghana?",
        options: ["Accra", "Kumasi", "Tamale", "Sekondi-Takoradi"],
        answer: "Accra"
    },
    {
        question: "What is the capital of Morocco?",
        options: [ "Casablanca","Rabat", "Fes", "Tangier"],
        answer: "Rabat"
    },
    {
        question: "What is the capital of Algeria?",
        options: [ "Oran", "Constantine","Algiers", "Annaba"],
        answer: "Algiers"
    },
    {
        question: "What is the capital of Tunisia?",
        options: [ "Sfax", "Sousse", "Kairouan","Tunis",],
        answer: "Tunis"
    },
    {
        question: "What is the capital of Libya?",
        options: [ "Benghazi", "Misrata","Tripoli", "Tarhuna"],
        answer: "Tripoli"
    },
    {
        question: "What is the capital of Sudan?",
        options: ["Khartoum", "Omdurman", "Port Sudan", "Kassala"],
        answer: "Khartoum"
    },
    {
        question: "What is the capital of South Sudan?",
        options: ["Malakal","Juba",  "Wau", "Yei"],
        answer: "Juba"
    },
    {
        question: "What is the capital of Angola?",
        options: ["Huambo", "Lobito","Luanda",  "Benguela"],
        answer: "Luanda"
    },
    {
        question: "What is the capital of Mozambique?",
        options: ["Maputo", "Matola", "Beira", "Nampula"],
        answer: "Maputo"
    },
    {
        question: "What is the capital of Zambia?",
        options: [ "Kitwe", "Ndola", "Kabwe","Lusaka"],
        answer: "Lusaka"
    },
    {
        question: "What is the capital of Malawi?",
        options: [ "Blantyre", "Mzuzu", "Zomba","Lilongwe"],
        answer: "Lilongwe"
    },
    {
        question: "What is the capital of Tanzania?",
        options: ["Dodoma", "Dar es Salaam", "Mwanza", "Arusha"],
        answer: "Dodoma"
    },
    {
        question: "What is the capital of Uganda?",
        options: ["Gulu","Kampala",  "Lira", "Mbarara"],
        answer: "Kampala"
    },
    {
        question: "What is the capital of Rwanda?",
        options: [ "Butare","Kigali", "Gitarama", "Ruhengeri"],
        answer: "Kigali"
    },
    {
        question: "What is the capital of Burundi?",
        options: [ "Gitega", "Ngozi","Bujumbura", "Rumonge"],
        answer: "Bujumbura"
    },
    {
        question: "What is the capital of Somalia?",
        options: [ "Hargeisa","Mogadishu", "Kismayo", "Berbera"],
        answer: "Mogadishu"
    },
    {
        question: "What is the capital of Djibouti?",
        options: ["Djibouti City", "Ali Sabieh", "Tadjoura", "Obock"],
        answer: "Djibouti City"
    },
    {
        question: "What is the capital of Eritrea?",
        options: [ "Keren","Asmara", "Massawa", "Assab"],
        answer: "Asmara"
    },
    {
        question: "What is the capital of Madagascar?",
        options: ["Toamasina", "Antsirabe","Antananarivo",  "Fianarantsoa"],
        answer: "Antananarivo"
    },
    {
        question: "What is the capital of Mauritius?",
        options: [ "Beau Bassin-Rose Hill","Port Louis", "Vacoas-Phoenix", "Curepipe"],
        answer: "Port Louis"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        answer: "2"
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: "Nile River"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Lithium", "Oxygen"],
        answer: "Hydrogen"
    },
    {
        question: "Who discovered gravity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Dollar"],
        answer: "Yen"
    },
    {
        question: "Which country hosted the 2020 Summer Olympics?",
        options: ["China", "Japan", "Brazil", "USA"],
        answer: "Japan"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        answer: "Blue Whale"
    },
    {
        question: "Which is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        answer: "Mount Everest"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "Which is the largest desert in the world?",
        options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
        answer: "Antarctic Desert"
    },
    {
        question: "Who is known as the father of computers?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage"
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
        answer: "300,000 km/s"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let usedQuestions = [];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function startQuiz() {
    usedQuestions = [];
    score = 0;
    scoreElement.textContent = score;
    loadRandomQuestion();
}

function loadRandomQuestion() {
    if (usedQuestions.length === questions.length) {
        alert(`Quiz Over! Your final score is ${score}/${questions.length}`);
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(randomIndex));

    usedQuestions.push(randomIndex);
    const currentQuestion = questions[randomIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('div');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, currentQuestion.answer));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
      
        score+=10;
        scoreElement.textContent = score;
        optionsElement.querySelectorAll('.option').forEach(option => {
            if (option.textContent === selectedOption) {
                option.classList.add('correct');
            }
        });
    } else {
       
        optionsElement.querySelectorAll('.option').forEach(option => {
            if (option.textContent === selectedOption) {
                option.classList.add('wrong');
            }
            if (option.textContent === correctAnswer) {
                option.classList.add('correct');
            }
        });
    }
    optionsElement.querySelectorAll('.option').forEach(option => {
        option.style.pointerEvents = 'none';
    });
    setTimeout(() => loadRandomQuestion(), 1000);
}
startQuiz();
// Audio files for correct and wrong answers
const correctSound = new Audio('Correct Answer sound effect.mp3'); // Replace with your correct sound file
const wrongSound = new Audio('Wrong Answer Sound effect.mp3'); // Replace with your wrong sound file

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score+=10;
        scoreElement.textContent = score;
        optionsElement.querySelectorAll('.option').forEach(option => {
            if (option.textContent === selectedOption) {
                option.classList.add('correct');
            }
        });
        // Play correct sound
        correctSound.play();
    } else {
        optionsElement.querySelectorAll('.option').forEach(option => {
            if (option.textContent === selectedOption) {
                option.classList.add('wrong');
                score-=5;
                scoreElement.textContent = score;
            }
            if (option.textContent === correctAnswer) {
                option.classList.add('correct');
            }
        });
        // Play wrong sound
        wrongSound.play();
    }
    optionsElement.querySelectorAll('.option').forEach(option => {
        option.style.pointerEvents = 'none';
    });
    setTimeout(() => loadRandomQuestion(), 1000);
}