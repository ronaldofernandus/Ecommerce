import {
  getListProduct,
  addProductReducer,
  deleteProductReducer,
  getDetailProduct,
  updateProductReducer,
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

  getDetailProduct: false,

  updateProductResult: false,
  updateProductLoading: false,
  updateProductError: false,
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
      return {
        ...state,
        addProductResult: action.payload.data,
        addProductLoading: action.payload.loading,
        addProductError: action.payload.errorMessage,
      };
    case deleteProductReducer:
      return {
        ...state,
        deleteProductResult: action.payload.data,
        deleteProductLoading: action.payload.loading,
        deleteProductError: action.payload.errorMessage,
      };

    case getDetailProduct:
      return {
        ...state,
        getDetailProduct: action.payload.data,
      };

    case updateProductReducer:
      return {
        ...state,
        updateProductResult: action.payload.data,
        updateProductLoading: action.payload.loading,
        updateProductError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default product;
