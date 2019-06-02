import React from 'react';
import {
  View, Text, Image, FlatList, ScrollView
} from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

const InfoLine = ({ title, content }) => (
  <View style={styles.row}>
    <Text style={styles.title}>
      {title}
    </Text>
    <Text style={styles.content}>
      {content}
    </Text>
  </View>
);

const BeerView = props => (
  <ScrollView
    contentContainerStyle={{ paddingVertical: 10 }}
    style={styles.container}>
    <Image
      style={styles.image}
      source={{ uri: props.image_url }} />
    <InfoLine
      title="Name"
      content={props.name} />
    <InfoLine
      title="Description"
      content={props.description} />
    <InfoLine
      title="Alcohol by volume"
      content={props.abv} />
    <InfoLine
      title="Volume"
      content={`${props.volume.value} ${props.volume.unit}`} />
    <InfoLine
      title="First Brew"
      content={props.first_brewed} />
    <Text style={styles.title}>
        Food pairing
    </Text>
    <FlatList
      data={props.food_pairing}
      keyExtractor={item => item}
      renderItem={({ item }) => <Text>{item}</Text>} />
  </ScrollView>
);

BeerView.navigationOptions = {
  title: 'Beer View'
};

const stateToProps = state => ({
  ...state.beer.selected,
});

export default connect(stateToProps)(BeerView);
