import React from 'react';
import guitar from '../../assets/guitar.jpeg'
import './product.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";



function Products(props) {

    return (
        <>
            <div id='product1'>
                <h1 style={{ marginTop: 50 }}>{props.name}</h1>
                <p>{props.subHead}</p>
                <div className='pro-container container'>
                    {props.products.map((product) => (
                        <div className='pro'>
                            <Link to={`/productDetail/${product._id}`}>
                                <div className='pro'>
                                    <img src={product.image} alt="" />
                                    <div className="des">
                                        <span>{product.name}</span>
                                        <div className='star'>
                                            <i class="fas fa-star"></i>

                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <h4>{product.price}</h4>
                                    </div>
                                    <a href="/"><i class="fa fa-shopping-cart cart"></i></a>
                                </div>
                            </Link>
                        </div>

                    ))}




                    {/* <div className='pro'>
                        <img src={guitar} alt="" />
                        <div className="des">
                            <span>Electric guitar</span>
                            <h5>Yamaha x4 30</h5>
                            <div className='star'>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="/"><i class="fa fa-shopping-cart cart"></i></a>
                    </div>

                    <div className='pro'>
                        <img src={guitar} alt="" />
                        <div className="des">
                            <span>Electric guitar</span>
                            <h5>Yamaha x4 30</h5>
                            <div className='star'>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="/"><i class="fa fa-shopping-cart cart"></i></a>
                    </div>

                    <div className='pro'>
                        <img src={guitar} alt="" />
                        <div className="des">
                            <span>Electric guitar</span>
                            <h5>Yamaha x4 30</h5>
                            <div className='star'>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="/"><i class="fa fa-shopping-cart cart"></i></a>
                    </div>


                    <div className='pro'>
                        <img src={guitar} alt="" />
                        <div className="des">
                            <span>Electric guitar</span>
                            <h5>Yamaha x4 30</h5>
                            <div className='star'>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="/"><i class="fa fa-shopping-cart cart"></i></a>
                    </div>
                    <div className='pro'>
                        <img src={guitar} alt="" />
                        <div className="des">
                            <span>Electric guitar</span>
                            <h5>Yamaha x4 30</h5>
                            <div className='star'>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="/"><i class="fa fa-shopping-cart cart"></i></a>
                    </div>
                    <div className='pro'>
                        <img src={guitar} alt="" />
                        <div className="des">
                            <span>Electric guitar</span>
                            <h5>Yamaha x4 30</h5>
                            <div className='star'>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="/"><i class="fa fa-shopping-cart cart"></i></a>
                    </div>
                    <div className='pro'>
                        <img src={guitar} alt="" />
                        <div className="des">
                            <span>Electric guitar</span>
                            <h5>Yamaha x4 30</h5>
                            <div className='star'>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="/"><i class="fa fa-shopping-cart cart"></i></a>
                    </div> */}
                </div>




            </div>

        </>

    );
}

export default Products;