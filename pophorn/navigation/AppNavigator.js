import {createAppContainer, createStackNavigator} from 'react-navigation'
import InteractionConfigScreen from '../screens/interactionConfig'
import PlayersConfigScreen from '../screens/playersConfig'
import levelsConfigScreen from '../screens/levelsConfig'

const MainNavigator = createStackNavigator(
  {
    PlayersConfig: {screen: PlayersConfigScreen},
    LevelsConfig: {screen: levelsConfigScreen},
    InteractionConfig: {screen: InteractionConfigScreen}
  },
  {
    headerMode: 'none'
  }
)


const App = createAppContainer(MainNavigator)

export default App
