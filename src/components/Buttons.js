import React from 'react';
import '../stylesheets/Buttons.css';

const Buttons = () => {
    return (
        <div className="buttons">
            <button className="cancel-button" disabled>
                Cancel
            </button>
            <button className="save-button">SAVE</button>
        </div>
    );
};

export default Buttons;
