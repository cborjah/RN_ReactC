// Action Creator
const DASHBOARD_VISITS_INCREMENT = 'DASHBOARD_VISITS_INCREMENT';

export const visitsIncrement = (value = 1) => ({
  type: DASHBOARD_VISITS_INCREMENT,
  value
});

// Reducer
const initialState = {
  visitsCount: 0,
  list: [
    {key: 0, label: 'AngularJS'},
    {key : 1, label: 'jQuery'},
    {key: 2, label: 'Polymer'},
    {key: 3, label: 'ReactJS'}
  ]
}

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_VISITS_INCREMENT:
      /*
      state.visitsCount = state.visitsCount + action.value;
      return Object.assign({}, state);
      */
      // Spread operator can be used to avoid having to use Object.assign();
      return {...state, visitsCount: state.visitsCount + action.value};
    default:
      return state;
  }
};
