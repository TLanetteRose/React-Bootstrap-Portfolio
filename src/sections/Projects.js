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
            <section className="project__section mx-auto">
                <Container fluid className="project__container">
                    <div  className="d-flex flex-column mb-2 section__header">
                        <DesktopComputerIcon className="mx-auto inline-block mb-4 section__header-icon" />
                        <h1 className="heading-dark text-center mb-4">
                            My Webpages and Projects
                        </h1>
                        <p className="text-dark fs-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.</p>
                    </div>

                    <Row className="row-cols-1 row-cols-lg-2 section__gallery mx-auto justify-content-around">
                        <Col className="bg-light section__gallery-card m-2">
                            <div>
                                <Image src={cascadePic} alt="Cafe Menu wepage" className="img-fluid p-4"/>
                            </div>
                            <div>
                                <h2>Cascade Cafe Menu</h2>
                                <h4>Sketch and SCSS</h4>
                                <p>I completed a CodePen Challenge to design a cafe menu. I designed the website using Sketch. I used color samples from the main picture in my page styling. </p>
                                <Button className="btn-light">
                                    <a href="https://codepen.io/TLanette/pen/JjNjzzW" className="text-dark">Cascade Cafe Menu Website</a>
                                </Button>
                            </div>
                        </Col>

                        <Col className="bg-light section__gallery-card m-2">
                            <div>
                                <Image src={pomodoroPic} alt="Cafe Menu wepage" className="img-fluid p-4"/>
                            </div>
                            <div>
                                <h2>Pomodoro Clock</h2>
                                <h4>React Hooks</h4>
                                <p>I completed this project for FreeCodeCamp. My Pomodoro Clock was designed based on specific guidelines (user stories). It was my second project working with ReactJS.</p>
                                <Button className="btn-light">
                                    <a href="https://tlanetterose.github.io/PomodoroClock-TLP/" className="text-dark">Pomodoro Clock App Website</a>
                                </Button>
                            </div>
                        </Col>
                        <Col className="bg-light section__gallery-card m-2">
                            <div>
                                <Image src={insurePic} alt="Cafe Menu wepage" className="img-fluid p-4"/>
                            </div>
                            <div>
                                <h2>Insure Landing Page</h2>
                                <h4>Bootstrap and SCSS</h4>
                                <p>This is a challenge from Frontend Mentor. It is a one-page reponsive company landing page using Bootstrap and SCSS.</p>
                                <Button className="btn-light">
                                    <a href="https://insure-landing-page-tlp.vercel.app/" className="text-dark">Insure Landing Page Website</a>
                                </Button>
                            </div>
                        </Col>
                        <Col className="bg-light section__gallery-card m-2">
                            <div>
                                <Image src={pricingPic} alt="Pricing Component wepage" className="img-fluid p-4"/>
                            </div>
                            <div>
                                <h2>Pricing Componentu</h2>
                                <h4>JavaScript</h4>
                                <p>This is a challenge from Frontend Mentor. I had to build a pricing component with a toggle that switched between annual and monthly prices</p>
                                <Button className="btn-light">
                                    <a href="https://tlanetterose.github.io/Pricing-Component-w-Toggle-TLP/" className="text-dark">Cascade Cafe Menu Website</a>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Projects