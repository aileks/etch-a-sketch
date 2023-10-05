const container = document.getElementById("box-container");

for (let i = 0; i < 256; i++) {
  let newDiv = document.createElement("div");
  newDiv.className = "box";
  container.appendChild(newDiv);
};
