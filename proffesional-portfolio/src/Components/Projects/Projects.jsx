import React from 'react'

// Importing Component
import { ProjectCard } from './ProjectCard/ProjectCard';

// Importing css and Assets
import './Projects.css'
import colorSharp2 from '../../Assets/Images/color-sharp2.png'

//Importing project Images
import WeatherHub from "../../Assets/Project Images/WeatherHub.png"
import PasswordGenerator from "../../Assets/Project Images/PasswordGenerator.png"
import Musicart from "../../Assets/Project Images/Musicart Image.png"
import Quizzie from "../../Assets/Project Images/Quizzie.png"
import personalPortfolio from "../../Assets/Project Images/professionalPortfolio.png"
import CancerWebsite from "../../Assets/Project Images/SkinCancer Website.png"

// Importing Bootstrap
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';

// Importing react-on-screen and Animate.css for on screen animations
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {

    // Creating a list for projects : 
    const projects = [
        {
            title: "WeatherHub",
            description: "A simple Weather Website which fetches data from API. Responsive website that shows the current local weather and the forecasted weather for the next 7 days.",
            image: WeatherHub
        },
        {
            title: "Pwd Gen",
            description: "A password generating website that can make passwords of desired length and can include Uppercase and lowercase letters, numbers and special symbols.",
            image: PasswordGenerator
        },
        {
            title: "Quizzie",
            description: "A complete MERN stack Quiz creating and analyzing web app. Users can create and share their Quizzes",
            image: Quizzie
        },
        {
            title: "Musicart",
            description: "A complete MERN stack E-comm web app for music electronic products. Features searching, sorting, filtering, and many more",
            image: Musicart
        },
        {
            title: "My Portfolio",
            description: "A React based Personal Portfolio website, which was made to showcase my skills and projects.",
            image: personalPortfolio
        },
        {
            title: "SkinDetect",
            description: "A website made using html, css, JS and Python which uses a CNN+ResNET model we trained to classify skin legions as malignant (cancerous) or benign (not cancerous)",
            image: CancerWebsite
        },

    ]

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                                    <h2>Projects</h2>
                                    <p>In the realm of my digital endeavors, my projects are not just conceptualized, they are meticulously crafted from inception to execution. As a passionate MERN stack developer, I transcend the role of a mere planner and proudly embrace that of an executioner. Welcome to a showcase where ideas come to life, and plans transform into seamless, functional realities.</p>
                                </div>}
                        </TrackVisibility>

                        {/* Navigation Tabs */}
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="tabs" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            {/* Tabs Content */}
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

            {/* Background Gradient */}
            <img className="background-image-right" src={colorSharp2} alt='' />
        </section>
    )
}

