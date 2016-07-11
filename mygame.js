// Check if the user is ready to play!
confirm("I am ready to play");
var age = prompt ("What's your age");
 
if(age < 13){
console.log("you're allowed to play on your responsibility!!");
}
else{
    console.log("Welcome to next level go on!!");
    console.log("______________________________")
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
var userAnswer = confirm ("hit to continue");
if (userAnswer === "yes"){
    consloe.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
    console.log("______________________________")
}
else{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
    console.log("______________________________")
}
var feedback = prompt("Please rate this game out of 10");
if (feedback>= 8){
console.log("Thank you! We should race at the next concert!");
}
else{
    console.log("I'll keep practicing coding and racing.");
}
