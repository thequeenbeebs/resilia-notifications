import React, { useState, useEffect } from 'react';

function App() {
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/notifications')
      .then(resp => resp.json())
      .then(notes => setNotifications(notes))
  })
  return (
    <div>
      Resilia Notifications
    </div>
  );
}

export default App;
