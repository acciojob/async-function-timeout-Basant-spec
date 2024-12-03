// Function to introduce delay using Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the button click
async function handleButtonClick() {
  // Retrieve user inputs
  const textInput = document.getElementById("text").value;
  const delayInput = parseInt(document.getElementById("delay").value, 10);
  const outputDiv = document.getElementById("output");

  // Validate inputs
  if (!textInput) {
    outputDiv.innerHTML = "Please enter some text.";
    return;
  }

  if (isNaN(delayInput) || delayInput < 0) {
    outputDiv.innerHTML = "Please enter a valid delay (non-negative number).";
    return;
  }

  // Clear the output div before starting the delay
  outputDiv.innerHTML = "Waiting...";

  // Wait for the specified delay
  await delay(delayInput);

  // Update the output div with the user-provided text
  outputDiv.innerHTML = textInput;
}

// Attach the click event listener to the button
document.getElementById("btn").addEventListener("click", handleButtonClick);
