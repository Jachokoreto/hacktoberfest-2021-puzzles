const sudoku = require("sudoku");
const helpers = require("./utils/helpers");
const fs = require("fs");

try {
  const puzzle = sudoku.makepuzzle();
  const parsed = helpers.prettify(puzzle);
  let data = fs.readFileSync("./README_TEMPLATE.md", "utf8");
  data += "```\n";
  data += parsed;
  data += "```\n";
  fs.writeFileSync("./README.md", data);

  const solutionTemplate = `
. . . | . . . | . . . 
. . . | . . . | . . . 
. . . | . . . | . . . 
------+-------+------
. . . | . . . | . . . 
. . . | . . . | . . . 
. . . | . . . | . . . 
------+-------+------
. . . | . . . | . . . 
. . . | . . . | . . . 
. . . | . . . | . . . 
`;
  fs.writeFileSync("./solution.txt", solutionTemplate);
  console.log("✅ Puzzle Reset!");
} catch (err) {
  console.error(err);
  console.error("❌ Something went wrong!");
}
