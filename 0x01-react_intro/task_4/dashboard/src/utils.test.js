import React from 'react';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// test to check getFullYear returns correct year
describe('getFullYear', () => {
	it('returns the current year', () => {
	   const currentYear = new Date().getFullYear();
	   expect(getFullYear()).toBe(currentYear);
	});
   });

// test to check that getFooter returns correct string
// when arg is false
describe('getFooterCopy', () => {
	it('returns "Holberton School" when the argument is true', () => {
	   expect(getFooterCopy(true)).toBe('Holberton School');
	});
   
	it('returns "Holberton School main dashboard" when the argument is false', () => {
	   expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
	});
   });


// test to check that getLatestNotification returns correct
describe('getLatestNotification', () => {
    it('returns the correct string for the latest notification', () => {
        const expectedMessage = { __html: '<strong>Urgent requirement</strong> - complete by EOD' };
        expect(getLatestNotification()).toEqual(expectedMessage);
    });
});
