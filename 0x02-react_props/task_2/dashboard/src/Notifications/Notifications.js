import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem'

const Notifications = () => {
  const buttonStyle = {
    position: 'fixed',
    top: '1em',
    right: '1em',
    background: 'transparent',
    border: 'none',
  };

  const imageStyle = {
    width: '20px',
    height: '20px',
  }

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type='default' value='New course available'></NotificationItem>
        <NotificationItem type='urgent' value='New resume available'></NotificationItem>
        <NotificationItem type='urgent' html={{ __html: getLatestNotification() }}></NotificationItem>
      </ul>
      <button style={buttonStyle} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
        <img src={close_icon} style={imageStyle}/>
      </button>
    </div>
  )
}

export default Notifications;