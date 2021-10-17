import converter from "./converter";

class UI {
  constructor({ input, resultContainer }) {
    this.input = input;
    this.resultContainer = resultContainer;

    this.terrainMatrix = [];
  }
  init() {
    document.addEventListener("keyup", this.focusInput.bind(this));

    this.input.addEventListener("input", this.inputHandler.bind(this));
  }
  focusInput(event) {
    if (event.code === "Slash" && event.target !== this.input)
      this.input.focus();
  }
  inputHandler(e) {
    const value = e.target.value.toUpperCase();

    const pattern = value.replace(/[^UD-]/g, "");
    e.target.value = pattern;

    this.terrainMatrix = converter(pattern);

    this.generateTerrainUI();
  }
  generateTerrainUI() {
    this.resultContainer.innerHTML = this.terrainMatrix.reduce((html, row) => {
      const rowHtml = row.reduce(
        (htmlRow, item) => (htmlRow += `<div class="col">${item}</div>`),
        ""
      );

      return (html += `<div class="row">${rowHtml}</div>`);
    }, "");

    const firstRow = this.resultContainer.querySelector(".row");
    if (
      firstRow &&
      this.resultContainer.scrollWidth > this.resultContainer.clientWidth
    ) {
      this.resultContainer.scrollTo(this.resultContainer.scrollWidth, 0);
    }
  }
}

export default UI;
