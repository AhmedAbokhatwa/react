import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer>
      <div>
        <h3>e-shop</h3>
        <p>your one-step for all ypur needs... shop with use and experience the best online 
          shopping experiences.
        </p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Shop</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Follow us</h4>
        <a href=""><FaFacebook/></a>
        <a href=""><FaTwitter/></a>
        <a href=""><FaGithub/></a>
        <a href=""><FaLinkedin/></a>
      </div>
      <form action="">
        <input type="email" />
        <button>Subscribe</button>
      </form>
    </footer>
  )
}

export default Footer