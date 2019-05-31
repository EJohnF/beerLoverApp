import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux'

import styles from './styles'
import { beerAction } from '../../core/types';
import { BeerItem } from './listItem';

class MainList extends React.PureComponent{
  static navigationOptions = {
    title: 'Beers',
  };

  componentDidMount() {
    this.props.getMore()
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <FlatList
            data={this.props.list}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => <BeerItem {...item}/>}
            onEndReached={this.props.getMore}
            ItemSeparatorComponent={() => <View style={styles.separator}/>}/>
        </View>
      </View>
    )
  }
}

const mapState = state => ({
  list: state.beer.list,
})

const mapAction = dispatch => ({
  getMore: () => dispatch({type: beerAction.FETCH_MORE})
})

export default connect(mapState, mapAction)(MainList)
