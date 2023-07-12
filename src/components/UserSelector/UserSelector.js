import React, { useState } from 'react';
import "./UserSelector.css";

const UserSelector = ({ userList, onSelectUser }) => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (user) => {
        if (selectedButton === user) {
            setSelectedButton(null);
        } else {
            setSelectedButton(user);
        }
        onSelectUser(user)
    };

    return (
        <div className="button-group">
            {userList.map((user) => (
                <div className='thumbnail' style={{ display: 'flex', alignItems: 'center', gap: '10px', flexDirection: 'column' }}>
                {
                    user.profile.avatar ? (
                        <img
                            src={`http://localhost:5000/${user.profile.avatar}`}
                            alt="Avatar"
                            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                        />
                    ) : (
                        <img
                            src={'https://randomuser.me/api/portraits/men/1.jpg'}
                            alt="Avatar 2"
                            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                        />
                    )
                }
            
                <button
                    key={user.email}
                    className={`button ${selectedButton === user ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(user)}
                >
                    {user.email}
                </button>
            </div>

            ))}
        </div>
    );
};

export default UserSelector;
