import React from 'react';
import SearchBar from './SearchBar';
import MemberList from './MemberList';
import Buttons from './Buttons';

const ParentComponent = () => {
    return (
        <div className="app-container">
            <div className="parent-component">
                <h1>Add members to Front-end development team</h1>
                <SearchBar/>
                <MemberList/>
                <Buttons/>
            </div>
        </div>
    );
};

export default ParentComponent;
