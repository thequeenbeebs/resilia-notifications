import React from 'react';

function Notification (props ) {
    return (
        <div>
            <p>{props.message}</p>
            {/* <button>CLOSE</button> */}
        </div>
    )
}

export default Notification;