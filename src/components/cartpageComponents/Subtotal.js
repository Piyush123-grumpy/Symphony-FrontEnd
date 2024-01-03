import React from 'react';
import { Link } from 'react-router-dom';
import './subtotal.css'
import { decrypt } from '../../crypto/encrypt-decrypt';

function Subtotal({ cartItems }) {
    return (
        <div className='subtotal container'>

            <table style={{ height: 150, width: 300 }}>
                <h3>Cart Totals {cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}</h3>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>$ {cartItems.reduce((acc, item) => acc + Number(decrypt(item.price)) * Number(item.qty), 0).toFixed(2)}</strong></td>
                    <td><Link to="/shipping" class="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 border rounded">
                        Check Out
                    </Link>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Subtotal;    