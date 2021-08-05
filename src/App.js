import React, { useState, useEffect } from 'react';
import Notification from './Notification'

function App() {
  const [notifications, setNotifications] = useState([])
  const [user, setUser] = useState('Blaire') // currently hard coded

  useEffect(() => {
    let reqPack = {}
        reqPack.method = "POST"
        reqPack.headers = {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
        reqPack.body = JSON.stringify({
          name: user
        })

    if (localStorage.getItem('notifications')) {
      setNotifications(JSON.parse(localStorage.notifications))
    } else {
      fetch('http://localhost:3000/notifications', reqPack)
      .then(resp => resp.json())
      .then(notes => {
        setNotifications(notes)
        localStorage.setItem('notifications', JSON.stringify(notes))
      })
    }
    
  }, [])

  

  let deleteNotification = (notification) => {
    fetch(`http://localhost:3000/notifications/${notification.id}`, {method: 'DELETE'})
    
    let updated = notifications.filter(n => n.id !== notification.id)
    setNotifications(updated)
    localStorage.setItem('notifications', JSON.stringify(updated))
  }

  return (
    <div>
      <h1>Welcome, {user}!</h1>
      <h2>Notifications</h2>
      {notifications.map(notification => <Notification key={notification.id} notification={notification} deleteNotification={deleteNotification}/>)}
    </div>
  );
}

export default App;
