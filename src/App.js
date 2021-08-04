import React, { useState, useEffect } from 'react';
import Notification from './Notification'

function App() {
  const [notifications, setNotifications] = useState([])
  const [user, setUser] = useState(['Blaire'])

  useEffect(() => {
    fetch('http://localhost:3000/notifications')
      .then(resp => resp.json())
      .then(notes => setNotifications(notes))
  })
  return (
    <div>
      <h1>Resilia Notifications</h1>
      {notifications.map(notification => <Notification message={notification.message}/>)}
    </div>
  );
}

export default App;
