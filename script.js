function loginUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
}

/* HOME PAGE PLACE CLICK */
function showPlace(placeName) {
    localStorage.removeItem("selectedPlace");
    localStorage.setItem("selectedPlace", placeName);
    window.location.href = "planner.html";
}

/* WEATHER PAGE */
function updateWeatherFromCategory(place) {

    if (place === "") {
        document.getElementById("city-name").innerText = "Select Destination";
        document.getElementById("city-temp").innerText = "--";
        document.getElementById("city-condition").innerText = "Choose a place";
        document.getElementById("city-humidity").innerText = "Humidity: --";
        document.getElementById("city-wind").innerText = "Wind: --";

        document.getElementById("sunrise-time").innerText = "--";
        document.getElementById("sunset-time").innerText = "--";

        document.getElementById("advice1").innerText = "Select a destination";
        document.getElementById("advice2").innerText = "";
        document.getElementById("advice3").innerText = "";

        document.getElementById("day1").innerHTML = "--";
        document.getElementById("day2").innerHTML = "--";
        document.getElementById("day3").innerHTML = "--";
        document.getElementById("day4").innerHTML = "--";
        document.getElementById("day5").innerHTML = "--";

        return;
    }

    const weatherData = {
        Goa: {
            temp: "30°C",
            condition: "☀ Sunny",
            humidity: "Humidity: 70%",
            wind: "Wind: 8 km/h",
            sunrise: "06:05 AM",
            sunset: "06:55 PM",
            advice: [
                "Carry sunscreen",
                "Best for beach trips",
                "Stay hydrated"
            ],
            forecast: [
                "Mon<br>30°",
                "Tue<br>31°",
                "Wed<br>29°",
                "Thu<br>30°",
                "Fri<br>32°"
            ]
        }

        /* your other places here */
    };

    if (!weatherData[place]) return;

    document.getElementById("city-name").innerText = place;
    document.getElementById("city-temp").innerText = weatherData[place].temp;
    document.getElementById("city-condition").innerText = weatherData[place].condition;
    document.getElementById("city-humidity").innerText = weatherData[place].humidity;
    document.getElementById("city-wind").innerText = weatherData[place].wind;

    document.getElementById("sunrise-time").innerText = weatherData[place].sunrise;
    document.getElementById("sunset-time").innerText = weatherData[place].sunset;

    document.getElementById("advice1").innerText = weatherData[place].advice[0];
    document.getElementById("advice2").innerText = weatherData[place].advice[1];
    document.getElementById("advice3").innerText = weatherData[place].advice[2];

    document.getElementById("day1").innerHTML = weatherData[place].forecast[0];
    document.getElementById("day2").innerHTML = weatherData[place].forecast[1];
    document.getElementById("day3").innerHTML = weatherData[place].forecast[2];
    document.getElementById("day4").innerHTML = weatherData[place].forecast[3];
    document.getElementById("day5").innerHTML = weatherData[place].forecast[4];
}
/* START PLANNING MODAL */
function openPlannerModal() {
    document.getElementById("plannerModal").style.display = "flex";
}

function goToPlanner() {
    let place = document.getElementById("planner-destination").value;

    if (place === "") {
        alert("Please select a destination");
        return;
    }

    localStorage.removeItem("selectedPlace");
    localStorage.setItem("selectedPlace", place);

    console.log("Saved Place:", place);

    window.location.href = "planner.html";
}

/* PLANNER PAGE */
window.onload = function () {
    let place = localStorage.getItem("selectedPlace");
    console.log("Current Place:", place);

    const backgroundImages = {
        Goa: "images/goa.jpg",
        Manali: "images/manali-digital-nomads.jpg",
        Jaipur: "images/jaipurr.jpg",
        Kashmir: "images/Kashmirr.jpg",
        Kerala: "images/Keralaa.jpg"
    };

    const plannerData = {
        Goa: {
            season: "Best Time: Oct – Mar",
            duration: "Duration: 2 Days",
            budget: "Budget: ₹5000",
            carry: "Carry: Sunscreen, Sunglasses",
            places: "Places: Baga Beach, Fort Aguada",
            tip: "Tip: Avoid peak weekends"
        },

        Manali: {
            season: "Best Time: Nov – Feb",
            duration: "Duration: 3 Days",
            budget: "Budget: ₹6000",
            carry: "Carry: Jacket, Gloves",
            places: "Places: Solang Valley, Mall Road",
            tip: "Tip: Carry warm clothes"
        },

        Kashmir: {
            season: "Best Time: Dec – Feb",
            duration: "Duration: 4 Days",
            budget: "Budget: ₹8000",
            carry: "Carry: Heavy Woollens, Gloves, Boots",
            places: "Places: Gulmarg, Dal Lake, Sonmarg",
            tip: "Tip: Check snowfall updates before travel"
        },

        Kerala: {
            season: "Best Time: Sep – Mar",
            duration: "Duration: 3 Days",
            budget: "Budget: ₹5500",
            carry: "Carry: Light Clothes, Sunscreen, Umbrella",
            places: "Places: Munnar, Alleppey, Kovalam Beach",
            tip: "Tip: Perfect for relaxing family trips"
        },

        Jaipur: {
            season: "Best Time: Oct – Feb",
            duration: "Duration: 2 Days",
            budget: "Budget: ₹4500",
            carry: "Carry: Sunglasses, Water Bottle",
            places: "Places: Hawa Mahal, City Palace",
            tip: "Tip: Avoid afternoon heat"
        }
    };

    if (place && backgroundImages[place]) {
        document.querySelector(".planner-section").style.setProperty(
            "--bg-image",
            `url("${backgroundImages[place]}")`
        );
    }

    if (place && plannerData[place]) {
        document.getElementById("planner-place").innerText = place;
        document.getElementById("planner-season").innerText = plannerData[place].season;
        document.getElementById("planner-duration").innerText = plannerData[place].duration;
        document.getElementById("planner-budget").innerText = plannerData[place].budget;
        document.getElementById("planner-carry").innerText = plannerData[place].carry;
        document.getElementById("planner-places").innerText = plannerData[place].places;
        document.getElementById("planner-tip").innerText = plannerData[place].tip;
    }
};
let username = localStorage.getItem("skytrip_user");

if (username && document.getElementById("welcome-user")) {
    document.getElementById("welcome-user").innerText = "Hi, " + username;

    document.getElementById("user-avatar").innerText =
        username.charAt(0).toUpperCase();
}