import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'

export const BeerItem = (props) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={styles.itemContainer}>
    <Image
      style={styles.itemImage}
      source={{uri: props.image_url}}/>
    <View style={styles.innerItemContainer}>
      <Text>
        {props.name}
      </Text>
      <Text>
        {props.first_brewed}
      </Text>
    </View>
  </TouchableOpacity>
);