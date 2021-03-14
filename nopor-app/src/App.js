import React, { useReducer } from 'react';

import {WithGameContext, useGameState, ACTIONS} from './game-state'


function Trial ({trial, onCompleted, onSkipped}) {
    return <>
        <div>{trial.text}</div>
        <button onClick={onCompleted}>Completada</button>
        <button onClick={onSkipped}>Rechazada</button>
    </>
}

function Ending ({onReset}) {
    return <>
        <span>Juego finalizado</span>
        <button onClick={onReset}>Restart</button>
    </>
}

function Game () {
    const [state, dispatch] = useGameState();

    const trial = state.trials[state.currentTrial];

    return <>
        {trial
            ? <>
                <div>Current Player: {state.players[state.currentTrial % state.players.length]}</div>
                <Trial
                    trial={state.trials[state.currentTrial]}
                    onCompleted={() => dispatch({type: ACTIONS.COMPLETE_TRIAL})}
                    onSkipped={() => dispatch({type: ACTIONS.SKIP_TRIAL})}
                ></Trial>
                <div>{state.currentTrial + 1} / {state.trials.length}</div>
            </>
            : <Ending onReset={() => dispatch({type: ACTIONS.RESET})}/>
        }
    </>
}


export default function App () {
    return (
        <WithGameContext>
            <Game/>
        </WithGameContext>
    )
}