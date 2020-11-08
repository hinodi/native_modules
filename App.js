import React, {Component} from 'react';
import {StyleSheet, Text, View, NativeModules} from 'react-native';

export default class App extends Component {
  componentDidMount() {
    NativeModules.MyModule.addWithCallback(1, 2, (res) => {
      console.log(res);
    });
    NativeModules.MyModule.addWithPromise(1, 2)
      .then((res) => console.log(res))
      .catch((err) => console.log({...err}));
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
