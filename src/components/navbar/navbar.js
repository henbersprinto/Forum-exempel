import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>React forum example</h1>

        <div className="navContent">
          <div className="navLinks">
              <Link to="/">Posts</Link>
              <Link to="/addpost">Add post</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default Navbar
