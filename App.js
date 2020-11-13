import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  TouchableOpacity,
  LayoutAnimation,
  Easing,
  Animated,
} from 'react-native';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends Component {
  state = {
    value: new Animated.Value(0),
  };

  _onPress = () => {
    Animated.timing(this.state.value, {
      toValue: 1,
      duration: 2000,
      // useNativeDriver: true,
    }).start();
  };
  _onPress2 = () => {
    Animated.timing(this.state.value, {
      toValue: 0,
      duration: 2000,
      // useNativeDriver: true,
    }).start();
  };
  componentDidMount() {
    // NativeModules.MyModule.addWithCallback(1, 2, (res) => {
    //   console.log(res);
    // });
    // NativeModules.MyModule.addWithPromise(1, 2)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log({...err}));
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.box,
            {
              marginBottom: this.state.value.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [100, 50, 250],
              }),
            },
          ]}
        />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPress2}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
