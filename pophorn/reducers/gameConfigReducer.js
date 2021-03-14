import { genderType } from '../types/genderType'
import {
  SET_PLAYERS, SET_INTERACTION_WW, SET_INTERACTION_MM, SET_INTERACTION_WM, SET_MAX_LEVEL
} from '../actions/GameConfigActionConstants'

const INITIAL_STATE = {
  players: [
    {
      nickname: '',
      gender: genderType.female
    },
    {
      nickname: '',
      gender: genderType.female
    }
  ],
  maxLevel: 0,
  interactionMM: true,
  interactionWW: true,
  interactionWM: true,
  showInteractionMM: true,
  showInteractionWW: true,
  showInteractionWM: true
}

export const gameConfigReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLAYERS: {
      const malePlayerCount = action.players.filter((player) => player.gender === 'male').length
      const femalePlayerCount = action.players.filter((player) => player.gender === 'female').length
      const playerCount = action.players.length
      return {
        ...state,
        players: action.players,
        showInteractionMM: playerCount > 2 && malePlayerCount > 1 && malePlayerCount < playerCount,
        showInteractionWW: playerCount > 2
          && femalePlayerCount > 1
          && femalePlayerCount < playerCount,
        showInteractionWM: malePlayerCount > 1 && femalePlayerCount > 1,
        interactionMM: (playerCount > 2 && malePlayerCount > 1
          && malePlayerCount < playerCount) || malePlayerCount === playerCount,
        interactionWW: (playerCount > 2 && femalePlayerCount > 1
          && femalePlayerCount < playerCount) || femalePlayerCount === playerCount,
        interactionWM: (malePlayerCount > 1 && femalePlayerCount > 1)
        || (malePlayerCount === 1 || femalePlayerCount === 1)
      }
    }
    case SET_INTERACTION_MM:
      return {
        ...state,
        interactionMM: action.interactionMM
      }
    case SET_INTERACTION_WW:
      return {
        ...state,
        interactionWW: action.interactionWW
      }
    case SET_INTERACTION_WM:
      return {
        ...state,
        interactionWM: action.interactionWM
      }
    case SET_MAX_LEVEL:
      return {
        ...state,
        maxLevel: action.maxLevel
      }
    default:
      return state
  }
}
