import React, { Component } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

const API = 'https://podspace-server-vzesammxet.now.sh/podcasts'

export default class App extends Component {
  state = {
    podcasts: [],

    refreshing: false,
  }

  async componentDidMount() {
    const result = await axios(API)
    this.setState({
      podcasts: result.data,
    })
  }

  renderItem = ({ item }) => (
    <View
      style={{ padding: 15, borderBottomColor: '#ddd', borderBottomWidth: 1 }}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={{ fontSize: 15 }}>{item.url}</Text>
    </View>
  )

  onRefresh = async () => {
    this.setState({ refreshing: true }, () => {
      const data = this.state.podcasts.concat({
        id: 4,
        title: 'New Podcast',
        url: 'https://newpodcast.com',
      })

      this.setState({
        podcasts: data,
        refreshing: false,
      })
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.podcasts}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
        />
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
