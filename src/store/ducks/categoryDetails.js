export const Types = {
  GET_REQUEST: "categoryDetails/GET_REQUEST",
  GET_SUCCESS: "categoryDetails/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: {},
  loading: false
};

export default function CategoryDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getCategoryDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id }
  }),

  getCategoryDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
