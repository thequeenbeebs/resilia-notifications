import React from 'react';

function Notification ( { notification, deleteNotification} ) {
    return (
        <div>
            <p>{notification.message}</p>
            <button onClick={() => deleteNotification(notification)}>CLOSE</button>
        </div>
    )
}

export default Notification;