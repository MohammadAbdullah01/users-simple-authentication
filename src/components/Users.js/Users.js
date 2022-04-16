import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useUsers from '../../hooks/useUsers';
import User from '../User/User';

const Users = () => {
    const { users } = useUsers("https://jsonplaceholder.typicode.com/users")
    return (
        <Container>
            <h1>All users</h1>
            <Row className='g-3'>
                {users.map(user => <User
                    key={user.id}
                    user={user}
                ></User>)}
            </Row>
        </Container>
    );
};

export default Users;