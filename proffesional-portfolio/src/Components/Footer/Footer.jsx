import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Importing Styles
import './Footer.css'

// Importing the icons 
import logo from '../../Assets/Images/logo5-removebg.png';
import linkedIn from '../../Assets/Icons/linkedIn.svg'
import github from '../../Assets/Icons/github.png'
import leetcode from '../../Assets/Icons/leetcode.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center rowContainer">
                    <Col sm={6}>
                        <img src={logo} alt='' className='logo' />
                    </Col>
                    <Col sm={6} className="text-center">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/varun-verma-1547442a5/"><img src={linkedIn} alt="LinkedIn" /></a>
                            <a href="https://github.com/BunnyEncoder20"><img src={github} alt="GitHub" /></a>
                            <a href="https://leetcode.com/BunnyEncoder/"><img src={leetcode} alt="LeetCode" /></a>
                        </div>
                    </Col>
                </Row>
                        <p>CoyRight©® 2024 Varun Verma Portfolio. Stay on the Grind 💪</p>
            </Container>
        </footer>
    )
}