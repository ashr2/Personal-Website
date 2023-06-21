import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './AboutMe.css';
import Typist from 'react-typist-component';
import me from './aboutme.json';
import Lottie from 'lottie-react'
const AboutMe = ({ name, subheader, bio, image }) => {
    return (
        <Container fluid className="about-me-container">
            <Row className="justify-content-md-center text-center">
                    <Col md={6} className="about-me-text">
                    <Typist typingDelay={30} cursor={<span className='cursor'>|</span>}>
                        <h1 className="about-me-name">{name}</h1>
                        <h3 className="about-me-subheader">{subheader}</h3>
                    </Typist>
                        <p className="about-me-bio">{bio}</p>
                    </Col>
                <Col md={6}>
                <div className="w-fill h-fill">
                        <Image 
                        src = "https://media.licdn.com/dms/image/C4D03AQEGSlXl4AjCUQ/profile-displayphoto-shrink_800_800/0/1632510459980?e=2147483647&v=beta&t=Fk93WwmGmt6jmo2fM7G58i51vBdwuddd9K7x6Tx5Eug"
                        className="profile-photo"
                        />
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;
