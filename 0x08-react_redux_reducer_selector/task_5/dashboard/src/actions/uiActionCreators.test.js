import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest, loginSuccess, loginFailure } from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN_SUCCESS on successful login API call', () => {
    fetchMock.getOnce('/login-success.json', { status: 200, body: {} });

    const expectedActions = [{ type: LOGIN }, { type: LOGIN_SUCCESS }];
    const store = mockStore({});

    return store
      .dispatch(loginRequest('test@example.com', 'password'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('dispatches LOGIN_FAILURE on failed login API call', () => {
    fetchMock.getOnce('/login-success.json', { status: 404 });

    const expectedActions = [{ type: LOGIN }, { type: LOGIN_FAILURE }];
    const store = mockStore({});

    return store
      .dispatch(loginRequest('test@example.com', 'password'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('dispatches LOGIN_SUCCESS action', () => {
    const expectedAction = { type: LOGIN_SUCCESS };
    expect(loginSuccess()).toEqual(expectedAction);
  });

  it('dispatches LOGIN_FAILURE action', () => {
    const expectedAction = { type: LOGIN_FAILURE };
    expect(loginFailure()).toEqual(expectedAction);
  });
});
