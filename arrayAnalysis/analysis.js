const arrayAnalysis = (arr) => {
  const analysisObj = {};
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  analysisObj.average = arr.reduce(reducer) / arr.length;
  analysisObj.min = Math.min(...arr);
  analysisObj.max = Math.max(...arr);
  analysisObj.length = arr.length;
  return analysisObj;
};

module.exports = arrayAnalysis;