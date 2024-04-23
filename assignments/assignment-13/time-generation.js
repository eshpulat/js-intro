// Random Time Generation

var totalSeconds = Math.floor(Math.random() * 86400);
console.log(`Total seconds: ${totalSeconds}`);

// Calculating Hours, Minutes, and Seconds
var hours = Math.floor(totalSeconds / 3600);
var remainingSeconds = totalSeconds % 3600;
var minutes = Math.floor(remainingSeconds / 60);
var seconds = remainingSeconds % 60;

// Formatting Hours, Minutes, and Seconds
var formattedHours = `${hours}`;
var formattedMinutes = `${minutes}`;
var formattedSeconds = `${seconds}`;

if (hours < 10) {
    formattedHours = `0${hours}`;
}
if (minutes < 10) {
    formattedMinutes = `0${minutes}`;
}
if (seconds < 10) {
    formattedSeconds = `0${seconds}`;
}

// Printing the Timestamp
var timestamp = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
console.log(timestamp);

// Printing a Greeting Based on the Hour
if (hours < 12) {
    console.log("Good morning!");
} else if (hours < 17) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
