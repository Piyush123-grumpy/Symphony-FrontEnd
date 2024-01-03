import React, { useEffect } from 'react'

import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/AdminComponents/Loader'
import { listUsers, deleteUser } from '../actions/userActions'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const UserListScreen = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch()

    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector((state) => state.userDelete)
    const { success: successDelete } = userDelete

    useEffect(() => {
        if (userInfo ) {
            dispatch(listUsers())
        } else {
            console.log(userInfo,'arko condi')
            // navigate('/login')
        }
    }, [dispatch, successDelete, userInfo])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteUser(id))
        }
    }

    return (
        <>
            <h1>Users</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <div variant='danger'>{error}</div>
            ) : (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ADMIN</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>
                                    <a href={`mailto:${user.email}`}>{user.email}</a>
                                </td>
                                <td>
                                    {user.isAdmin ? (
                                        <FontAwesomeIcon style={{color:'green'}} icon={faCheck}></FontAwesomeIcon> 
                                    ) : (
                                        <FontAwesomeIcon style={{color:'red'}} icon={faCheck}></FontAwesomeIcon> 
                                    )}
                                </td>
                                <td>
                                    <Link to={`/admin/user/${user._id}/edit`}>
                                        <Button variant='light' className='btn-sm'>
                                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        </Button>
                                    </Link>
                                    <Button
                                        variant='danger'
                                        className='btn-sm'
                                        onClick={() => deleteHandler(user._id)}
                                    >
                                         <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    )
}
