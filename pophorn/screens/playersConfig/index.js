import { connect } from 'react-redux'
import { PlayersConfigScreen } from './PlayersConfigScreen'
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
  mapDispatchToProps,
)(PlayersConfigScreen)
