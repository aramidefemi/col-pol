const initialState = {
  schools: {
    selected: {},
    list: [],
  },
  user_token: null,
  user: {},
};

export default function applicationReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case 'GET_SCHOOLS':
      const schools = {
        ...state,
        schools: { list: payload, selected: state.schools.selected },
      };
      return schools;
    case 'SELECT_SCHOOL':
      const school = {
        ...state,
        schools: { list: state.schools.list, selected: payload },
      };
      return school;
    case 'SIGN_IN':
      const user = { ...state, ...payload };
      return user;
    default:
      return state;
  }
}
