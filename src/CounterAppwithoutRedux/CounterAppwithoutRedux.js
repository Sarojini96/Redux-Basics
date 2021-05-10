import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
class CounterAppwithoutRedux extends Component {
  state = {
    counter: 0,
  };
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: 200,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={() => this.increment()}>
            <Text> Increase </Text>
          </TouchableOpacity>
          <Text> {this.state.counter} </Text>
          <TouchableOpacity onPress={() => this.decrement()}>
            <Text> Decrease </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CounterAppwithoutRedux;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
