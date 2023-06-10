import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/homepageComponents/header';
import Navigationbar from '../components/homepageComponents/navigationbar';
import Footer from '../components/homepageComponents/Footer';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import './registerpage.css'
import './profilepage.css'
import { listMyOrders } from '../actions/orderActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'


function ProfilePage(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const userDetail = useSelector((state) => state.userDetail)
    const {  error, user } = userDetail

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    console.log(userUpdateProfile)

    const orderListMy = useSelector((state) => state.orderMyList)
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy


    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else {
            if (!user || !user.name || success) {
                console.log('ssa')
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, userInfo, user, success])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))

        }
    }
    return (
        <>
            <div className="wrapper">
                <Header></Header>
                <Navigationbar></Navigationbar>

            </div>

            <div className="container grid md:grid-cols-3">
                <div class="signup-box md:col-span-1" style={{ margin: 0 }}>
                    <h3 style={{ marginLeft: 25 }}>User Profiles</h3>
                    {message && <div>{message}</div>}

                    {error && <div>{error}</div>}
                    {success && <div>updated</div>}

                    <form onSubmit={submitHandler} className='form'>
                        <label className='label'>First Name</label>
                        <input onChange={(e) => setName(e.target.value)} value={name} className='input' type="text" placeholder="" />
                        <label className='label'>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className='input' type="email" placeholder="" />
                        <label className='label'>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className='input' type="password" placeholder="" />
                        <label className='label'>Confirm Password</label>
                        <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} className='input' type="password" placeholder="" />
                        <button className='button' type="submit" value="Register">Update</button>
                        <closeform></closeform></form>
                </div>
                <div className='signup2 md:col-span-2'>
                    <h3 style={{ marginLeft: 25 }}>My orders</h3>
                    {loadingOrders ? (
                        <div>Loading</div>
                    ) : errorOrders ? (
                        <div>{errorOrders}</div>
                    ) : (
                        <table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>DATE</th>
                                    <th>TOTAL</th>
                                    <th>PAID</th>
                                    <th>DELIVERED</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order._id}>
                                        <td>{order.createdAt.substring(0, 10)}</td>
                                        <td>{order.totalPrice}</td>
                                        <td>
                                            {order.isPaid ? (
                                                order.paidAt.substring(0, 10)
                                            ) : (
                                                <i style={{ color: 'red' }}>Not Paid</i>
                                            )}
                                        </td>
                                        <td>
                                            {order.isDelivered ? (
                                                order.deliveredAt.substring(0, 10)
                                            ) : (
                                                <i style={{ color: 'red' }}>Not delivered</i>
                                            )}
                                        </td>
                                        <td>
                                            <Link to={`/order/${order._id}`}>
                                                <button className='btn-sm' variant='light'>
                                                    Details
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            <Footer></Footer>


        </>

    );
}

export default ProfilePage;