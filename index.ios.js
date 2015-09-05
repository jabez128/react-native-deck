/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native')
var App = require('./lib/App.js')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React

var Deck = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('Deck', () => Deck);
