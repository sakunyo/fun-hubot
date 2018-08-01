/**
 * @returns {string}
 */
const hello = () => {
  return "Hello, How was your day?";
};

module.exports.hello = res => res.send(hello());
