import { GET_DETAIL_USER } from "../.././action/UserAction";

const initialState = {
  getDetailUserResult: false,
  getDetailUserLoading: false,
  getDetailUserError: false,
};

const users_reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_USER:
      return {
        ...state,
        getDetailUserResult: action.payload.data,
        getDetailUserLoading: action.payload.loading,
        getDetailUserError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default users_reducer;
