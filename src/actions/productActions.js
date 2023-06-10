import axios from 'axios'
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from '../constants/productConstant.js'

export const listProducts = () => async (dispatch) => {
    try {
        
        dispatch({ type: PRODUCT_LIST_REQUEST })
        
        const {data}  = await axios.get('http://localhost:5000/product')

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const listProductsDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUEST })
        console.log("ssss")
        const { data } = await axios.get(`http://localhost:5000/product/${id}`)

        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}