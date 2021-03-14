import React from 'react'
import {ImageBackground, KeyboardAvoidingView, Picker, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {Button, Icon, Input} from 'react-native-elements'
import PropTypes from 'prop-types'
import styles from './PlayersConfigScreen.Styles'
import globalStyles from '../../assets/styles'
import {playerType} from '../../types/playerType'
import {genderType} from '../../types/genderType'
import backgroundImage from '../../assets/images/background.png'

export class PlayersConfigScreen extends React.Component {

  static propTypes = {
    players: PropTypes.arrayOf(playerType),
    setPlayers: PropTypes.func
  }

  constructor() {
    super()
    this.state = {
      players: []
    }
  }

  static getDerivedStateFromProps = (props, state) => {
    return {
      ...state,
      players: state.players.length ? state.players : props.players.map(player => ({
        ...player,
        nicknameError: false,
        ref: React.createRef()
      }))
    }
  }

  validateForm() {
    if (this.state.players.some(player => !player.nickname)) {
      this.setState(prevState => ({
        ...prevState,
        players: prevState.players.map(player => {
          if (!player.nickname) {
            player.ref.current.shake()
            return {
              ...player,
              nicknameError: true
            }
          } else {
            return player
          }
        })
      }))
      return false
    } else {
      return true
    }
  }

  submitForm() {
    if (this.validateForm()) {
      this.props.setPlayers(this.state.players.map(player => {
        delete player.nicknameError
        delete player.ref
        return player
      }))
      this.props.navigation.navigate('LevelsConfig')
    }
  }

  render() {
    return (
      <ImageBackground source={backgroundImage} style={globalStyles.background}>
        <KeyboardAvoidingView style={globalStyles.container}>
          <View style={globalStyles.titleContainer}>
            <Text style={globalStyles.title}>
              Añade los jugadores
            </Text>
            <Text style={globalStyles.subtitle}>
              React Native still has the concept of style inheritance, but limited to text subtrees. In this case, the
              second part will be both bold and red.
            </Text>
          </View>
          <ScrollView style={styles.container}>
            {this.state.players.map((player, i) => (
                <View key={i} style={styles.containerRow}>
                  <View style={styles.inputContainer}>
                    <Input
                      ref={player.ref}
                      value={player.nickname}
                      placeholder={'Escribe tu nick'}
                      onChangeText={text => {
                        this.setState(prevState => ({
                          ...prevState,
                          players: prevState.players.map((p, index) => index === i ? {
                            ...p,
                            nickname: text,
                            nicknameError: text.trim() === ''
                          } : p)
                        }))
                      }}
                      label={'Nick'}
                      errorMessage={'Este campo es obligatorio'}
                      errorStyle={player.nicknameError ? {display: 'flex'} : {display: 'none'}}
                    />
                  </View>
                  <View style={styles.pickerContainer}>
                    <Text style={globalStyles.pickerLabel}>Género</Text>
                    <Picker
                      style={globalStyles.picker}
                      selectedValue={player.gender}
                      onValueChange={itemValue =>
                        this.setState(prevState => ({
                          ...prevState,
                          players: prevState.players.map((p, index) => index === i ? {
                            ...p,
                            gender: itemValue
                          } : p)
                        }))
                      }>
                      {Object.keys(genderType).map((gender, j) => (
                        <Picker.Item key={j} label={gender === genderType.male ? 'hombre' : 'mujer'}
                                     value={genderType[gender]}/>))}
                    </Picker>
                  </View>
                  {this.state.players.length > 2 &&
                  <View style={styles.iconContainer}>
                    <Icon
                      name='times-circle'
                      onPress={() =>
                        this.setState(prevState => ({
                          ...prevState,
                          players: prevState.players.filter((player, index) => index !== i)
                        }))
                      }
                    />
                  </View>
                  }
                </View>
              )
            )}
            {this.state.players.length < 6 &&
            <TouchableOpacity
              style={styles.addPlayerButton}
              onPress={() =>
                this.setState(prevState => ({
                  ...prevState,
                  players: [
                    ...prevState.players,
                    {
                      nickname: '',
                      gender: genderType.female,
                      nicknameError: false,
                      ref: React.createRef()
                    }
                  ]
                }))
              }
            >
              <Icon name='plus-circle'/>
              <Text style={[globalStyles.subtitle, styles.addPlayerText]}>Añadir jugador</Text>
            </TouchableOpacity>
            }

          </ScrollView>
          <Button onPress={() => this.submitForm()}
                  title="Continuar"/>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}
