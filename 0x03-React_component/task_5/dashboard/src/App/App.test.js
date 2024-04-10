import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import App from './App';

describe('Test App.js', () => {
 it('App without crashing', () => {
    expect(shallow(<App />).exists()).to.be.true;
    done();
 });

 it('check that CourseList is not displayed when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).to.have.lengthOf(0);
    done();
 });

 it('check that CourseList is displayed and Login is not displayed when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).to.have.lengthOf(1);
    expect(wrapper.find(Login)).to.have.lengthOf(0);
    done();
 });
});
