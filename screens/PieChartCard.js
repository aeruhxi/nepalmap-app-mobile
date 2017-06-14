import React from 'react';
import { Text, Dimensions, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import PieChart from './PieChart';

const PieChartCard = ({ pieChartTitle, data }) => {
  const cardWidth = Dimensions.get('screen').width - 20;
  return (
    <Card
      containerStyle={{
        width: cardWidth,
        margin: 0
      }}
    >
      <Text style={styles.pieChartTitle}>{pieChartTitle}</Text>
      <PieChart pieHeight={270} pieWidth={cardWidth - 70} data={data} />
    </Card>
  );
};

const styles = StyleSheet.create({
  pieChartTitle: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default PieChartCard;
