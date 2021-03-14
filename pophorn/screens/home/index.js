import { connect } from 'react-redux'
import { HomeScreen } from './HomeScreen'
import { setPlayers } from '../../actions/GameConfigActions'

const mapStateToProps = (state) => ({
  players: state.gameConfigReducer.players
})

const mapDispatchToProps = (dispatch) => ({
  setPlayers: (players) => {
    dispatch(setPlayers(players))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
