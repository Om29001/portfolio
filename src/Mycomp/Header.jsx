import { NavLink as Link,  } from "react-router-dom"

export default function Header() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <strong>Om Surti</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="nav navbar-nav ms-auto me-2 ">
            <li className="nav-item">
              {/* onClick={() => setindex(0)}*/}
              <Link exact to="/" className="nav-link  rounded" id="home">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link rounded" to="/about" id="about">
                About
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link rounded" id="portpage">
                Portfolio
              </Link>
            </li>
            {/* <li className="nav-item"> */}

            {/* <Link to="/blogs" className="nav-link rounded" id='blogpage'  >Blogs</Link> */}
            {/* </li> */}
            {/* <li className="nav-item">
              <Link to="/contact" className="nav-link rounded" id="contactpage">
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
