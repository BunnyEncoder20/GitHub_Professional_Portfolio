import { useEffect, useState } from 'react';

// It is better to import individual components of Bootstrap 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Importing CSS file 
import './NavBar.css'

// Import Icons 
import logo from '../../Assets/Images/logo4.jpg' ; 
import linkedIn from '../../Assets/Icons/linkedIn.svg'
import github from '../../Assets/Icons/github.png'
import leetcode from '../../Assets/Icons/leetcode.png'


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');           // for keeping track of active navbar link
    const [scrolled, setScrolled] = useState(false);               // for making the navbar transparent on scroll we need to know if the user has scrolled or not

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50)         // assuming my banner would be approx 50px for now 
                setScrolled(true) ;
            else 
                setScrolled(false);
        }

        window.addEventListener('scroll' , onScroll)

        // Since we are adding eventListener on Mount we also have to remove it when the DOM removes the component
        return () => window.removeEventListener('scroll' , onScroll)
    }, [])

    const onUpdateActiveLink = (val) => {
        setActiveLink(val) ;            // setting the active link through here onClick
    }

    return (
        <Navbar expand="lg" className={scrolled  ? "scrolled" : ""} >
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>           {/* This icon is for responsive mobile page */}
                </Navbar.Toggle> 
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">               
                        <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = { () => onUpdateActiveLink('home') } >
                            Home
                        </Nav.Link>
                        <Nav.Link href="#skills" className = {activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick = { () => onUpdateActiveLink('skills') }>
                            Skills
                        </Nav.Link>
                        <Nav.Link href="#project" className = {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick = { () => onUpdateActiveLink('projects') }>
                            Projects
                        </Nav.Link>
                    </Nav>

                    {/* Socials Icons */}
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/varun-verma-1547442a5/"><img src={linkedIn} alt="LinkedIn" /></a>
                            <a href="https://github.com/BunnyEncoder20"><img src={github} alt="GitHub" /></a>
                            <a href="https://leetcode.com/BunnyEncoder/"><img src={leetcode} alt="LeetCode" /></a>
                        </div>
                        
                        
                        <button className="vvd"> <span> Let's Connect !</span> </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}