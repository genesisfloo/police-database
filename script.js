document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "officer" && password === "12345") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("database-container").style.display = "block";
    } else {
        document.getElementById("error-message").textContent = "Incorrect login credentials.";
    }
});

// Citizens List
const citizens = [
    "John Doe", "Jane Smith", "Mike Johnson", "Emily Davis", "Chris Wilson", "Sara Brown",
    "Robert Garcia", "Lisa Martinez", "David Anderson", "Laura Thomas", "Kevin White",
    "Emma Harris", "Daniel Lewis", "Sophia Clark", "Matthew Hall", "Olivia Allen",
    "James Young", "Ava Scott", "Benjamin King", "Mia Green", "Ethan Baker", "Isabella Nelson",
    "Alexander Carter", "Charlotte Roberts", "William Moore", "Amelia Perez", "Henry Adams",
    "Evelyn Stewart", "Lucas Sanchez", "Harper Morris", "Mason Cooper", "Lily Reed", 
    "Elijah Ward", "Chloe Barnes", "Michael Powell"
];

// Ridiculous Crimes List
const crimes = [
    "Jaywalking too confidently",
    "Singing off-key in public",
    "Breathing too loudly in a quiet area",
    "Wearing socks with sandals",
    "Using too many emojis in a text",
    "Laughing too much at a bad joke",
    "Ordering pineapple on pizza",
    "Walking too slow in a crowded place",
    "Bringing 12 items to the 10-item checkout",
    "Talking bad about the country",
    "Texting 'lol' without actually laughing",
    "Holding the door open too long",
    "Waving back at someone who wasn't waving at you",
    "Taking too long to pick a Netflix show",
    "Replying 'k' to a long paragraph"
];

// Populate Citizen List
const citizenList = document.getElementById("citizen-list");
citizens.forEach(name => {
    let li = document.createElement("li");
    li.textContent = name;
    li.addEventListener("click", () => selectCitizen(name));
    citizenList.appendChild(li);
});

// Populate Crime Buttons
const crimeButtons = document.getElementById("crime-buttons");
crimes.forEach(crime => {
    let button = document.createElement("button");
    button.textContent = crime;
    button.addEventListener("click", () => logCrime(crime));
    crimeButtons.appendChild(button);
});

// Logging Crimes
let selectedCitizen = null;
function selectCitizen(name) {
    selectedCitizen = name;
}

function logCrime(crime) {
    if (!selectedCitizen) {
        alert("Select a citizen first!");
        return;
    }
    alert(`${selectedCitizen} has been charged with: ${crime}`);
}
