import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ClipboardListIcon } from '@heroicons/react/solid';

const Skills = () => {
    return (
        <>
            <Container className="skills__container">
                <Row>
                    <Col>
                        <ClipboardListIcon className="code-icon"/>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Skills