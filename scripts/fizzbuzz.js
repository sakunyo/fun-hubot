/**
 * @param num
 * @returns {string}
 */
const fizzbuzz = (num) => {
  const a = [`${num}`];

  if (num % 3 === 0 || num % 5 === 0) {
    a.push(" is ");
    if (num % 3 === 0) a.push("fizz");
    if (num % 5 === 0) a.push("buzz");
  }

  return num > 1 ? a.join("") + "\n" + fizzbuzz(num - 1) : a.join("");
};

module.exports.fizzbuzz = res => {
  const n = Math.floor(res.match[1] * 1);

  // if type of number
  if (!!(n)) {
    res.send(fizzbuzz(n));
  } else {
    res.send("Sorry, I'm not understand.");
  }
};
