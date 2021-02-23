import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Container, Button, Image } from 'react-bootstrap';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__student'>
        <Image
          src='https://static.thenounproject.com/png/35785-200.png'
          style={{ objectFit: 'contain' }}
          thumbnail
        />
        <Link
          to='/student/login'
          style={{ textDecoration: 'none' }}
          className='text-white'
        >
          <Button
            variant='success'
            className='mt-3 text-white'
            style={{ width: '210px' }}
          >
            {' '}
            Sign in as student
          </Button>
        </Link>
        <Link
          to='/student/signup'
          style={{ textDecoration: 'none' }}
          className='text-white'
        >
          <Button variant='primary' className='mt-3' style={{ width: '210px' }}>
            create student account
          </Button>
        </Link>
      </div>

      <div className='home__faculty'>
        <Image
          src='https://static.thenounproject.com/png/2011000-200.png'
          thumbnail
          style={{ objectFit: 'coverF' }}
        />
        <Link
          to='/faculty/login'
          style={{ textDecoration: 'none' }}
          className='text-white'
        >
          <Button variant='success' className='mt-3' style={{ width: '210px' }}>
            Sign in as Faculty
          </Button>
        </Link>
        <Link
          to='/faculty/signup'
          style={{ textDecoration: 'none' }}
          className='text-white'
        >
          <Button variant='primary' className='mt-3' style={{ width: '210px' }}>
            create Faculty account
          </Button>
        </Link>
      </div>

      <div className='home__admin'>
        <Image
          src='https://static.thenounproject.com/png/371299-200.png'
          style={{ objectFit: 'contain' }}
          thumbnail
        />
        <Link
          to='/admin/login'
          style={{ textDecoration: 'none' }}
          className='text-white'
        >
          <Button variant='success' className='mt-3' style={{ width: '210px' }}>
            {' '}
            Sign in as Admin
          </Button>
        </Link>
        <Link
          to='/admin/signup'
          style={{ textDecoration: 'none' }}
          className='text-white'
        >
          <Button variant='primary' className='mt-3' style={{ width: '210px' }}>
            {' '}
            create Admin account
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
