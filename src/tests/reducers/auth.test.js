import authReducer from '../../reducers/auth';

test('should set uid on login', () => {
  const uid = 'abc123';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toEqual(action.uid);
});

test('should clear uid on logging out', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'anything' }, action);
  expect(state).toEqual({});
});
