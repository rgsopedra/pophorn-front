import React from 'react'
import {ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {Button, Icon} from 'react-native-elements'
import PropTypes from 'prop-types'
import styles from './LevelsConfigScreen.Styles'
import globalStyles from '../../assets/styles'
import backgroundImage from '../../assets/images/background.png'

export class LevelsConfigScreen extends React.Component {
  static propTypes = {
    maxLevel: PropTypes.number,
    setMaxLevel: PropTypes.func,
    showInteractionMM: PropTypes.bool,
    showInteractionWW: PropTypes.bool,
    showInteractionWM: PropTypes.bool
  }

  constructor() {
    super()
    this.state = {}
  }

  navigateToPage(interaction) {
    const page = interaction ? 'InteractionConfig' : 'Home' // In the future, this will be either InteractionConfig or the game itself
    this.props.navigation.navigate(page)
  }


  render() {
    return (
      <ImageBackground source={backgroundImage} style={globalStyles.background}>
        <View style={globalStyles.container}>
          <View style={globalStyles.titleContainer}>
            <Text style={globalStyles.title}>
              Seleccione el nivel
            </Text>
            <Text style={globalStyles.subtitle}>
              React Native still has the concept of style inheritance, but limited to text subtrees.
              In this case, the second part will be both bold and red.
            </Text>
          </View>
          <ScrollView style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.softButton]}
              onPress={() => this.props.setMaxLevel(0)}
            >
              <View style={styles.levelTitleIcon}>
                <Text style={styles.title}> Probemos... </Text>
                <Icon name='thermometer-empty'/>
              </View>
              <Text style={styles.description}>
                Preguntas picantes, pruebas para conoceros mejor... Una forma suave y especiada
                de salir de la rutina.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.setMaxLevel(1)}
            >
              <View
                style={[styles.button, styles.mediumButton, this.props.maxLevel >= 1 ? null : styles.unselectedButton]}>
                <View style={styles.levelTitleIcon}>
                  <Text style={styles.title}> Juguemos... </Text>
                  <Icon name='thermometer-half'/>
                </View>
                <Text style={styles.description}>
                  Preguntas atrevidas, situaciones nuevas, contacto físico... Sube la temperatura
                  y si llegáis hasta aquí quedará poco a la imaginación.
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.setMaxLevel(2)}
            >
              <View
                style={[styles.button, styles.hotButton, this.props.maxLevel === 2 ? null : styles.unselectedButton]}>
                <View style={styles.levelTitleIcon}>
                  <Text style={styles.title}> Follemos... </Text>
                  <Icon name='thermometer-full'/>
                </View>
                <Text style={styles.description}>
                  Sexo y todo lo que lo rodea, situaciones muy picantes que os ayudarán a romper
                  esas últimas y molestas barreras.
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <Button
            title="Siguiente"
            onPress={() => this.navigateToPage(this.props.showInteractionMM
              || this.props.showInteractionWM || this.props.showInteractionWW)}
          />
        </View>
      </ImageBackground>
    )
  }
}
