import { createStackNavigator, createAppContainer } from 'react-navigation';
import BeerView from './view/BeerView';
import MainList from './view/MainList';


const AppNavigator = createStackNavigator({
  BeerView,
  MainList,
}, {
  initialRouteName: 'MainList'
});

export default createAppContainer(AppNavigator);
