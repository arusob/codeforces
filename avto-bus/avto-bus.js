
function checkNumber(wheels) {
  let min = wheels / 6;
  let max = wheels / 4;
  if (wheels % 6 === 0 && wheels % 4 !== 0) {
    return (result = [min]);
  } 
  if (wheels % 4 === 0 && wheels % 6 !== 0) {
    return (result = [max]);
  } 
  if (wheels % 6 === 0 && wheels % 4 === 0) {
    return (result = [min, max]);
  } 
  if (wheels % 4 !== 0 && wheels % 6 !== 0) {
    return (result = [-1]);
  }
  return result;
}

module.exports = checkNumber;
