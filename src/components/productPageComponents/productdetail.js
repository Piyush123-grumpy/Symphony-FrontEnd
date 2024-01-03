import React from 'react';
import './productdertail.css'
import { useSelector } from 'react-redux';
function ProductDetail({ product, setQty, qty, addToCartHandler }) {

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    return (
        <div className='single-pro-details'>
            <h6>Home / T-Shirt</h6>
            <h4>{product.name}</h4>
            <h2>${product.price}</h2>
            <form>
                <div>Quantity</div>
                <select name="" id="" value={qty} onChange={(e) => setQty(e.target.value)}>
                    {
                        [...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>

                        ))
                    }
                </select>


            </form>
            {userInfo ? <button onClick={addToCartHandler}>Add to Cart</button> :

                (<> 
                    <button style={{background:'gray'}} disabled onClick={addToCartHandler}>Add to Cart</button>
                    <div>please Login or register to add to cart</div>
                </>
                )}
            <h4>Product Details</h4>
            <div className='desc'>{product.description}</div>
        </div>
    );
}

export default ProductDetail;