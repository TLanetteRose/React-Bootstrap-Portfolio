import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
//import Image from 'react-bootstrap/Image';
import cascadePic from '../images/CascadeCafeTLPChallenge.png';
import pomodoroPic from '../images/PomodoroClockFreeCodeCamp.png';
import insurePic from '../images/InsureWebsiteFrontendMentor.png';
import pricingPic from '../images/PricingComponentFrontendMentor.png';

import '../style/App.css'; 
//import { projects } from "../data";

const Projects = () => {
    return (
        <>
            <Container id="projects" fluid className="container project__container m-auto">
                
                <CardGroup class="card-group">
                    <Card className="card">
                        <Card.Img variant='top' src={cascadePic} />
                        <Card.Title>Cascade Cafe Menu</Card.Title>
                        <Card.Subtitle>Sketch and SCSS</Card.Subtitle>
                        <Card.Text>I completed a CodePen Challenge to design a cafe menu. I designed the website using Sketch. I used color samples from the main picture in my page styling.</Card.Text>
                        <Button variant="light"><a href="https://codepen.io/TLanette/pen/JjNjzzW">Cascade Cafe Menu</a></Button>
                    </Card>
                    <Card className="card">
                        <Card.Img variant='top' src={pomodoroPic} />
                        <Card.Title>Pomodoro Clock</Card.Title>
                        <Card.Subtitle>React Hooks</Card.Subtitle>
                        <Card.Text>I completed this project for FreeCodeCamp. My Pomodoro Clock was designed based on specific guidelines (user stories). It was my second project working with ReactJS.</Card.Text>
                        <Button variant="light"><a href="https://tlanetterose.github.io/PomodoroClock-TLP/">Pomodoro Clock</a></Button>
                    </Card>
                    <Card className="card">
                        <Card.Img variant='top' src={insurePic} />
                        <Card.Title>Insure Website</Card.Title>
                        <Card.Subtitle>Bootstrap and SCSS</Card.Subtitle>
                        <Card.Text>This is a challenge from Frontend Mentor. It is a one-page reponsive company website.</Card.Text>
                        <Button variant="light"><a href="https://insure-landing-page-tlp.vercel.app/">Cascade Cafe Menu</a></Button>
                    </Card>
                    <Card className="card">
                        <Card.Img variant='top' src={pricingPic} />
                        <Card.Title></Card.Title>
                        <Card.Subtitle></Card.Subtitle>
                        <Card.Text></Card.Text>
                        <Button variant="light"><a href="https://codepen.io/TLanette/pen/JjNjzzW">Cascade Cafe Menu</a></Button>
                    </Card>
                </CardGroup>
                    

            </Container>
        </>
    )
}

export default Projects