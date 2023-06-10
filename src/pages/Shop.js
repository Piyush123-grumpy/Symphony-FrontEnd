import React from 'react';
import Navigationbar from '../components/homepageComponents/navigationbar';
import Header from '../components/homepageComponents/header';
import './shop.css'
import Products from '../components/homepageComponents/Products'
import Pagination from '../components/shoppageCompnents/Pagination';
import Shoppagebanner from '../components/shoppageCompnents/Shoppagebanner';
import Footer from '../components/homepageComponents/Footer';

function Shop(props) {
    return (
        <div>
            <div className='wrapper'>
                <Header></Header>
                <Navigationbar></Navigationbar>
                <Shoppagebanner></Shoppagebanner>
                <Products></Products>
                <Pagination></Pagination>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Shop;