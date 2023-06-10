import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import Header from '../components/homepageComponents/header';
import Navigationbar from '../components/homepageComponents/navigationbar';
import Footer from '../components/homepageComponents/Footer';
import { saveShippingAddress } from '../actions/cartActions';
import './shippingPage.css'
function ShippingPage(props) {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)



    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            console.log("ss")
            navigate('/login')
        }
    }, [userInfo, dispatch])

    const submitHandler=(e)=>{
        console.log('s')
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        navigate('/payment')
    }

    return (
        <div>
            <div className="wrapper">
                <Header></Header>
                <Navigationbar></Navigationbar>

            </div>
            <div className="container" id='ship-cont'>
                <form onSubmit={submitHandler} class="">

                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Address
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="" />
                        </div>
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                City
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="" />
                        </div>
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Postal Code
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} type="text" placeholder="" />
                        </div>
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Country
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" value={country} onChange={(e) => setCountry(e.target.value)} type="text" placeholder="" />
                        </div>
                    </div>
                    <div style={{ marginLeft: 50, padding: 20 }} class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <button class="shadow bg-black hover:bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>

            </div>

            <Footer></Footer>
        </div>
    );
}

export default ShippingPage;