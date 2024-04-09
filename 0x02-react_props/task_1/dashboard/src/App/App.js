import React, { Component } from 'react'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import './App.css'

function App() {
	render()
	return (
		<React.Fragment>
			<Notifications></Notifications>
			<div className='App'>
				<Header></Header>
				<Login></Login>
				<Footer></Footer>
			</div>
		</React.Fragment>
	);
}

export default App;
