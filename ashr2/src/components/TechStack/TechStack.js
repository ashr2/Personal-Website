import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SiReadme, SiGithub, SiReact, SiC, SiOcaml, SiJavascript, SiPython, SiHtml5, SiCss3, SiPytorch} from 'react-icons/si';
import './TechStack.css'
import { Link, animateScroll as scroll } from "react-scroll";
const TechStack = () => {
    const scrollSpeed = 100
    return (
        <Row className="techstack justify-content-md-left text-center icon-bar">
            <Col md={1} className="resume about-me-icon">
                <a href = "https://drive.google.com/file/d/1ULOgYrF9gtYSJzP7gyfzal5FMYzYc_jg/view?usp=sharing"
                style={{ color: 'inherit' }}
                >
                <SiReadme size={50}/>
                </a>
            </Col>
            <Col md={1} className="about-me-icon">
                <a href = "https://github.com/ashr2"
                style={{ color: 'inherit' }}
                >
                    <SiGithub size={50}/>
                </a>  
            </Col>
            <Col md={1} className="react about-me-icon">
                <Link
                    activeClass="active"
                    to="terrapintenants"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={scrollSpeed}
                >
                    <SiReact
                    size={50}/>
                </Link>
            </Col>
            <Col md={1} className="about-me-icon">
            <Link
                    activeClass="active"
                    to="shellsenior"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={scrollSpeed}
            >
                <SiC size={50}/>
            </Link>
            </Col>
            <Col md={1} className="about-me-icon">
            <Link
                    activeClass="active"
                    to="terrapintenants"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={scrollSpeed}
            >
                <SiJavascript size={50}/>
            </Link>
            </Col>
            <Col md={1} className="about-me-icon">
            <Link
                    activeClass="active"
                    to="ethtradingbacktestingtool"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={scrollSpeed}
            >
                <SiPython size={50}/>
            </Link>
            </Col>
            <Col md={1} className="about-me-icon">
            <Link
                    activeClass="active"
                    to="terrapintenants"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={scrollSpeed}
            >
                <SiHtml5 size={50}/>
            </Link>
            </Col>
            <Col md={1} className="about-me-icon">
            <Link
                    activeClass="active"
                    to="terrapintenants"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={scrollSpeed}
            >
                <SiCss3 size={50}/>
            </Link>
            </Col>
            <Col md={1} className="about-me-icon">
            <Link
                    activeClass="active"
                    to="microcaml"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={scrollSpeed}
            >
                <SiOcaml size={50}/>
            </Link>
            </Col>
            <Col md={1} className="about-me-icon">
            <Link
                    activeClass="active"
                    to="hoopdetectionmodel"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={scrollSpeed}
            >
                <SiPytorch size={50}/>
            </Link>
            </Col>
        </Row>
    );
};

export default TechStack;
