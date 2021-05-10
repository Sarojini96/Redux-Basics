import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
class CounterAppwithRedux extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: 200,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={() => this.props.increment()}>
            <Text> Increase </Text>
          </TouchableOpacity>
          <Text> {this.props.counter} </Text>
          <TouchableOpacity onPress={() => this.props.decrement()}>
            <Text> Decrease </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'}),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterAppwithRedux);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
