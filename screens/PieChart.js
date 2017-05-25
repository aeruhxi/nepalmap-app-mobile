import React, { Component } from 'react';
import * as d3Shape from 'd3-shape';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, G, Text as SvgText } from 'react-native-svg';

const colors = ['rgba(224, 0, 21, 0.8)', 'rgba(0, 173, 239, 0.8)'];
const padding = 20;

/**
 * Legend Component represents the legend for pie chart
 * Contains a colored box and a label
 */
const Legend = ({ index, item, selectedIndex, onPress }) => {
  const opacity = selectedIndex === index ? 1 : 0.7;
  const legendBoxStyle = {
    ...StyleSheet.flatten(styles.legendBox),
    backgroundColor: colors[index],
    opacity
  };

  const legendLabelStyle = {
    ...StyleSheet.flatten(styles.legendLabel),
    opacity
  };

  return (
    <TouchableOpacity style={styles.legend} onPress={onPress}>
      <View style={styles.legend}>
        <View style={legendBoxStyle} />
        <Text style={legendLabelStyle}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

/**
 * Pie Chart
 */
export default class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  _createArc = index => {
    const { pieWidth, pieHeight, data } = this.props;
    const radius = Math.min(pieHeight, pieWidth) / 2 - padding;

    const arcs = d3Shape.pie().value(item => item.value)(data);
    let arc = d3Shape
      .arc()
      .outerRadius(radius)
      .innerRadius(radius - 30)
      .padAngle(0.05);

    return arc(arcs[index]);
  };

  render() {
    const { pieWidth, pieHeight, data } = this.props;

    return (
      <View style={styles.rootContainer}>
        <View style={styles.piechartContainer}>

          <View style={styles.textGroup}>
            <Text
              numberOfLines={2}
              style={{
                ...StyleSheet.flatten(styles.label),
                width: pieWidth - 150
              }}
            >
              {data[this.state.selectedIndex].label}
            </Text>
            <Text style={styles.value}>
              {data[this.state.selectedIndex].value + '%'}
            </Text>
          </View>

          <Svg width={pieWidth} height={pieHeight}>
            <G x={pieWidth / 2} y={pieHeight / 2}>
              {data.map((item, index) => (
                <Path
                  key={'path_' + index}
                  d={this._createArc(index)}
                  fill={colors[index]}
                  fillOpacity={this.state.selectedIndex === index ? 1 : 0.7}
                  scale={this.state.selectedIndex === index ? 1 : 0.93}
                  onPress={() => {
                    this.setState({ selectedIndex: index });
                  }}
                />
              ))}
            </G>
          </Svg>

        </View>

        <View style={styles.legendContainer}>
          {data.map((item, index) => (
            <Legend
              key={'legend_' + index}
              index={index}
              selectedIndex={this.state.selectedIndex}
              item={item}
              onPress={() => this.setState({ selectedIndex: index })}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {}, // TODO
  textGroup: {
    alignItems: 'center',
    position: 'absolute',
    top: '39%'
  },
  value: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  label: {
    flexWrap: 'wrap',
    textAlign: 'center',
    flex: 1,
    fontSize: 13
  },
  piechartContainer: {
    alignItems: 'center'
  },
  legendContainer: {
    flexDirection: 'row'
  },
  legend: {
    marginRight: 10,
    flexDirection: 'row'
  },
  legendBox: {
    width: 20,
    height: 20,
    backgroundColor: 'red'
  },
  legendLabel: {
    marginLeft: 3
  }
});
