import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Card from 'react-bootstrap/Card';
import { ClipboardListIcon } from '@heroicons/react/solid';

const Skills = () => {
    return (
        <>
            <Container className="section__container">
                <Row>
                    <Col>
                        <ClipboardListIcon className="code-icon section__header-icon"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="mx-auto d-inline-block skills__section-title text-center w-100">My Skills</h1>
                        <p className="skills-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.</p>
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}

export default Skills