import React from 'react';
import {
  View, Text, Image, TouchableOpacity
} from 'react-native';
import styles from './styles';

export const BeerItem = props => (
  <TouchableOpacity
    testID={`item_${props.index}`}
    onPress={props.onPress}
    style={styles.itemContainer}>
    <Image
      style={styles.itemImage}
      source={{ uri: props.image_url }} />
    <View style={styles.innerItemContainer}>
      <Text testID={`item_name_${props.index}`}>
        {props.name}
      </Text>
      <Text testID={`item_brew_${props.index}`}>
        {props.first_brewed}
      </Text>
    </View>
  </TouchableOpacity>
);
