import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePicker from "react-native-modal-datetime-picker";
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux'
import moment from 'moment'

import styles from './styles'
import { beerAction, filterAction } from '../../core/types';
import { BeerItem } from './listItem';

class MainList extends React.PureComponent{
  static navigationOptions = {
    title: 'Beers',
  };
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.props.setBrewFilter(moment(date).format('MM-YYYY'))
    this.hideDateTimePicker();
  };

  componentDidMount() {
    this.props.getMore()
  }

  selectBeer = (id) => {
    this.props.selectBeer(id)
    this.props.navigation.navigate('BeerView')
  }

  render() {
    const { nameFilter, setNameFilter, brewFilter } = this.props
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Search by name"
          onChangeText={setNameFilter}
          value={nameFilter}
          lightTheme
        />
        <Button
          title={brewFilter ? `brew after: ${brewFilter}` :"Set brew date"}
          onPress={this.showDateTimePicker} />

        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />

        <FlatList
          data={this.props.list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) =>
            <BeerItem
              {...item}
              onPress={() => this.selectBeer(item.id)}
            />}
          onEndReached={this.props.getMore}
          ItemSeparatorComponent={() => <View style={styles.separator}/>}/>
      </View>
    )
  }
}

const mapState = state => ({
  list: state.beer.list,
  nameFilter: state.filters.name,
  brewFilter: state.filters.brew,
})

const mapAction = dispatch => ({
  getMore: () => dispatch({type: beerAction.FETCH_MORE}),
  setNameFilter: (name) => dispatch({type: filterAction.SET_NAME_FILTER, payload: name}),
  setBrewFilter: (date) => dispatch({type: filterAction.SET_BREW_FILTER, payload: date}),
  selectBeer: (id) => dispatch({type: beerAction.SELECT_BEER, payload: id}),
})

export default connect(mapState, mapAction)(MainList)
