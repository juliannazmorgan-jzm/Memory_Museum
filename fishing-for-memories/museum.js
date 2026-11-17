//Check whether the museum has been unlocked
if(localStorage.getItem("museumUnlocked")!=="true"){
    alert("The museum is locked. Catch all five fish first.");
    window.location.href="index.html";

}

// Find the popup and its elements
const memoryPopup = document.getElementById("memoryPopup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

// Find all the memory buttons
const memoryButtons=document.querySelectorAll(".memory-button");

//Open the popup when a memory button is clicked
memoryButtons.forEach(function(button){

    button.addEventListener("click", function(){

        //Find the memory description in this exhibit
        const story = button.nextElementSibling;

        //Put the exhibit title and story into the popup
        popupTitle.textContent=button.parentElement.querySelector("h2").textContent;
        popupText.textContent = story.textContent.trim();

        //Display the popup
        memoryPopup.showModal();
    });
});

//Close the popup
closePopup.addEventListener("click", function(){
    memoryPopup.close();
});
