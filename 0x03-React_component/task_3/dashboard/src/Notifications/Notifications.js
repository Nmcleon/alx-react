import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'; // ES6
import NotificationItemShape from './NotificationItemShape';

const buttonStyle = {
  top: '1em',
  right: '1em',
  background: 'transparent',
  border: 'none',
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
};

const imageStyle = {
  width: '20px',
  height: '20px',
}

class Notifications extends React.Component {  
  render() {
    return (
      <div className="notification-container">
        <div className="menuItem">Your notifications</div>
        { this.props.displayDrawer ?
          (<div className="Notifications">
            <button style={buttonStyle} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
              <img src={close_icon} style={imageStyle}/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {this.props.listNotifications.length === 0 ? (<NotificationItem id={0} value="No new notification for now" type='no-new' markAsRead={this.markAsRead} />) : <></>}
              {this.props.listNotifications.map((list) => (<NotificationItem id={list.id} key={list.id} type={list.type} value={list.value} html={list.html} markAsRead={this.markAsRead} />))}
            </ul>
          </div>)
          : <></>
        }
      </div>
    );
  }
  
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;