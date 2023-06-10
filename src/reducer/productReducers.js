import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from '../constants/productConstant.js'


export const porductListReducer = (state = { products: [] }, action) => {
    
    if (action.type === PRODUCT_LIST_REQUEST) {
        return { loading: true, products: [] }
    }
    else if (action.type === PRODUCT_LIST_SUCCESS) {
        return { loading: false, products: action.payload }
    }
    else if (action.type === PRODUCT_LIST_FAIL) {
        return { loading: false, error: action.payload }
    }
    else {
        return state
    }
}

export const porductDetailReducer = (state = { product: { reviews: [] } }, action) => {
    if (action.type === PRODUCT_DETAIL_REQUEST) {
        return { loading: true, ...state }
    }
    else if (action.type === PRODUCT_DETAIL_SUCCESS) {
        return { loading: false, product: action.payload }
    }
    else if (action.type === PRODUCT_DETAIL_FAIL) {
        return { loading: false, error: action.payload }
    }
    else {
        return state
    }
}