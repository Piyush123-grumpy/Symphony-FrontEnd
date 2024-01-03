import {CART_ADD_ITEM,CART_CLEAR_ITEMS,CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS} from '../constants/cartConstants'
import { encrypt } from '../crypto/encrypt-decrypt'
import { decrypt } from '../crypto/encrypt-decrypt'
export const cartReducer=(state={cartItems:[],shippingAddress:{}},action)=>{
    if (action.type===CART_ADD_ITEM){
        const item=action.payload
        console.log(item)
        const existItem=state.cartItems.find(x=> decrypt(x.product)===decrypt(item.product))
        if (existItem){
            return {
                ...state,
                cartItems:state.cartItems.map(x=>x.product===existItem.product?item:x)
            }
        }else{
            return {
                ...state,
                cartItems:[...state.cartItems,item]
            }
        }
    }
    else if(action.type===CART_REMOVE_ITEM){
        return{
            ...state,
            cartItems:state.cartItems.filter(x=>decrypt(x.product)  !== decrypt(action.payload))
        }
    }
    else if(action.type===CART_SAVE_SHIPPING_ADDRESS){
        return{
            ...state,
            shippingAddress: action.payload
        }
    }
    else if(action.type===CART_SAVE_PAYMENT_METHOD){
        return{
            ...state,
            paymentMethod: action.payload
        }
    }
    else if (action.type===CART_CLEAR_ITEMS){
        return {cartItems:[],shippingAddress:{}}
    }
    else{
        return state
    }

}