import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { porductListReducer, porductDetailReducer } from './reducer/productReducers'
import { cartReducer } from './reducer/cartReducers'
import { userLoginReducer, userUpdateProfileReducer } from './reducer/userReducers'
import { userRegisterReducer } from './reducer/userReducers'
import { userDetailsReducer } from './reducer/userReducers'
import { orderCreateReducer, orderListMyReducer } from './reducer/orderReducers'
import { orderDetailsReducer } from './reducer/orderReducers'
import { orderPayReducer } from './reducer/orderReducers'


const reducer = combineReducers({
    productList: porductListReducer,
    productDetail: porductDetailReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetail: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate:orderCreateReducer,
    orderDetail:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderMyList:orderListMyReducer

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const saveShippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}



const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: saveShippingAddressFromStorage
    },
    userLogin: { userInfo: userInfoFromStorage }
}


const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store