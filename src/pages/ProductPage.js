import React, { useState } from 'react';
import Header from '../components/homepageComponents/header';
import Navigationbar from '../components/homepageComponents/navigationbar';
import Productimage from '../components/productPageComponents/Productimage';
import Footer from '../components/homepageComponents/Footer';
import './productpage.css'
import ProductDetail from '../components/productPageComponents/productdetail';
import { useDispatch } from 'react-redux';
import { listProductsDetail } from '../actions/productActions';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';



function ProductPage() {

    const navigate=useNavigate()
    const [qty,setQty]=useState(1)

    
    const { id } = useParams();

    const dispatch=useDispatch()

    const productDetail=useSelector(state=>state.productDetail)
    const {loading,error,product}=productDetail

    const addToCartHandler=()=>{
        navigate(`/cart/${id}/?qty=${qty}`)
    }

    useEffect(()=>{
        dispatch(listProductsDetail(id))        

    },[dispatch,id])
    
    return (
        <div>
            <div className="wrapper">
                <Header></Header>
                <Navigationbar></Navigationbar>
            </div>

            <div id='productdetails'>
                <Productimage product={product}></Productimage>
                <ProductDetail addToCartHandler={addToCartHandler} setQty={setQty} qty={qty} product={product}></ProductDetail>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default ProductPage;