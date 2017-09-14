import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const WordBox = ({wordList, userInput}) => {
    return (
        <div className="card">
            <p>
                {wordList.join(' ').split('').map(
                    (char, index)=>{
                        if(index < userInput.join(' ').split('').length) {
                            if(char === userInput.join(' ').split('')[index]) {
                                return <span key={index} className="correct">{char}</span>;
                            }
                            return <span key={index} className="wrong">{char}</span>;
                        }
                        return <span key={index} className="inactive">{char}</span>;
                    }
                )}
            </p>
        </div>
);
};

WordBox.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.array,
};


const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.wordList,
        userInput: state.userInput
    };
};

const mapDispatchToProps = () => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordBox);
