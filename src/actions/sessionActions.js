export const SESSION_LOGIN = 'SESSION_LOGIN';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';

export const login = () => (dispatch) => dispatch({
  type: SESSION_LOGIN
});

export const logout = () => (dispatch) => dispatch({
  type: SESSION_LOGOUT
});
