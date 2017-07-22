import { observable, action } from 'mobx';
import axios from 'axios';

class AppStore {
  @observable isLoading = false;
  @observable type = 'Country';
  @observable
  demographics = {
    population: [
      {
        name: 'People',
        value: 26494504,
        data: [{ label: 'Female', value: 51.5 }, { label: 'Male', value: 48.5 }]
      },
      {
        name: 'Projected in 2031',
        value: 33597033,
        data: [{ label: 'Female', value: 51.4 }, { label: 'Male', value: 48.6 }]
      }
    ]
  };
  @observable humanDevelopment = {};
  @observable elections = {};
  @observable education = {};
  @observable health = {};
  @observable households = {};

  @action
  setDemographics(demographics) {
    this.demographics = demographics;
  }

  @action
  updateApiData(url) {
    console.log(url);
    axios.get(url).then(res => {
      this.isLoading = true;

      const { data } = res;
      console.log(res.status);
      const { demographics } = parseData(data);
      console.log(demographics);

      this.setDemographics(demographics);
    });
    // .catch(() => {
    //   this.isLoading = false;
    //   console.log('failed');
    // });
  }

  @action
  setData(data) {
    this.type = data.type;
    this.demographics = data.demographics;
    this.humanDevelopment = data.humanDevelopmentd;
    this.election = data.elections;
    this.education = data.education;
    this.households = data.households;
  }
}

export default new AppStore();

function parseData(data) {
  const {
    demographics: {
      total_population,
      sex_ratio,
      pop_projection_2031,
      pop_2031_dist,
      age_group_distribution,
      age_category_distribution,
      median_age
    }
  } = data;
  const parsedData = {};

  parsedData.demographics = {
    population: [
      {
        name: total_population.name,
        value: total_population.values.this,
        data: parseChartData(sex_ratio)
      },
      {
        name: pop_projection_2031.name,
        value: pop_projection_2031.values.this,
        data: parseChartData(pop_2031_dist)
      }
    ],
    age: [
      {
        name: median_age.name,
        value: median_age.values.this,
        data: parseChartData(age_category_distribution)
      },
      {
        data: parseChartData(age_group_distribution)
      }
    ]
  };

  return parsedData;
}

const parseChartData = dataObject =>
  Object.keys(dataObject).filter(key => key !== 'metadata').map(key => ({
    label: dataObject[key].name,
    value: dataObject[key].values.this
  }));
