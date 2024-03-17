const container = document.getElementById("container");

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).id = "grid-item";
  };
  addEvent();
};
makeGrid(16, 16);

function addEvent() {
    const grid_items = document.querySelectorAll('#grid-item');
    grid_items.forEach((grid_item) => {
        grid_item.addEventListener("mouseover", function(e) {
            e.target.style.background = "yellow";
        });
    });
}


const button = document.querySelector('#size');
button.addEventListener("click", () => {
    let grid_size = window.prompt("Enter GRID size","16");
    reset();
    makeGrid(grid_size,grid_size);
});

function reset() {
    document
    .querySelectorAll("#grid-item")
    .forEach((e) => e.parentNode.removeChild(e));
  }
