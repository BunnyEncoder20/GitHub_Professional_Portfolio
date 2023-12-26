// Navbar component imported from bootstrap
import React,{useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Importing Assets 
import logo from '../assets.images/logo.png'
import linkedIn_icon from '../assets/images/linkedin.png' ;
import github_icon from '../assets/images/github.png' ;
import leetcode_icon from '../assets/images/leetcode.png' ;

function navbar() {
  // creating a state to hold the active class : 
  const [ActiveLink, setActiveLink] = useState('home');
  // function to set the active link : 
  const onUpdateActiveLink = (link) => {
    setActiveLink(link) ;
  }


  // creating a state to check if the user has scrolled down (so that we can change the bg #style bc)
  const [Scroll, setScroll] = useState(false);
  // creating a useEffect which will be triggered when the scroll happens
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {          // if user scrolls Y axis more than 50 (size of our banner) then : 
        setScroll(true);
      }
      else {
        setScroll(false);
      }

      window.addEventListener('scroll', onScroll) ;    // eventListener which is listening for a scroll action by user 
      return () => window.removeEventListener("scroll", onScroll) ;       // removing the eventListener (part of cleaning up phase of useEffect) to prevent unexpected behavior when the DOM is unmounted
    }
  } , [] )

  




  // component return 
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : "" }>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="LOGO" />          {/*  website self logo on top left of the website */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon">
              
            </span>
        </Navbar.Toggle>        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={ActiveLink==='home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
              Home
            </Nav.Link>
            <Nav.Link href="#skills" className={ActiveLink==='skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className={ActiveLink==='projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
              Projects
            </Nav.Link>
          </Nav>

          {/* socials icons */}
          <span className="navbar-text">
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/varun-verma-1547442a5/"> <img src={linkedIn_icon} alt="LinkedIn" /> </a>
              <a href="https://github.com/BunnyEncoder20"> <img src={github_icon} alt="Github" /> </a>
              <a href="https://leetcode.com/BunnyEncoder/"> <img src={leetcode_icon} alt="LeetCode" /> </a>
            </div>

            {/* email button */}
            <button className="vvd" onClick={() => console.log("Email functionality")}>
              <span>Let's Connect</span>
            </button>
          </span>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbar