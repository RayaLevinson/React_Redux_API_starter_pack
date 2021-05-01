import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='my-header py-3 mb-4'>
      <div className='container'>
        <Link to='/' className='h3 text-white'>
          {process.env.REACT_APP_BRAND}
        </Link>
      </div>
    </div>
  );
};

export default Header;
