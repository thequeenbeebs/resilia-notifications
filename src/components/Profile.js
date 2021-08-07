import React from 'react';

function Profile ( { user } ) {

    return (
        <div>
            <h2 className="center">Profile Page</h2>
            <h3>Name: {user.name}</h3>
            <h4>Email: {user.email_address}</h4>
            <h4>Organization: {user.organization}</h4>
        </div>
            
    )
}

export default Profile;