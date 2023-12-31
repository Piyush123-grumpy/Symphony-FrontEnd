import React, { useEffect } from 'react'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/AdminComponents/Loader'
import {
    listProducts,
    deleteProduct,
    createProduct,
} from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstant'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductListScreen = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    const productDelete = useSelector((state) => state.productDelete)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = productDelete

    const productCreate = useSelector((state) => state.productCreate)
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        product: createdProduct,
    } = productCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET })

        if (!userInfo || !userInfo.isAdmin) {
            navigate('/')
        }

        if (successCreate) {
            navigate(`/admin/product/${createdProduct._id}/edit`)
        } else {
            dispatch(listProducts(''))
        }
    }, [
        dispatch,
        userInfo,
        successDelete,
        successCreate,
        createdProduct,
    ])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteProduct(id))
        }
    }

    const createProductHandler = () => {
        dispatch(createProduct())
    }

    return (
        <>
            <Row className='align-items-center'>
                <Col>
                    <h1>Products</h1>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createProductHandler}>
                        <i className='fas fa-plus'></i> Create Product
                    </Button>
                </Col>
            </Row>
            {loadingDelete && <Loader />}
            {errorDelete && <div variant='danger'>{errorDelete}</div>}
            {loadingCreate && <Loader />}
            {errorCreate && <div variant='danger'>{errorCreate}</div>}
            {loading ? (
                <Loader />
            ) : error ? (
                <div variant='danger'>{error}</div>
            ) : (
                <>
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>PRICE</th>
                                <th>CATEGORY</th>
                                <th>BRAND</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.brand}</td>
                                    <td>
                                        <Link to={`/admin/product/${product._id}/edit`}>
                                            <Button variant='light' className='btn-sm'>
                                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                            </Button>
                                        </Link>
                                        <Button
                                            variant='danger'
                                            className='btn-sm'
                                            onClick={() => deleteHandler(product._id)}
                                        >
                                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </>
    )
}

export default ProductListScreen