let me = Bo;
let me2 = Laura;
document.addEventListener("DOMContentLoaded", function() {
    const foldButton = document.getElementById("foldButton");
    const callButton = document.getElementById("callButton");
    const raiseButton = document.getElementById("raiseButton");
    const confirmButton = document.getElementById("confirmButton");
  
    foldButton.addEventListener("click", fold);
    callButton.addEventListener("click", call);
    raiseButton.addEventListener("click", showRaiseInput);
    confirmButton.addEventListener("click", raise);
});
  
function fold() {
    // Handle fold action
    console.log("Player folded");
}
  
function call() {
    // Handle call action
    console.log("Player called");
}
  
function showRaiseInput() {
    const raiseInput = document.querySelector('.raise-input');
    raiseInput.style.display = 'block';
}
  
  function raise() {
    const raiseAmount = document.getElementById('raiseSlider').value;
    // Handle raise action with the selected raiseAmount
    console.log("Player raised by " + raiseAmount);
}
  