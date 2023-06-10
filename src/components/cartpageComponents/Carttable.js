import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart,removeCart } from '../../actions/cartActions';
import guitar from '../../assets/guitar.jpeg'
import './carttable.css'

function Carttable({ cartItems }) {
    const dispatch=useDispatch()

    
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
                            <td>{carItem.name}</td>
                            <td>$ {carItem.price}</td>
                            <td><select name="" id="" value={carItem.qty} onChange={(e) => dispatch(addToCart(carItem.product,Number(e.target.value)))}>
                                {
                                    [...Array(carItem.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>

                                    ))
                                }
                            </select></td>
                            <td><button onClick={()=>{dispatch(removeCart(carItem.product))}  }><i class="fa fa-trash" aria-hidden="true"></i></button></td>

                        </tr>

                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default Carttable;