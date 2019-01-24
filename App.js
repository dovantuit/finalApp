import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Image } from 'react-native';
import CardFeed from './components/CardFeed';
// import Posts from './screens/Posts';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        
        <CardFeed></CardFeed>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
