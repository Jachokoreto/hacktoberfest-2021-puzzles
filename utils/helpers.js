function prettify(array) {
  let output = "";

  for (let i = 0; i < array.length / 9; i++) {
    for (let j = 0; j < array.length / 9; j++) {
      const index = j + 9 * i;
      if (!array[index]) output += ". ";
      else output += `${array[index]} `;
      if ((j + 1) % 3 === 0 && j != 8) output += "| ";
      if (j == 8) output += "\n";
    }
    if ((i + 1) % 3 === 0 && i != 8) output += "------+-------+------\n";
  }
  return output;
}

module.exports = {
  prettify,
};
