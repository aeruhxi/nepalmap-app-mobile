import React, { Component } from 'react';
import { Svg, Rect, Text as SvgText } from 'react-native-svg';
import * as d3Scale from 'd3-scale';
import * as d3 from 'd3';

export default class BarChart extends Component {
  render() {
    const { width, height, data } = this.props;

    const dataValues = data.map(x => x.value);
    const xScale = d3Scale
      .scaleLinear()
      .domain([0, d3.max(dataValues)])
      .range([0, width - 40]);

    return (
      <Svg width={width} height={height}>
        {data.map((item, index) => [
          <Rect
            x={0}
            y={index * 45}
            width={xScale(item.value)}
            height="25"
            fill="red"
          />,
          <SvgText x={xScale(item.value) + 5} y={index * 45 + 5} fontSize="15">
            {item.value + '%'}
          </SvgText>,
          <SvgText x="0" y={index * 45 + 26} fontSize="15" fontWeight="bold">
            {item.label}
          </SvgText>
        ])}
      </Svg>
    );
  }
}
