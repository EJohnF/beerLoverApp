import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainNavigator from './MainNavigator';
import store from './core/store';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
