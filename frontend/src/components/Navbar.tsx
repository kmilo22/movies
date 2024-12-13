import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className='navbar'>
            <Link to='/'>
                <img src="/assets/logo.png" alt='Logo' style={{ width: '40px', marginRight: '10px' }} />
            </Link>
            <Link to='/add-movie'>Add Movie</Link>
            <Link to='/favorites'>Favorite Movies</Link>
            <Link to='/users'>Users</Link>
            <Link to='/register-users'>Register Users</Link>
        </nav>
    );
};

export default Navbar;