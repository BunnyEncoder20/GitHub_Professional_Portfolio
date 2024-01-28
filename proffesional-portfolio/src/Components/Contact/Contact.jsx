import { React, useState } from 'react';

// Importing Css styling 
import './Contact.css'

// Import components of Bootstrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Importing CSS assets
import './Contact.css'
import contactImg from "../../Assets/Images/contact-img.svg"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setButtonText('Sending...');

        let response = await toast.promise(
            fetch("https://proffessional-portfolio-mailer.onrender.com/contact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(formDetails)
            }),
            {
                pending: "Sending Email...📧",
                success: "Email sent successfully 👍",
                error: "There was a problem sending the Email 🤯"
            }
        )


        setButtonText('Send');
        let result = await response.json();
        setFormDetails(formInitialDetails)
        console.log(result)



        if (result.code === 200) {
            setStatus({ success: true, message: "Mail sent successfully" })
        }
        else {
            setStatus({ success: false, message: 'Something went wrong, please try again later' });
        }
    }

    return (
        <section className="contact" id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='' />
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="tel" value={formDetails.phone} placeholder="phone number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row='6' value={formDetails.message} placeholder='add your message here ...' onChange={(e) => onFormUpdate('message', e.target.value)} >

                                    </textarea>

                                    <button type='submit'>
                                        <span>{buttonText}</span>
                                    </button>

                                    {/* {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                    } */}

                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </section>

    );
}

