const container = document.getElementById("grid-container");

function createDivs(num = 32) {
  container.style.setProperty("--grid-rows", num);
  container.style.setProperty("--grid-cols", num);

  for (let i = 0; i < (num * num); i++) {
    let newDiv = document.createElement("div");
    newDiv.id = i + 1;
    newDiv.className = "grid";
    newDiv.addEventListener("mouseover", () => newDiv.style.background = "#282a36");
    container.appendChild(newDiv);
  };
}

function handleTouchMove(e) {
  e.preventDefault();

  const touch = event.touches[0];
  const element = document.elementFromPoint(touch.clientX, touch.clientY);

  if (element && element.classList.contains("grid")) {
    element.style.background = "black";
  }
}

function createUserGrid(gridSize) {
  clearGrid();
  createDivs(gridSize);
}

function getUserInput() {
  let userInput = prompt("Enter grid size (Max: 100):");

  if (!userInput || isNaN(userInput) || !Number.isInteger(parseFloat(userInput)) || userInput < 8 || userInput >= 100) {
    alert("ERROR: Please enter whole number between 8 and 100.");
    return;
  }

  return userInput;
}

function clearGrid() {
  container.querySelectorAll("*").forEach((e) => e.style.background = "");
}

createDivs();

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => clearGrid());

const changeSizeButton = document.getElementById("change-size");
changeSizeButton.addEventListener("click", () => {
  let input = getUserInput();
  if (!input) return;
  createUserGrid(input);
});

document.addEventListener("touchmove", handleTouchMove, { passive: false });
