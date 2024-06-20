### Task Summary

1. **Task 0: mapStateToProps**
   - Connect `isLoggedIn` state from `uiReducer` to your component using `mapStateToProps`.

2. **Task 1: Create a small store**
   - Implement `createStore` with `uiReducer` in `index.js` and provide the store to the main `App` using `Provider`.

3. **Task 2: Test mapStateToProps**
   - Write tests to verify that `mapStateToProps` correctly maps the state to props.

4. **Task 3: Update mapStateToProps**
   - Update `mapStateToProps` to include `isNotificationDrawerVisible` and use it in your component.

5. **Task 4: Connect your actions creators**
   - Connect `displayNotificationDrawer` and `hideNotificationDrawer` action creators to your component.

6. **Task 5: Refactor your code**
   - Remove local component state and related methods (`handleDisplayDrawer`, `handleHideDrawer`).

7. **Task 6: Update your tests**
   - Update tests to remove coverage for local component state and methods.

8. **Task 7: Async actions & Thunk middleware**
   - Implement `loginRequest` and `logout` action creators using `redux-thunk` middleware.

9. **Task 8: Connect LoginRequest to the App**
   - Connect `loginRequest` action creator to your component.

10. **Task 9: Connect user state to the Footer**
    - Connect `Footer` component to `user` state using `mapStateToProps`.

11. **Task 10: Connect Logout action creator to the Header**
    - Connect `Header` component to `user` state and `logout` action creator.

12. **Task 11: Modify the uiReducer**
    - Update `uiReducer` to handle `LOGIN` and `LOGOUT` actions.

13. **Task 12: Modify the test suites**
    - Update test suites for components and reducers based on changes made.

14. **Task 13: Understand how to use the Redux Chrome extension**
    - Integrate Redux DevTools extension in `index.js` for debugging.

15. **Task 14: Combine store: Root reducer**
    - Create a `rootReducer` combining all reducers (`courseReducer`, `notificationReducer`, `uiReducer`).

16. **Task 15: Combine store: modify the application**
    - Use `combineReducers` in `index.js` to create the store with `rootReducer`.

17. **Task 16: Combine store: write the tests**
    - Update test suites to work with the combined `rootReducer`.

18. **Task 17: Connect notifications: New Action Creator**
    - Implement `setLoadingState`, `setNotifications`, and `fetchNotifications` action creators.

19. **Task 18: Connect notifications: Improve reducer**
    - Update `notificationReducer` to handle loading state and merge notifications data.

20. **Task 19: Connect notifications to the reducer**
    - Connect `Notifications` component to `notifications` state and `fetchNotifications` action.

21. **Task 20: Connect notifications: clean up**
    - Remove obsolete functions and test data related to notifications.

22. **Task 21: Connect notifications: update the test suites**
    - Update tests for `notificationReducer`, `App`, `Notifications` to reflect changes.

23. **Task 22: Selectors**
    - Implement `getUnreadNotifications` selector and update `Notifications` to use it.

24. **Task 23: Connect courses: create a course selector**
    - Create `courseSelector` to fetch course entities and update tests for it.

25. **Task 24: Connect courses: create a fetch courses function**
    - Implement `fetchCourses` to fetch course data from API and test its functionality.

26. **Task 25: Connect the courses component**
    - Connect `CourseList` component to `fetchCourses`, `selectCourse`, and `unSelectCourse` actions.

27. **Task 26: Memoized selectors: Redux Reselect**
    - Implement `getUnreadNotificationsByType` using Redux Reselect for improved performance.

28. **Task 27: Memoized selectors: update the UI**
    - Update `Notifications` to use `getUnreadNotificationsByType` selector and add filter buttons.

29. **Task 28: Memoized selectors: update the test suite**
    - Update tests for `Notifications` and `notificationSelector` to cover new functionalities.

30. **Task 29: Container/Component**
    - Introduce `NotificationsContainer` to manage state and fetching, while `Notifications` becomes a functional component.
