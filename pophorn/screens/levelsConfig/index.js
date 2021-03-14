import { connect } from 'react-redux'
import { LevelsConfigScreen } from './LevelsConfigScreen'
import { setMaxLevel } from '../../actions/GameConfigActions'

const mapStateToProps = (state) => ({
  maxLevel: state.gameConfigReducer.maxLevel,
  showInteractionMM: state.gameConfigReducer.showInteractionMM,
  showInteractionWW: state.gameConfigReducer.showInteractionWW,
  showInteractionWM: state.gameConfigReducer.showInteractionWM,
})

const mapDispatchToProps = (dispatch) => ({
  setMaxLevel: (maxLevel) => {
    dispatch(setMaxLevel(maxLevel))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelsConfigScreen)
