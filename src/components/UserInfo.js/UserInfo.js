import React from 'react';
import { useParams } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import User from '../User/User';

const UserInfo = () => {
    const { userId } = useParams()
    const { users } = useUsers(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
    const user = users[0]
    console.log(users)
    return (
        <div>
            <h1>user info</h1>
            <User user={user}>
                {{ email: user?.email, phone: user?.phone }}
            </User>
        </div>
    );
};

export default UserInfo;