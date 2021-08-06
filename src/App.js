import React, { useState, useEffect } from 'react';
import Notification from './Notification'

function App() {
  const [notifications, setNotifications] = useState([])
  const [user, setUser] = useState('Blaire') // currently hard coded

  useEffect(() => {
    if (localStorage.getItem('notifications')) {

      setNotifications(JSON.parse(localStorage.notifications))

    } else {

      let reqPack = {}
        reqPack.method = "POST"
        reqPack.headers = {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
        reqPack.body = JSON.stringify({
          name: user
        })

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
    <>
      <img className="header" src="//images.squarespace-cdn.com/content/v1/5e45fd7b05ae4e3f2f2ed60f/1581645908407-OU71JDZN3L0QV38JKDGQ/Resilia_Final_FullColor.jpg?format=1500w" alt="Resilia"></img>
      <main>
        <h3>Welcome, {user}!</h3>
        <h2 className="center">Notifications</h2>
        {notifications.map(notification => <Notification key={notification.id} notification={notification} deleteNotification={deleteNotification}/>)}
      </main>
      
    </>
  );
}

export default App;
