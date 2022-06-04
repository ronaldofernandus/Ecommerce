import {
    GET_PRODUCT,
    DETAIL_PRODUCT_USER
} from '../../action/ProductAction';

const initialState = {
    getProductResult: false,
    getProductLoading: false,
    getProductError: false,

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