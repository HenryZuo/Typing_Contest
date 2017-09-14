import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';

const GameContainer = ({wordList, timer, userInput, currentIndex, onStartGame, onEndGame, onNextWord, onCharAdd, onDecrementTime }) => {
    let interval;

    if (timer <= 0) {
        onEndGame();
        clearInterval(interval);
    }

    const onInput = (e) => {
        // YOUR ON INPUT FUNCTION HERE
        if(currentIndex[0] === 0 && currentIndex[1] === 0) {
            interval = setInterval(()=>{onDecrementTime();}, 1000);
            onStartGame();
        }
        const inputVal = e.target.value;
        if(inputVal[inputVal.length - 1] === ' ') {
            onNextWord();
        }
        if(wordList[currentIndex[0]].length >= inputVal.length) {
            onCharAdd(inputVal);
        }
    };

    return (
        <div className="container-fluid gameContainer">
            <InfoBar />
            <TextBox onInput={onInput} userInput={userInput} currentIndex={currentIndex} />
            <WordBox />
        </div>
    );
};

GameContainer.propTypes = {
    wordList: PropTypes.array,
    timer: PropTypes.number,
    totalScore: PropTypes.number,
    userInput: PropTypes.array,
    currentIndex: PropTypes.array,
    onStartGame: PropTypes.func,
    onEndGame: PropTypes.func,
    onNextWord: PropTypes.func,
    onCharAdd: PropTypes.func,
    onDecrementTime: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.wordList,
        timer: state.timer,
        totalScore: state.totalScore,
        streakCount: state.streakCount,
        userInput: state.userInput,
        currentIndex: state.currentIndex
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        onStartGame: ()=> {
            dispatch({type: 'START_GAME'});
        },
        onEndGame: ()=> {
            dispatch({type: 'END_GAME'});
        },
        onNextWord: ()=> {
            dispatch({type: 'NEXT_WORD'});
        },
        onCharAdd: (inputVal)=> {
            dispatch({type: 'CHAR_ADDED', inputVal});
        },
        onDecrementTime: ()=> {
            dispatch({type: 'DECREMENT_TIMER'});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
