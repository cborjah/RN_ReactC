// Action Creator
const DASHBOARD_VISITS_INCREMENT = 'DASHBOARD_VISITS_INCREMENT';
const DASHBOARD_ADD_ITEM = 'DASHBOARD_ADD_ITEM';
const DASHBOARD_EDIT_ITEM = 'DASHBOARD_EDIT_ITEM';

export const visitsIncrement = (value = 1) => ({
  type: DASHBOARD_VISITS_INCREMENT,
  value // value: value
});

export const dashboardAddItem = (label) => ({
  type: DASHBOARD_ADD_ITEM,
  label // label: label
});

export const dashboardEditItem = (label, index) => ({
  type: DASHBOARD_EDIT_ITEM,
  label, // label: label
  index // index: index
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
      return { ...state, visitsCount: state.visitsCount + action.value };

    case DASHBOARD_ADD_ITEM:
      const mockedId = Math.floor(Date.now() / 1000);
      const newItem = {
        label: action.label,
        id: mockedId
      }
      // state.list.push(newItem);
      const updatedList = [...state.list];
      updatedList.push(newItem);
      // console.log(updatedList);
      return { ...state, list: updatedList  }

    case DASHBOARD_EDIT_ITEM:
      const newLabel = action.label;
      const index = action.index;
      state.list[index].label = newLabel;
      return { ...state }

    default:
      return state;
  }
};
