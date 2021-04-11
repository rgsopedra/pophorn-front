import React from 'react';

import {WithGameContext, useGameState, ACTIONS} from './game-state'


function Challenge ({challenge, onCompleted, onSkipped}) {
    return <>
        <div className='otherText'>{challenge.text}</div>
        <button onClick={onCompleted}>Completada</button>
        <button onClick={onSkipped}>Rechazada</button>
    </>
}

function Ending ({onReset}) {
    return <>
        <span className='otherText'>Juego finalizado</span>
        <button onClick={onReset}>Restart</button>
    </>
}

function Game () {
    const [state, dispatch] = useGameState();

    const challenge = state.challenges[state.currentChallenge];

    return <>
        {challenge
            ? <>
                <div className='otherText'>Current Player: {state.players[state.currentChallenge % state.players.length]}</div>
                <Challenge
                    challenge={challenge}
                    onCompleted={() => dispatch({type: ACTIONS.COMPLETE_CHALLENGE})}
                    onSkipped={() => dispatch({type: ACTIONS.SKIP_CHALLENGE})}
                ></Challenge>
                <div className='otherText'>{state.currentChallenge + 1} / {state.challenges.length}</div>
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