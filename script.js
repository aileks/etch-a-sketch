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

function createUserGrid(gridSize) {
  if (gridSize > 100){
    alert("ERROR: Please choose a smaller number.")
  } else {
    clearGrid();
    createDivs(gridSize);
  };
}

function getUserInput() {
  let userInput = prompt("Enter grid size:");
  return userInput;
}

function clearGrid() {
  container.querySelectorAll("*").forEach((e) => e.remove());
  createDivs();
}

createDivs();

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => clearGrid());

const changeSizeButton = document.getElementById("change-size");
changeSizeButton.addEventListener("click", () => createUserGrid(getUserInput()));
