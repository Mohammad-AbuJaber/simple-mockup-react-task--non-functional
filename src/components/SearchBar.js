import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/SearchBar.css';

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className={`search-bar ${isFocused ? 'focused' : ''}`}>
            <FontAwesomeIcon icon={faSearch} className="search-icon"/>
            <input
                type="text"
                placeholder="Find members"
                className="search-input"
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
};

export default SearchBar;
