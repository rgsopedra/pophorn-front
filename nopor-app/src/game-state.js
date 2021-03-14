import React, { useContext, useReducer } from "react";

export const ACTIONS = Object.freeze({
    RESET: 'reset',
    COMPLETE_CHALLENGE: 'complete_challenge',
    SKIP_CHALLENGE: 'skip_challenge',
})

function initState () {
    return {
        players: ['Alice', 'Bob', 'Carol', 'Dave'],
        challenges: [
            {text: 'Texto de la prueba 1'},
            {text: 'Texto de la prueba 2'},
            {text: 'Texto de la prueba 3'},
        ],
        currentChallenge: 0,
    };
}

function updateState (state, action) {
    console.log(state, action)
    switch (action.type) {
        case ACTIONS.RESET:
            return initState();
        case ACTIONS.COMPLETE_CHALLENGE:
        case ACTIONS.SKIP_CHALLENGE:
            return {
                ...state,
                currentChallenge: state.currentChallenge + 1,
            };
        default:
            return state;
    }
}

const GameStateContext = React.createContext(null);

export function WithGameContext ({children}) {
    const [state, dispatch] = useReducer(updateState, null, initState);

    return (
        <GameStateContext.Provider value={[state, dispatch]}>
            {children}
        </GameStateContext.Provider>
    );
}

export function useGameState () {
    const [state, dispatch] = useContext(GameStateContext);

    return [state, dispatch];
}