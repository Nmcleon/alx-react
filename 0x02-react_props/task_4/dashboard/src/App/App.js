import React, { Component } from 'react'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import CourseList from '../CourseList/CourseList'
import PropTypes from 'prop-types'

import './App.css'

function App({ isLoggedIn }) {
	return (
		<React.Fragment>
			<Notifications></Notifications>
			<div className='App'>
				<Header></Header>
				{isLoggedIn ? <CourseList></CourseList> : <Login></Login>}
				<Footer></Footer>
			</div>
		</React.Fragment>
	);
}

App.propTypes = {
	isLoggedIn: PropTypes.bool
};

App.defaultProps = {
	isLoggedIn: false
};


export default App;
