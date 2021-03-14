import React, { useContext, useReducer } from "react";

export const ACTIONS = Object.freeze({
    RESET: 'reset',
    COMPLETE_TRIAL: 'complete_state',
    SKIP_TRIAL: 'skip_trial',
})

function initState () {
    return {
        players: ['Alice', 'Bob', 'Carol', 'Dave'],
        trials: [
            {text: 'Texto de la prueba 1'},
            {text: 'Texto de la prueba 2'},
            {text: 'Texto de la prueba 3'},
        ],
        currentTrial: 0,
    };
}

function updateState (state, action) {
    console.log(state, action)
    switch (action.type) {
        case ACTIONS.RESET:
            return initState();
        case ACTIONS.COMPLETE_TRIAL:
        case ACTIONS.SKIP_TRIAL:
            return {
                ...state,
                currentTrial: state.currentTrial + 1,
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