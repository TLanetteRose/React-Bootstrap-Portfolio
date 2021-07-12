import React from 'react';
//import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


import { projects } from "../data";

const Projects = () => {
    return (
        <>
            <Container id="projects" fluid className="container project__container m-auto">
                <Row>
                    <Col className="project-header">
                        <h1>My Work...</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="project-gallery">
                        {projects.map((project) => (
                            <a href={project.link} key={project.image} className="w-100">
                                <div>
                                    <Image src={project.image} alt="gallery" />

                                    <div>
                                        <h2>{project.subtitle}</h2>
                                        <h1>{project.title}</h1>
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </Col>
                </Row>
                

            </Container>
        </>
    )
}

export default Projects