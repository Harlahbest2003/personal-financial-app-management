// src/components/Dashboard/Notifications.js
import React from 'react';
import { Container, Alert } from 'react-bootstrap';

const Notifications = () => {
  // Example notifications, replace with real data
  const notifications = [
    'Reminder: Your electricity bill is due in 3 days.',
    'Alert: You have exceeded your monthly budget for entertainment.',
  ];

  return (
    <Container>
      <h2 className="my-4">Notifications</h2>
      {notifications.map((note, index) => (
        <Alert key={index} variant="warning">
          {note}
        </Alert>
      ))}
    </Container>
  );
};

export default Notifications;
