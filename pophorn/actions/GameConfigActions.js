
import {
  SET_PLAYERS, SET_INTERACTION_WW, SET_INTERACTION_MM, SET_INTERACTION_WM, SET_MAX_LEVEL
} from './GameConfigActionConstants'


export function setPlayers(players) {
  return {
    type: SET_PLAYERS,
    players
  }
}

export function setInteractionMM(interactionMM) {
  return {
    type: SET_INTERACTION_MM,
    interactionMM
  }
}

export function setInteractionWW(interactionWW) {
  return {
    type: SET_INTERACTION_WW,
    interactionWW
  }
}

export function setInteractionWM(interactionWM) {
  return {
    type: SET_INTERACTION_WM,
    interactionWM
  }
}

export function setMaxLevel(maxLevel) {
  return {
    type: SET_MAX_LEVEL,
    maxLevel
  }
}
