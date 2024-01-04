import { useState, useEffect } from 'react';

// Importing css styling 
import './Skills.css'

// Importing bootstrap components 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Importing react-multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/esm/Container';


export const Skills = () => {

    // responsive parameters for react-carousel default from package
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
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
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis laboriosam delectus sapiente natus, harum ex eaque amet sint et nobis.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={ } alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={ } alt="Image" />
                                    <h5>React JS</h5>
                                </div>
                                <div className="item">
                                    <img src={ } alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={ } alt="Image" />
                                    <h5>Node JS</h5>
                                </div>
                                <div className="item">
                                    <img src={ } alt="Image" />
                                    <h5>Express JS</h5>
                                </div>
                                <div className="item">
                                    <img src={ } alt="Image" />
                                    <h5>MongoDB</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}