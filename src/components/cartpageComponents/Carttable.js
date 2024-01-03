import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeCart } from '../../actions/cartActions';
import './carttable.css'
import { decrypt } from '../../crypto/encrypt-decrypt';
import { encrypt } from '../../crypto/encrypt-decrypt';


function Carttable({ cartItems }) {
    const dispatch = useDispatch()



    return (
        <div className='container ctable'>
            <table>
                <thead>
                    <tr>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Remove</td>

                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((carItem) => (
                        <tr>
                            <td><img src={carItem.image} alt="" style={{ display: 'initial' }} /></td>
                            <td>{decrypt(carItem.name) }</td>
                            <td>$ {decrypt(carItem.price)}</td>
                            <td><select name="" id="" value={carItem.qty} onChange={(e) => dispatch(addToCart(decrypt(carItem.product), Number(e.target.value)))}>
                                {
                                    [...Array(Number(decrypt(carItem.countInStock)) ).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>

                                    ))
                                }
                            </select></td>
                            <td><button onClick={() => { dispatch(removeCart(carItem.product)) }}><i class="fa fa-trash" aria-hidden="true"></i></button></td>

                        </tr>

                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default Carttable;