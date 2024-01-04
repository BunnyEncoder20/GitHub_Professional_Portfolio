import { useState, useEffect } from 'react';

// Importing Css styling 
import './Banner.css'

// Importing Bootstrap components 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ArrowRightCircle } from 'react-bootstrap-icons'

// Importing assets 
// import headerImg from '../../Assets/Images/header-img.svg';
import headerImg from '../../Assets/Images/hue.png';



export const Banner = () => {

    // useState and useEffect for animation

    // loopNum is indx for which word is on screen 
    const [loopNum, setLoopNum] = useState(0);
    // if the word is being typed or removed tracked by : 
    const [isDeleting, setIsDeleting] = useState(false);
    // Words which need to be typed : 
    const toRotate = ["Web Developer", "MERN Stack Dev", "BackEnd Dev", "Python Programmer"];
    // which text are we showing rn 
    const [text, setText] = useState('');
    // random small time for time period between typing each character
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // how much time between typing out next word 
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    // Tick fucntion 
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>{`< I'm Varun Verma />`}</span>
                        <h1>
                            {`Hi I'm a `}
                            <span className='wrap'>{text}</span>
                        </h1>
                        <p>Dedicated MERN Stack Developer known for delivering high-quality results within tight deadlines. Recognized for logical thinking, meticulous organization, and a results-driven approach in fast-paced environments. A collaborative team player with a passion for staying updated on emerging technologies, I possess a quick learning ability to adapt seamlessly to new challenges. Specializing in crafting customer-focused websites, my commitment to maintaining high standards is evident in solution-oriented problem-solving and proactive collaboration within teams.</p>
                        <button onClick={() => console.log('Connected Clicked')}> Let's Connect <ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}