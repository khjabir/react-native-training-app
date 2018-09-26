/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import { Header } from './components/common/Header';
import Router from './Router';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store = {store}>
          <Router />
      </Provider>
    );
  }
}
