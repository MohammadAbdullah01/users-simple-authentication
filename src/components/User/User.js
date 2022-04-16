import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const User = ({ user, children }) => {
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const { id, name } = user || {};
    const { email, phone } = children || {};

    return (
        <Col className='text-center' sm={6} lg={4}>
            <div style={{ height: "200px" }} className='border p-3'>
                <h3>{id}</h3>
                <h3>{name}</h3>
                <div>
                    <p>{children?.email}</p>
                    <p>{children?.phone}</p>
                </div>
                {!location.pathname.includes("/user/") && <Button onClick={() => navigate(`/user/${id}`)}>User info</Button>}
            </div>
        </Col>
    );
};

export default User;