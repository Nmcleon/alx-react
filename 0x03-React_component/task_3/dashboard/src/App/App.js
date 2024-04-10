import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'; // Import the newly created component
import BodySection from './BodySection'; // Import the BodySection component

class App extends React.Component {
 componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
 }

 componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
 }

 handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
 }

 render() {
    const { isLoggedIn } = this.props;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ];

    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications} />
        <div className='App'>
          <Header />
          {isLoggedIn ? 
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom> : 
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          }
          <BodySection title="News from the School">
            <p>Some random text about the latest news from the school.</p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
 }
}

App.propTypes = {
 isLoggedIn: PropTypes.bool,
 logOut: PropTypes.func,
};

App.defaultProps = {
 isLoggedIn: false,
 logOut: () => {},
};

export default App;
