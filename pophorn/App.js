import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { Provider } from 'react-redux'
import {
  Platform, StatusBar
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ThemeProvider } from 'react-native-elements'
import { store } from './store'
import AppNavigator from './navigation/AppNavigator'
import theme from './assets/theme'

const robotDev = require('./assets/images/robot-dev.png')
const robotProd = require('./assets/images/robot-prod.png')
const spaceMono = require('./assets/fonts/SpaceMono-Regular.ttf')


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    )
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator style={{ backgroundColor: 'black' }} />
      </ThemeProvider>
    </Provider>
  )
}
async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([robotDev, robotProd]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': spaceMono
    })
  ])
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error)
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true)
}
