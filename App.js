import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Image } from 'react-native';
import CardFeed from './components/CardFeed';
import database from './Fire.js'
// import Posts from './screens/Posts';

export default class App extends React.Component {
  compo
  render() {
    return (
      <View style={styles.container}>
        <Text>####### Trinh nha thuong ########</Text>
        
        <CardFeed></CardFeed>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  // padding: 50,
  marginTop: 150,
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
