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
            <section className="project__section">
                <Container fluid className="project__container">
                    <div  className="d-flex flex-column mb-2 section__header">
                        <DesktopComputerIcon className="mx-auto inline-block mb-4 section__header-icon" />
                        <h1 className="heading-dark text-center mb-4">
                            My Webpages and Projects
                        </h1>
                        <p className="text-dark fs-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.</p>
                    </div>
                    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 section__gallery g-1">
                        <Col className="bg-light section__gallery-card mb-4">
                            <div>
                                <Image src={cascadePic} alt="Cafe Menu wepage" className="img-fluid p-4"/>
                            </div>
                            <div>
                                <h2>Cascade Cafe Menu</h2>
                                <h4>Sketch and SCSS</h4>
                                <p>I designed the website using Sketch. I used color samples from the main picture in my page styling.</p>
                                <Button className="btn-light">
                                    <a href="https://codepen.io/TLanette/pen/JjNjzzW" className="text-dark">Cascade Cafe Menu Website</a>
                                </Button>
                            </div>
                        </Col>

                        <Col className="bg-light section__gallery-card mb-4">
                            <div>
                                <Image src={cascadePic} alt="Cafe Menu wepage" className="img-fluid p-4"/>
                            </div>
                            <div>
                                <h2>Cascade Cafe Menu</h2>
                                <h4>Sketch and SCSS</h4>
                                <p>I designed the website using Sketch. I used color samples from the main picture in my page styling.</p>
                                <Button className="btn-light">
                                    <a href="https://codepen.io/TLanette/pen/JjNjzzW" className="text-dark">Cascade Cafe Menu Website</a>
                                </Button>
                            </div>
                        </Col>
                        <Col className="bg-light section__gallery-card mb-4">
                            <div>
                                <Image src={cascadePic} alt="Cafe Menu wepage" className="img-fluid p-4"/>
                            </div>
                            <div>
                                <h2>Cascade Cafe Menu</h2>
                                <h4>Sketch and SCSS</h4>
                                <p>I designed the website using Sketch. I used color samples from the main picture in my page styling.</p>
                                <Button className="btn-light">
                                    <a href="https://codepen.io/TLanette/pen/JjNjzzW" className="text-dark">Cascade Cafe Menu Website</a>
                                </Button>
                            </div>
                        </Col>
                        <Col className="bg-light section__gallery-card mb4">
                            <div>
                                <Image src={cascadePic} alt="Cafe Menu wepage" className="img-fluid p-4"/>
                            </div>
                            <div>
                                <h2>Cascade Cafe Menu</h2>
                                <h4>Sketch and SCSS</h4>
                                <p>I designed the website using Sketch. I used color samples from the main picture in my page styling.</p>
                                <Button className="btn-light">
                                    <a href="https://codepen.io/TLanette/pen/JjNjzzW" className="text-dark">Cascade Cafe Menu Website</a>
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