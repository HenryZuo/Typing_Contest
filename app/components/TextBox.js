import React from 'react';
import PropTypes from 'prop-types';


const TextBox = ({onInput, currentIndex, userInput}) => {
    return (
        <div>
          <input placeholder="Type Here!" value={userInput[currentIndex[0]]} type="text" onChange={onInput} />
        </div>
);
};


TextBox.propTypes = {
    onInput: PropTypes.func,
    userInput: PropTypes.array,
    currentIndex: PropTypes.array
};

export default TextBox;
