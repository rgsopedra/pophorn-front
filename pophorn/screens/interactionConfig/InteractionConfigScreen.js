import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import PropTypes from 'prop-types'
import styles from './InteractionConfigScreen.Styles'
import globalStyles from '../../assets/styles'
import { CheckBox, Button } from 'react-native-elements'
import backgroundImage from '../../assets/images/background.png'

export class InteractionConfigScreen extends React.Component {
  static propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    interactionMM: PropTypes.bool,
    interactionWW: PropTypes.bool,
    interactionWM: PropTypes.bool,
    showInteractionMM: PropTypes.bool,
    showInteractionWW: PropTypes.bool,
    showInteractionWM: PropTypes.bool,
  }

  constructor() {
    super()
  }

  render() {
    return (
      <ImageBackground source={backgroundImage} style={globalStyles.background}>
        <View style={globalStyles.container}>
          <View style={globalStyles.titleContainer}>
            <Text style={globalStyles.title}>
              Selecciona la interacción.
            </Text>
            <Text style={globalStyles.subtitle}>
              React Native still has the concept of style inheritance, but limited to text subtrees. In this case, the second part will be both bold and red.
            </Text>
          </View>
          {this.props.showInteractionMM && 
            <CheckBox
              title='Interacción entre hombres'
              checked={this.props.interactionMM}
              onPress={() => this.props.setInteractionMM(!this.props.interactionMM)}
            />
          }
          {this.props.showInteractionWW && 
            <CheckBox
              title='Interacción entre mujeres'
              checked={this.props.interactionWW}
              onPress={() => this.props.setInteractionWW(!this.props.interactionWW)}
            />
          }
          {this.props.showInteractionWM && 
            <CheckBox
              title='Interacción entre hombres y mujeres'
              checked={this.props.interactionWM}
              onPress={() => this.props.setInteractionWM(!this.props.interactionWM)}
            />
          }
          <View style={globalStyles.submitButtonContainer}>
            <Button
              title="Empezar"
              onPress={() => console.log('Empezamos!!')}
              />
          </View>
        </View>
      </ImageBackground>
    )
  }
}
