import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'

import styles from './styles'

const BeerView = (props) => (
  <View style={styles.container}>
    <View style={styles.container}>
    </View>
  </View>
);

export default connect()(BeerView)
