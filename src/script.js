const container = document.getElementById("grid-container");


function showModal(title, message) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const modalTitle = document.getElementById("modal-title");
  const modalMessage = document.getElementById("modal-text");
  const input = document.getElementById("input");

  if (modal.classList.contains("hide")) {
    modal.classList.remove("hide");
  }

  modalTitle.textContent = title;
  modalMessage.textContent = message;
  input.value = "";
  modal.style.display = "block";
  input.focus();
}

function closeModal() {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.classList.add("hide");
  modal.classList.add("hide");

  modal.style.display = "none";
}

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
  const input = document.getElementById("input");
  const userInput = input.value;

  if (!userInput || isNaN(userInput) || !Number.isInteger(parseFloat(userInput))) {
    showModal("ERROR", "Please enter whole number between 8 and 100.");
    return;
  }

  createUserGrid(parseInt(userInput, 10));
  closeModal();
}

function clearGrid() {
  container.querySelectorAll("*").forEach((e) => e.style.background = "");
}

createDivs();

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => clearGrid());

const changeSizeButton = document.getElementById("change-size");
changeSizeButton.addEventListener("click", () => {
  showModal("Change Grid Size", "Enter your desired grid size (MAX: 100):")
});

document.addEventListener("touchmove", handleTouchMove, { passive: false });
