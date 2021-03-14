import React from 'react'
import {
  Button, ScrollView, Text, TouchableOpacity, View
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './HomeScreen.Styles'

export class HomeScreen extends React.Component {
  static propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    setPlayers: PropTypes.func
  }

  static navigationOptions = {
    title: 'Welcome home'
  }

  constructor() {
    super()
    this.state = {}
  }

  render() {
    const playersParam = this.props.navigation.getParam('players', [
      { name: 'nobody, fool' }
    ])
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            <View style={styles.getStartedContainer}>
              <Text style={styles.getStartedText}>
                Random text changed by
                {' '}
                {this.props.players[0].name}
              </Text>
            </View>
            <View style={styles.helpContainer}>
              <TouchableOpacity
                style={styles.helpLink}
                onPress={() => this.props.setPlayers([{ name: 'Jenny' }])}
              >
                <Text style={styles.helpLinkText}>Set player Jenny</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.helpLink}
                onPress={() => this.props.setPlayers([{ name: 'Tester' }])}
              >
                <Text style={styles.helpLinkText}>Set player Tester</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.getStartedText}>
              You have navigated with
              {' '}
              {playersParam[0].name}
            </Text>
            <View style={styles.helpContainer}>
              <Button
                title="Navigate home with Paco Jones"
                onPress={() => this.props.navigation.push('Home', {
                  players: [{ name: 'Paco Jones' }]
                })}
              />
            </View>
            <View style={styles.helpContainer}>
              <Button
                title="Go back"
                onPress={() => this.props.navigation.goBack()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
