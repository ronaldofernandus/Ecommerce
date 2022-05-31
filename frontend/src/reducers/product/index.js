import {
    GET_PRODUCT,
    GET_PRODUCT_USER,
    FIND_PRODUCT,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    DETAIL_PRODUCT,
    DETAIL_PRODUCT_USER
} from '../../action/ProductAction';

const initialState = {
    getProductResult: false,
    getProductLoading: false,
    getProductError: false,

    getProductUserResult: false,
    getProductUserLoading: false,
    getProductUserError: false,

    findProductResult: false,
    findProductLoading: false,
    findProductError: false,

    addProductResult: false,
    addProductLoading: false,
    addProductError: false,

    deleteProductResult: false,
    deleteProductLoading: false,
    deleteProductError: false,

    updateProductResult: false,
    updateProductLoading: false,
    updateProductError: false,

    detailProductResult: false,
    detailProductLoading: false,
    detailProductError: false,

    detailProductUserResult: false,
    detailProductUserLoading: false,
    detailProductUserError: false,
};

const productUser = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                getProductResult: action.payload.data,
                getProductLoading: action.payload.loading,
                getProductError: action.payload.errorMessage,
            }
        case GET_PRODUCT_USER:
            return {
                ...state,
                getProductUserResult: action.payload.data,
                getProductUserLoading: action.payload.loading,
                getProductUserError: action.payload.errorMessage,
            }
        case FIND_PRODUCT:
            return {
                ...state,
                findProductResult: action.payload.data,
                findProductLoading: action.payload.loading,
                findProductError: action.payload.errorMessage,
            }
        case ADD_PRODUCT:
            return {
                ...state,
                addProductResult: action.payload.data,
                addProductLoading: action.payload.loading,
                addProductError: action.payload.errorMessage,
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                deleteProductResult: action.payload.data,
                deleteProductLoading: action.payload.loading,
                deleteProductError: action.payload.errorMessage,
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                updateProductResult: action.payload.data,
                updateProductLoading: action.payload.loading,
                updateProductError: action.payload.errorMessage,
            }
        case DETAIL_PRODUCT:
            return {
                ...state,
                detailProductResult: action.payload.data,
                detailProductLoading: action.payload.loading,
                detailProductError: action.payload.errorMessage,
            }
        case DETAIL_PRODUCT_USER:
            return {
                ...state,
                detailProductUserResult: action.payload.data,
                detailProductUserLoading: action.payload.loading,
                detailProductUserError: action.payload.errorMessage,
            }
        default:
            return state;
    }
};

export default productUser;