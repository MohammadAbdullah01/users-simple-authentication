import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import User from '../User/User';

const Home = () => {
    const navigate = useNavigate()
    const { users } = useUsers("https://jsonplaceholder.typicode.com/users")
    // console.log(users)
    if (users.length) {
        users.length = 4
    }
    console.log(users)
    return (
        <Container>
            <h1>Users</h1>
            <Row className='g-3'>
                {users.map(user => <User
                    key={user.id}
                    user={user}
                ></User>)}
            </Row>
            <div className='d-flex py-5 align-items-center justify-content-center'>
                <Button onClick={() => navigate("/users")}>Load more</Button>
            </div>
        </Container>
    );
};

export default Home;