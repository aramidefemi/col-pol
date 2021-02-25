const initialState = {
  schools: {
    selected: {},
    list: []
  },
  user_token: null,
  user: {}
};

export default function applicationReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case 'GET_SCHOOLS':
      const schools = { ...state, schools: { list: payload,  selected: state.schools.selected } };
      console.log('schools',schools,'payload',payload)
      return schools;
  case 'SIGN_IN':  
      const user = { ...state, ...payload };
      return user;
    default:
      return state;
  }
}
