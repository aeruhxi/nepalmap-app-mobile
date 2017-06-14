var obj = require('../../data.json', 'utf8');

const {
  // Population
  total_population,
  sex_ratio,
  pop_projection_2031,
  pop_2031_dist,
  // Age
  median_age,
  age_category_distribution,
  age_group_distribution,
  // Life Expectancy and Income
  life_expectancy,
  per_capita_income,
  // Language
  language_most_spoken,
  language_distribution,
  // Caste and Ethnic Groups
  most_populous_caste,
  ethnic_distribution,
  // Disabled
  percent_disabled,
  disability_ratio
} = obj.demographics;

const getDistribution = distribution => {
  let distributionArray = [];
  for (let data in distribution) {
    if (data != 'metadata') {
      var obj = {
        label: data,
        value: distribution[data].values.this
      };
      distributionArray.push(obj);
    }
  }
  return distributionArray;
};

// Population
export const population = {
  people: total_population.values.this,
  projection: pop_projection_2031.values.this,
  sexRatio: [
    { label: 'Female', value: sex_ratio.Female.values.this },
    { label: 'Male', value: sex_ratio.Male.values.this }
  ],
  projectedSexRatio: [
    { label: 'Female', value: pop_2031_dist.Female.values.this },
    { label: 'Male', value: pop_2031_dist.Male.values.this }
  ]
};

// Age
export const age = {
  median: median_age.values.this,
  categoryDistribution: getDistribution(age_category_distribution),
  groupDistribution: getDistribution(age_group_distribution)
};

// Life Expectancy and Income
export const lifeExpectancyAndIncome = {
  expectancy: life_expectancy.values.this,
  perCapita: per_capita_income.values.this
};

// Language
export const language = {
  mostSpoken: language_most_spoken.name,
  distribution: getDistribution(language_distribution)
};

// Caste and Ethnic Groups
export const casteAndEthnicGroups = {
  mostPopulous: most_populous_caste.name,
  distribution: getDistribution(ethnic_distribution)
};

// Disabled
export const disabled = {
  percentage: percent_disabled.values.this + '%',
  distribution: getDistribution(disability_ratio)
};
