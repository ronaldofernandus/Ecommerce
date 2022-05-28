import {
  getListProduct,
  addProductReducer,
  deleteProductReducer,
} from "../../Axios/productAxios";
const initialState = {
  getListProductResult: false,
  getListProductLoading: false,
  getListProductError: false,

  addProductResult: false,
  addProductLoading: false,
  addProductError: false,

  deleteProductResult: false,
  deleteProductLoading: false,
  deleteProductError: false,
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
    case addProductReducer:
      console.log("4.Masuk Reducer:", action);
      return {
        ...state,
        addProductResult: action.payload.data,
        addProductLoading: action.payload.loading,
        addProductError: action.payload.errorMessage,
      };
    case deleteProductReducer:
      console.log("4.Masuk Reducer:", action);
      return {
        ...state,
        deleteProductResult: action.payload.data,
        deleteProductLoading: action.payload.loading,
        deleteProductError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default product;
