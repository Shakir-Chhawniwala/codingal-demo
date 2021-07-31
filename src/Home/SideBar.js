import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
      <nav className="h-full bg-black shadow-lg fixed top-0 right-0 w-full">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/">End Class</Link>
          </li>
        </ul>
      </nav>
    );
}

export default SideBar
