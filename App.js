import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CounterAppwithoutRedux from './src/CounterAppwithoutRedux/CounterAppwithoutRedux';
import CounterAppwithRedux from './src/CounterAppwithRedux/CounterAppwithRedux';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
const initialState = {
  counter: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {counter: state.counter + 1};
    case 'DECREMENT':
      return {counter: state.counter - 1};
  }
  return state;
};
const store = createStore(reducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterAppwithRedux />
      </Provider>
    );
  }
}

export default App;
