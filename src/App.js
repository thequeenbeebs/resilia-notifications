import React, { useState, useEffect } from 'react';
import Notification from './components/Notification';
import Profile from './components/Profile';

function App() {
  const [userData, setUserData] = useState({})
  const [userId, setId] = useState(3) // currently hard coded

  useEffect(() => {
    if (localStorage.getItem('userData')) {
      setUserData(JSON.parse(localStorage.userData))
    } else {
      fetch(`http://localhost:3000/users/${userId}`)
      .then(resp => resp.json())
      .then(data => {
        setUserData(data)
        localStorage.setItem('userData', JSON.stringify(data))
      })
    }
  }, [])

  let deleteNotification = (notification) => {
    fetch(`http://localhost:3000/user_notifications/${notification.id}`, {method: 'DELETE'})
    
    let updated = {
      ...userData,
      notifications: userData.notifications.filter(n => n.id !== notification.id)
    }
    setUserData(updated)
    localStorage.setItem('userData', JSON.stringify(updated))
  }

  return (
    <>
      <img className="header" src="//images.squarespace-cdn.com/content/v1/5e45fd7b05ae4e3f2f2ed60f/1581645908407-OU71JDZN3L0QV38JKDGQ/Resilia_Final_FullColor.jpg?format=1500w" alt="Resilia"></img>
      <main>
        <Profile user={userData}/>
        <div>
          <h2 className="center">Notifications</h2>
          {userData.notifications ? userData.notifications.map(notification => <Notification key={notification.id} notification={notification} deleteNotification={deleteNotification}/>) : null }
        </div>
      </main>
      
    </>
  );
}

export default App;
