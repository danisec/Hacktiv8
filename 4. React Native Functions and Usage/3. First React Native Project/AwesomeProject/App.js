import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Greeting from './src/components/Greeting.js';

export default class App extends Component {
  state = {
    Greeting: 'Selamat datang do course React Native',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Hallo</Text>
          <Greeting text={this.state.Greeting} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: '#000',
    fontSize: 40,
    fontWeight: '700',
  },
  span: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#1E1E1E',
    fontSize: 20,
    marginTop: 20,
    fontWeight: '600',
  },
});
