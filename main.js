import "./style.css";

import tests from "./tests/index";

import UI from "./src/UI";
import converter from "./src/converter";

const ui = new UI({
  input: document.querySelector(".form-container input"),
  resultContainer: document.querySelector(".result-wrapper"),
});
ui.init();

console.log(tests[4]);
console.log(
  converter(tests[4])
    .map((row) => row.join(""))
    .join("\n")
);
