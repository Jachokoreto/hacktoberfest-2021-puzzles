const fs = require("fs");

function validInput(parsed) {
  if (parsed.length != 81) return false;
  if (parsed.replace(/([0-9])+/g, "")) return false;
  return true;
}

function validAnswer(parsed) {
  // Check proper sudoku ans
  // Check the map match original map (so you cant just put your own map)

  //check row
  for (var i = 0; i < 9; i++) {
    var arr = [...parsed.substring(i * 9, (i * 9) + 9)];
    var check = arr.filter((item, index) => arr.indexOf(item) != index);
    if (check.length !== 0) {return false}
  }
  //check column
  for (var i = 0; i < 9; i++) {
    var arr = [];
    for (var j = 0; j < 9; j++) {
      arr.push(parsed[(j * 9) + i]);
    }
    var check = arr.filter((item, index) => arr.indexOf(item) != index);
    if (check.length !== 0) {return false}
  }
  //check box
  [0, 3, 6, 27, 30, 33, 54, 57, 60].forEach((item) => {
    var arr = [];
    for (var i = item; i < (item + 3); i++) {
      arr.push(parsed[i], parsed[i + 9], parsed[i + 18]);
    }
    var check = arr.filter((item, index) => arr.indexOf(item) != index);
    if (check.length !== 0) {return false}
  })
  return true;
}

function checkAnswer(answer) {
  const parsed = answer.replace(/([\|\-\+\s])+/g, "");
  console.log(parsed);
  if (!validInput(parsed)) throw Error("Invalid Input");
  if (validAnswer(parsed)) console.log("✅ Solution Passed!");
  else {
    console.error("❌ Solution Failed!");
    throw Error("Incorrect solution");
  }
}

function readFile() {
  try {
    const answer = fs.readFileSync("./solution.txt", "utf8");
    checkAnswer(answer);
  } catch (err) {
    console.error(err);
  }
}

readFile();
