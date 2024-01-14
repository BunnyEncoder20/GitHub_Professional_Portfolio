import { useState, useEffect } from 'react';

// Importing css styling & Images 
import './Skills.css'
import meter1 from '../../Assets/Images/meter1.svg'
import meter2 from '../../Assets/Images/meter2.svg'
import meter3 from '../../Assets/Images/meter3.svg'
import colorSharp from '../../Assets/Images/color-sharp.png'

// Importing bootstrap components 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Importing react-multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {

    // responsive parameters for react-carousel default from package
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2> Skills </h2>
                            <p>As a versatile MERN stack developer, I bring expertise in crafting dynamic web applications. Proficient in modern web technologies, I seamlessly blend front-end finesse with robust back-end solutions. Additionally, my excellent understanding of Python and DSA adds a strategic edge to my Problem Solving toolkit.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">

                                <div className="item">
                                    <img src={meter3} alt="90" />
                                    <h5>MongoDB</h5>
                                </div>

                                <div className="item">
                                    <img src={meter2} alt="80" />
                                    <h5>Express JS</h5>
                                </div>

                                <div className="item">
                                    <img src={meter1} alt="95" />
                                    <h5>React JS</h5>
                                </div>

                                <div className="item">
                                    <img src={meter3} alt="90" />
                                    <h5>Node JS</h5>
                                </div>

                                <div className="item">
                                    <img src={meter1} alt="95" />
                                    <h5>JavaScript</h5>
                                </div>

                                <div className="item">
                                    <img src={meter2} alt="80" />
                                    <h5>Bootstrap 5</h5>
                                </div>

                                <div className="item">
                                    <img src={meter1} alt="95" />
                                    <h5>Python</h5>
                                </div>

                                <div className="item">
                                    <img src={meter2} alt="80" />
                                    <h5>TailWindCSS</h5>
                                </div>

                                <div className="item">
                                    <img src={meter2} alt="80" />
                                    <h5>CSS</h5>
                                </div>

                                <div className="item">
                                    <img src={meter3} alt="90" />
                                    <h5>HTML</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>

            <img src={colorSharp} alt="bg left" className="background-image-left" />
        </section>

    );
}