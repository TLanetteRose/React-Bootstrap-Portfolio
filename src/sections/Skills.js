import React from 'react';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Card from 'react-bootstrap/Card';
import { ClipboardListIcon } from '@heroicons/react/solid';

const Skills = () => {
    return (
        <>
            <section className="skills__section mx-auto w-100">
                <Container fluid className="skills__container">
                    <div className="d-flex flex-column mb-2 section__header">
                        <ClipboardListIcon className="mx-auto inline-block mb-4 section__header-icon"/> 
                         <h1 className="mx-auto d-inline-block skills__section-title text-center w-100">My Skills</h1>
                        <p className="skills-text text-dark fs-3"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.</p>
                    </div>
                    <div>
                        
                    </div>
                
                </Container>
            </section>
        </>
    )
}

export default Skills