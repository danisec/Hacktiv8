import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Layout = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.title}>Hallo Guys Saya Disini</Text>
        </View>
        <View style={[styles.box, styles.box3]} />
      </View>

      <View style={styles.container2}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.title}>Hallo Guys Saya Disini</Text>
        </View>
        <View style={[styles.box, styles.box3]} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginTop: 40,
    paddingLeft: 10,
  },
  box: {
    height: 100,
    width: 100,
  },
  box1: {
    backgroundColor: 'royalblue',
  },
  box2: {
    backgroundColor: 'orange',
  },
  box3: {
    flex: 0.5,
    backgroundColor: 'peru',
  },
});

export default Layout;
