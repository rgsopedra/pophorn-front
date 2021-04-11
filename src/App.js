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

function InitGame ({onStart}) {
    return <>
        <h2 className='otherText'>Start the game, bitch!</h2>
        <button onClick={onStart}>Start</button>
    </>
}

function httptest(){
    // GET request using fetch with error handling
    fetch('/.netlify/functions/challenges')
        .then(async response => {
            const data = await response.json();
            console.log(data)
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            // this.setState({ totalReactPackages: data.total })
        })
        .catch(error => {
            // this.setState({ errorMessage: error.toString() });
            console.error('There was a penis!', error);
        });
}

function Game () {
    const [state, dispatch] = useGameState();

    const challenge = state.challenges[state.currentChallenge];
    const startGame = state.startGame

    return <div style={{'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'flexDirection': 'column'}}>
        {startGame
            ? <InitGame onStart={() => 
                {httptest()
                dispatch({type: ACTIONS.START})}
            }/>
            : <>
            <div className='otherText'>Current Player: {state.players[state.currentChallenge % state.players.length]}</div>
            <Challenge
                challenge={challenge}
                onCompleted={() => dispatch({type: ACTIONS.COMPLETE_CHALLENGE})}
                onSkipped={() => dispatch({type: ACTIONS.SKIP_CHALLENGE})}
            ></Challenge>
            <div className='otherText'>{state.currentChallenge + 1} / {state.challenges.length}</div>
        </>
        }
    </div>
}


export default function App () {
    return (
        <WithGameContext>
            <Game/>
        </WithGameContext>
    )
}