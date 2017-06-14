var d3 = require('d3');

const comparisonPhrases = {
  206: ['more than double', ''],
  195: ['about double', ''],
  180: ['nearly double', ''],
  161: ['more than 1.5 times', ''],
  145: ['about 1.5 times', ''],
  135: ['about 1.4 times', ''],
  128: ['about 1.3 times', ''],
  122: ['about 25 percent higher', 'than'],
  115: ['about 20 percent higher', 'than'],
  107: ['about 10 percent higher', 'than'],
  103: ['a little higher', 'than'],
  98: ['about the same as', ''],
  94: ['a little less', 'than'],
  86: ['about 90 percent', 'of'],
  78: ['about 80 percent', 'of'],
  72: ['about three-quarters', 'of'],
  64: ['about two-thirds', 'of'],
  56: ['about three-fifths', 'of'],
  45: ['about half', ''],
  37: ['about two-fifths', 'of'],
  30: ['about one-third', 'of'],
  23: ['about one-quarter', 'of'],
  17: ['about one-fifth', 'of'],
  13: ['less than a fifth', 'of'],
  8: ['about 10 percent', 'of'],
  0: ['less than 10 percent', 'of']
};

const comparisonThresholds = d3.keys(comparisonPhrases).map(Number);

const getComparisonNoun = type => {
  if (type == 'percentage' || type == 'scaled-percentage') {
    return 'rate';
  } else if (type == 'dollar') {
    return 'amount';
  }

  return 'figure';
};

const getComparisonPhrase = value => {
  var threshold = comparisonThresholds.filter(function(i) {
    return i <= value;
  });

  return comparisonPhrases[threshold];
};

export const getComparison = (value, type) => {
  const phrase = getComparisonPhrase(value);
  const noun = getComparisonNoun(type);

  return `${phrase[0]} ${phrase[1]} the ${noun} in Nepal: `;
};
