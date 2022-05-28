import { getListProduct, addProduct } from "../../Axios/productAxios";
const initialState = {
  getListProductResult: false,
  getListProductLoading: false,
  getListProductError: false,

  addProductResult: false,
  addProductLoading: false,
  addProductError: false,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case getListProduct:
      return {
        ...state,
        getListProductResult: action.payload.data,
        getListProductLoading: action.payload.loading,
        getListProductError: action.payload.errorMessage,
      };
    case addProduct:
      console.log("4.Masuk Reducer:", action);
      return {
        ...state,
        addProductResult: action.payload.data,
        addProductLoading: action.payload.loading,
        addProductError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default product;
