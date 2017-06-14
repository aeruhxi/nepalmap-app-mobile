import React from 'react';
import { Text, Dimensions, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const InfoCard = ({ data, label, info }) => {
  const cardWidth = Dimensions.get('screen').width - 20;
  return (
    <Card
      containerStyle={{
        width: cardWidth,
        margin: 0
      }}
    >
      <Text style={styles.data}>{data}</Text>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.info}>{info}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  data: {
    marginTop: -10,
    fontSize: 32,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 20
  },
  info: {
    marginTop: 15,
    fontSize: 16
  }
});

export default InfoCard;
