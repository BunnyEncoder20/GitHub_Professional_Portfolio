import React from 'react'

// Importing Component
import { ProjectCard } from './ProjectCard/ProjectCard';

// Importing css and Assets
import './Projects.css'
import colorSharp2 from '../../Assets/Images/color-sharp2.png'
import WeatherHub from "../../Assets/Project Images/WeatherHub.png"
import PasswordGenerator from "../../Assets/Project Images/PasswordGenerator.png"

// Importing Bootstrap
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';



export const Projects = () => {

    // Creating a list for projects : 
    const projects = [
        {
            title: "WeatherHub",
            description: "A simple Weather Displaying Website which fetches data from OpenWeatherAPI. It's a responsive website which shows the current local weather and the forecasted weather for the next 7 days.",
            image: WeatherHub
        },
        {
            title: "Pwd Gen",
            description: "A password generating website that can make passwords of desired length and can include Uppercase and lowercase letters, numbers and special symbols.",
            image: PasswordGenerator
        },
        {
            title: "WeatherHub",
            description: "A simple Weather Displaying Website which fetches data from OpenWeatherAPI. It's a responsive website which shows the current local weather and the forecasted weather for the next 7 days.",
            image: WeatherHub
        },
        {
            title: "WeatherHub",
            description: "A simple Weather Displaying Website which fetches data from OpenWeatherAPI. It's a responsive website which shows the current local weather and the forecasted weather for the next 7 days.",
            image: WeatherHub
        },
        {
            title: "WeatherHub",
            description: "A simple Weather Displaying Website which fetches data from OpenWeatherAPI. It's a responsive website which shows the current local weather and the forecasted weather for the next 7 days.",
            image: WeatherHub
        },
        {
            title: "WeatherHub",
            description: "A simple Weather Displaying Website which fetches data from OpenWeatherAPI. It's a responsive website which shows the current local weather and the forecasted weather for the next 7 days.",
            image: WeatherHub
        },
        
    ]

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>In the realm of my digital endeavors, my projects are not just conceptualized, they are meticulously crafted from inception to execution. As a passionate MERN stack developer, I transcend the role of a mere planner and proudly embrace that of an executioner. Welcome to a showcase where ideas come to life, and plans transform into seamless, functional realities.</p>

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
                                            projects.map((project,index)=>{
                                                return(
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Hellow projects</Tab.Pane>
                                <Tab.Pane eventKey="third">Hellow projects</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

            {/* Background Gradient */}
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}

