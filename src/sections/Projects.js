import React from 'react';
//import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DesktopComputerIcon } from '@heroicons/react/solid';
import Image from 'react-bootstrap/Image';
import cascadePic from '../images/CascadeCafeTLPChallenge.png';
import pomodoroPic from '../images/PomodoroClockFreeCodeCamp.png';
import insurePic from '../images/InsureWebsiteFrontendMentor.png';
import pricingPic from '../images/PricingComponentFrontendMentor.png';

import '../style/App.css'; 
//import { projects } from "../data";

const Projects = () => {
    return (
        <>
            <section className="bg-light">
                <Container id="projects" fluid className="project__container container">
                    <Row className="section__header">
                        <Col className="">
                            <DesktopComputerIcon className="section__header-icon" />
                            <h1 className="mx-auto d-inline-block section__header-title w-100 text-center">My Websites &amp; Projects </h1>
                            <p className="section__header-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.</p>
                        </Col>
                    </Row>
                    <Row className="section__gallery row-cols-1 row-cols-sm-2">
                        <Col className="section__gallery-card">
                            <div>
                                <Image src={cascadePic} fluid />
                            </div>
                            <div>
                                <h2>Cascade Cafe Menu</h2>
                                <h4>Sketch and SCSS</h4>
                                <p>I designed the website using Sketch. I used color samples from the main picture in my page styling.</p>
                                <Button className="btn"><a href="https://codepen.io/TLanette/pen/JjNjzzW">Cascade Cafe Menu</a></Button>
                            </div>
                        </Col>
                        <Col className="section__gallery-card">
                            <div>
                                <Image src={pomodoroPic} fluid />
                            </div>
                            <div>
                                <h2>Pomodoro Clock</h2>
                                <h4>React Hooks</h4>
                                <p>My Pomodoro Clock was designed based on specific guidelines (user stories). It was my second project working with ReactJS.</p>
                                <Button className="btn"><a href="https://tlanetterose.github.io/PomodoroClock-TLP/">Pomodoro Clock</a></Button>
                            </div>
                        </Col>
                        <Col className="section__gallery-card"><Image src={insurePic} fluid /></Col>
                        <Col className="section__gallery-card"><Image src={pricingPic} fluid /></Col>
                    </Row>    
            
                </Container>
            </section>
        </>
    )
}

export default Projects