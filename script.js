console.log("script.js is connected");
let reButton = false
function handleRSVP() {
  const message = document.createElement("p");
  message.textContent = "You're on the list — Meztzamero! Meztzamero! Meztzamero! Good morning! Rider!";
  message.classList.add("feedback-message");

  const rsvpButton = document.getElementById("rsvpBtn");
  rsvpButton.after(message);
}

function officerButtonClick(){
  let die=document.getElementById("die");
  if (reButton){
    die.setAttribute("style","display: none");
    reButton = false;
  } else {
    die.setAttribute("style","display: block");
    reButton = true;
  }

}