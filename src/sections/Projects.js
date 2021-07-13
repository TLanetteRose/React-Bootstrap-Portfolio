import React from 'react';
import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
//import Button from 'react-bootstrap/Button';
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
                        <Col className="col-12 m-auto">
                            <DesktopComputerIcon className="section__header-icon" />
                            <h1 className="mx-auto d-inline-block project__section-title w-100 text-center">My Websites &amp; Projects </h1>
                            <p className="project__section-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.</p>
                        </Col>
                    </Row>
                    <Row className="section__gallery">
                        <Col className="">
                            <div className="text-center project-card">
                                <Image variant='top' src={cascadePic} className="project-pic"/>
                                <div>
                                    <h2>Cascade Cafe Menu</h2>
                                    <h3>Sketch and SCSS</h3>
                                    <p className="text-dark">I completed a CodePen Challenge to design a cafe menu. I designed the website using Sketch. I used color samples from the main picture in my page styling.</p>
                                    <a href="https://codepen.io/TLanette/pen/JjNjzzW" className="project-link">Cascade Cafe Menu</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="">
                            <div className="text-center project-card">
                                <Image variant='top' src={pomodoroPic} className="project-pic" />
                                <div>
                                    <h2>Pomodoro Clock</h2>
                                    <h3>React Hooks</h3>
                                    <p className="text-dark">I completed this project for FreeCodeCamp. My Pomodoro Clock was designed based on specific guidelines (user stories). It was my second project working with ReactJS.</p>
                                    <a href="https://tlanetterose.github.io/PomodoroClock-TLP/">Pomodoro Clock</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="d-flex flex-column">
                            <Card className="card text-center flex-fill">
                                <Card.Img variant='top' src={insurePic} />
                                <Card.Title>Insure Landing Page</Card.Title>
                                <Card.Subtitle>Bootstrap and SCSS</Card.Subtitle>
                                <Card.Text>This is a challenge from Frontend Mentor. It is a one-page reponsive company website.</Card.Text>
                                <Card.Footer>
                                    <a href="https://insure-landing-page-tlp.vercel.app/">Insure Landing Page</a>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col className="d-flex flex-column">
                            <Card className="card text-center flex-fill">
                                <Card.Img variant='top' src={pricingPic} />
                                <Card.Title>Pricing Component</Card.Title>
                                <Card.Subtitle>JavaScript</Card.Subtitle>
                                <Card.Text>This is a challenge from Frontend Mentor. I had to build a pricing component with a toggle that switched between annual and monthly prices.</Card.Text>
                                <Card.Footer><a href="https://tlanetterose.github.io/Pricing-Component-w-Toggle-TLP/">Pricing Component</a></Card.Footer>.
                            </Card>
                        </Col>
                    </Row>    
            
                </Container>
            </section>
        </>
    )
}

export default Projects