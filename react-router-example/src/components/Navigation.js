import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ margin: 10 }}>
      <Link to="/" style={{ padding: 5 }}>
        Home
      </Link>
      <Link to="/about" style={{ padding: 5 }}>
        About
      </Link>
      <Link to="/posts" style={{ padding: 5 }}>
        Posts
      </Link>
    </nav>
  );
}

export default Navigation;
