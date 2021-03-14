import { connect } from 'react-redux'
import { InteractionConfigScreen } from './InteractionConfigScreen'
import { setInteractionMM, setInteractionWW, setInteractionWM } from '../../actions/GameConfigActions'

const mapStateToProps = state => ({
  interactionMM: state.gameConfigReducer.interactionMM, 
  interactionWW: state.gameConfigReducer.interactionWW,
  interactionWM: state.gameConfigReducer.interactionWM,
  showInteractionMM: state.gameConfigReducer.showInteractionMM,
  showInteractionWW: state.gameConfigReducer.showInteractionWW,
  showInteractionWM: state.gameConfigReducer.showInteractionWM,
  players: state.gameConfigReducer.players,
})

const mapDispatchToProps = dispatch => ({
  setInteractionMM: interactionMM => {
    dispatch(setInteractionMM(interactionMM))
  },
  setInteractionWW: interactionWW => {
    dispatch(setInteractionWW(interactionWW))
  },
  setInteractionWM: interactionWM => {
    dispatch(setInteractionWM(interactionWM))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InteractionConfigScreen)
