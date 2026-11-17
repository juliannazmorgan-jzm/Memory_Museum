//Our  five fish and their associated memories
const fish = [
    "🐠Blue Tang fish - Childhood",
    "🐟Pacific Fanfish - Friendship",
    "🐙Zebra fish - Curiosity",
    "🐡Salmon - Adventure",
    "🦑Sunfish - Hope"
];

//Keep track of how many fish have been caught
let fishCaught = 0;

const fishButton = document.getElementById('fishButton');
const message = document.getElementById('message');
const counter = document.getElementById('counter');
const pondFish = document.querySelectorAll(".water .exhibit-fish");
const museumDoor = document.getElementById('museumDoor');
const doorMessage = document.getElementById('doorMessage');

fishButton.addEventListener("click", function(){
    //Check if there are still fish to catch
    if (fishCaught < fish.length) {

        //Display the fish we just caught
        message.textContent = "You caught: " +fish[fishCaught];

        //Make the caught fish dissapear
        pondFish[fishCaught].style.display = "none";

        //Increase the number of fish caught
        fishCaught++;

        //Update the counter
        counter.textContent = fishCaught + " /5 fish collected";

    } else {
        message.textContent = "You have caught all five fish!";

        //Unlock the museum door
        museumDoor.textContent = "ENTER MUSEUM";
        museumDoor.style.backgroundColor = "rgb(100,170,120)";
        doorMessage.textContent = "All five memory fish have been collected. The door is now Open!";
        localStorage.setItem ("museumUnlocked", "true");
    }
})

//Reset the museum when starting a new game
localStorage.removeItem("museumUnlocked");