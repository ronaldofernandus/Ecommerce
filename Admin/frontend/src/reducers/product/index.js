import { getListProduct } from "../../Axios/productAxios";
const initialState = {
  getListProductResult: false,
  getListProductLoading: false,
  getListProductError: false,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case getListProduct:
      return {
        getListProductResult: action.payload.data,
        getListProductLoading: action.payload.loading,
        getListProductError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default product;
