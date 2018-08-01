/**
 * @returns {string}
 */
const hello = () => {
  return "Hello, How was you day?";
};

module.exports.hello = res => res.send(hello());
