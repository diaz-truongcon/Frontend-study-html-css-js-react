import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className='bg-gray-500 p-4 flex text-white'>
            <Link to="/" className='me-3 ms-40 '>Dashboard</Link>
            <Link to="/todolist" className='me-3'>To do list</Link>
            <Link to="/json" className='me-3'>API</Link>
            <div>Calendar</div>
        </div>
    );
}

export default Navbar;