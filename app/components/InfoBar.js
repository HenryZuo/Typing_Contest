import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const InfoBar = ({timer, userInput, wordList, totalScore, streakCount, onUpdateScore, onUpdateStreak }) => {
    let scoreTracker = 0;
    let streakStartIndex = 0;
    const wordChar = wordList.join(' ').split('');
    const userChar = userInput.join(' ').split('');

    for (let i = 0; i < userChar.length; i++) {
        if (userChar[i] === wordChar[i]) {
            scoreTracker++;
        }
        streakStartIndex = i + 1;
    }

    onUpdateScore(scoreTracker);
    onUpdateStreak(userChar.length - streakStartIndex);

    return (
        <div className="card infoBar">
            <p>
                <strong>Time Remaining: {timer}</strong> <br/>
                <strong>Total Score: {totalScore}</strong> <br/>
                {/* <strong>Current Streak: {streakCount}</strong> */}
            </p>
        </div>
);
};

InfoBar.propTypes = {
    timer: PropTypes.number,
    totalScore: PropTypes.number,
    userInput: PropTypes.array,
    wordList: PropTypes.array,
    streakCount: PropTypes.number,
    onUpdateScore: PropTypes.func,
    onUpdateStreak: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        timer: state.timer,
        userInput: state.userInput,
        wordList: state.wordList,
        totalScore: state.totalScore,
        streakCount: state.streakCount
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        onUpdateScore: (scoreTracker)=> {
            dispatch({type: 'UPDATE_SCORE', scoreTracker});
        },
        onUpdateStreak: (streakTracker)=> {
            dispatch({type: 'UPDATE_STREAK', streakTracker});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoBar);
