import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default class App extends Component {
  state = {
    podcast: [
      {
        id: 1,
        title: 'Ceritanya developer podcast',
        url: 'https://ceritanya.developer.com',
      },
      {
        id: 2,
        title: 'DataPods',
        url: 'https://datapods.com',
      },
      {
        id: 3,
        title: 'Wicara Podcast',
        url: 'https://wicarapodcast.com',
      },
    ],
  }

  renderItem = (podcast) => (
    <Text style={styles.title} key={podcast.id}>
      {podcast.title}
    </Text>
  )

  render() {
    const podcastList = this.state.podcast.map(this.renderItem)

    return (
      <SafeAreaView style={styles.container}>
        <View>{podcastList}</View>
      </SafeAreaView>
    )
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
    fontSize: 28,
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
})
