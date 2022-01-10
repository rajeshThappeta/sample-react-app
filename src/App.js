

import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import Contactus from './components/Contactus'
import Technologies from './components/Technologies'
import HTML from './components/Html'
import Javascript from './components/Javascript'
import Html from './components/Html'
import Footer from './components/Footer'
import Register from './components/Registration'


function App() {
  return (
    <div>
      {/* links to routes */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MyApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="users" >Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="contactus" >Contactus</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="register" >Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="technologies" >Technologies</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>


      {/* define routes for its children */}
      <Routes>
        {/* route for Home component */}
        <Route path="/" element={<Home />} />
        {/* route for Users component */}
        <Route path="/users" element={<Users />} />
        {/* route for Contactus component */}
        <Route path="/contactus" element={<Contactus />} />
        {/* route for Register component */}
        <Route path="/register" element={<Register />} />
        {/* route for Technologies component */}
        <Route path="/technologies" element={<Technologies />} >
          {/* defines routes for nested components */}
          <Route path="" element={<Html />} />
          <Route path="javascript" element={<Javascript />} />
        </Route>
      </Routes>

      {/* set footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
