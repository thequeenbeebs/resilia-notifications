import React, { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch('http://localhost:3000/notifications')
      .then(resp => resp.json())
      .then(notifications => console.log(notifications))
  })
  return (
    <div>
      Resilia Notifications
    </div>
  );
}

export default App;
