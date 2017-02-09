const SESSION_LOGIN_SUCCESS = 'SESSION_LOGIN_SUCCESS';
const SESSION_LOGIN_FAIL = 'SESSION_LOGIN_FAIL';

export const loginSuccess = (value) => ({
  type: SESSION_LOGIN_SUCCESS,
  payload: value
});

export const loginFail = (value) => ({
  type: SESSION_LOGIN_FAIL,
  payload: value
});

export const loginAsync = (loginObj) => {
  return async (dispatch, getState) => {
    let loginToken = await new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 200);
    }).then(() => {
      console.log("loginObj", loginObj);
      if(loginObj.user === 'React' && loginObj.password === 'React') {
        return 'react'; // mocked token
      } else {
        return 'invalid'; // mocked non successful login
      }
    })

    console.log("loginToken", loginToken)

    if(loginToken !== 'invalid') {
      dispatch(loginSuccess(loginToken));
    } else {
      dispatch(loginFail(loginToken));
    }
  }
}

const initialState = {
  isNotLoggedIn: true,
  loginToken: 'none'
}

export default function session(state = initialState, action) {
  switch (action.type) {
    case SESSION_LOGIN_SUCCESS:
      // state.loginToken = action.payload;
      // state.isNotLoggedIn = false;
      return { ...state, loginToken: action.payload, isNotLoggedIn: false };
    case SESSION_LOGIN_FAIL:
      // state.loginToken = action.payload;
      return { ...state, loginToken: action.payload };
    default:
      return state;
  }
}
