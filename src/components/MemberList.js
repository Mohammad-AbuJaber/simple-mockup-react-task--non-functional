import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons";

const MemberList = () => {
    const [isChecked, setIsChecked] = useState([]);
    const members = ['Member 1', 'Member 2', 'Member 3', 'Member 4'];

    const handleCheckboxChange = (index) => {
        const updatedChecked = [...isChecked];
        updatedChecked[index] = !updatedChecked[index];
        setIsChecked(updatedChecked);
    };

    return (
        <div className="member-list">
            {members.map((member, index) => (
                <div key={index} className="member-item">
                    <div className="member-info">
                        <FontAwesomeIcon
                            icon={faUser}
                            className="user-icon"
                            style={{color: isChecked[index] ? 'black' : 'gray'}}
                        />
                        <span className="member-name">{member}</span>
                    </div>
                    <div className="member-checkbox">
                        <input
                            type="checkbox"
                            id={`checkbox-${index}`}
                            checked={isChecked[index]}
                            onChange={() => handleCheckboxChange(index)}
                        />
                        <label htmlFor={`checkbox-${index}`}></label>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MemberList;
