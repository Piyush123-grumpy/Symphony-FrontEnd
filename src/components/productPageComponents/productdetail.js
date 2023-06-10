import React from 'react';
import './productdertail.css'
function productdetail({ product,setQty,qty ,addToCartHandler}) {
    return (
        <div className='single-pro-details'>
            <h6>Home / T-Shirt</h6>
            <h4>{product.name}</h4>
            <h2>${product.price}</h2>
            <form>
                <div>Quantity</div>
                <select name="" id="" value={qty} onChange={(e)=>setQty(e.target.value)}>
                    {
                        [...Array(product.countInStock).keys()].map((x)=>(
                            <option key={x+1}  value={x+1}>
                               {x+1}
                            </option>

                        ))
                    }
                </select>


            </form>

            <button onClick={addToCartHandler}>Add to Cart</button>
            <h4>Product Details</h4>
            <div className='desc'>{product.description}</div>
        </div>
    );
}

export default productdetail;