import React, { useEffect, useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import axios from 'axios'; // Ensure axios is installed

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/notifications'); // Replace with your API endpoint
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <Container>
      <h2 className="my-4">Notifications</h2>
      {notifications.length > 0 ? (
        notifications.map((note, index) => (
          <Alert key={index} variant="warning">
            {note}
          </Alert>
        ))
      ) : (
        <Alert variant="info" className='m-3 p-3'>
          No notifications at the moment.
        </Alert>
      )}
    </Container>
  );
};

export default Notifications;
