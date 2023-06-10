import Header from '../components/homepageComponents/header'
import Navigationbar from '../components/homepageComponents/navigationbar'
import './homepage.css'
import Hero from '../components/homepageComponents/Hero'
import Actionbanner from '../components/homepageComponents/Actionbanner'
import Banner from '../components/homepageComponents/Banner'
import Banner3 from '../components/homepageComponents/Banner3'
import Footer from '../components/homepageComponents/Footer'
import Products from '../components/homepageComponents/Products'
import Diversion from '../components/homepageComponents/Diversion'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import { listProducts } from '../actions/productActions'



function Homepage() {

    const dispatch=useDispatch()

    const productList=useSelector(state=>state.productList)
    const {loading,error,products}=productList


    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])

    return (
        <>
            <div className='wrapper'>
                <Header></Header>
                <Navigationbar></Navigationbar>
            </div>

            <Hero></Hero>
            {/* <Slider></Slider> */}

            <Diversion></Diversion>

            <Products loading={loading} error={error} products={products} name="Featured Products" subHead="Riff your way through"></Products>

            <Banner></Banner>

            {/* <Products products={products} name="New Arrivals" subHead="Rock and roll"></Products> */}

            <Actionbanner></Actionbanner>
            <Banner3></Banner3>
            <Footer></Footer>

        </>

    )
}

export default Homepage