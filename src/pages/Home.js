import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import profilePic from '../images/TLPProfile.JPG';
import '../style/App.css';

const Home = () => {
    return (
        <>
            <Jumbotron fluid>
                <Container className="jumbotron__container mx-auto my-5">
                    <Row className="jumbotron-row">
                        <Col>
                            <Image src={profilePic} className="profile-pic mx-auto my-auto d-block" roundedCircle/>
                        </Col>
                    </Row>
                    <Row className="jumbotron-row">
                        <Col>
                            <Card className="jumbotron-card card mx-auto">
                                <Card.Body>
                                    <Card.Title className="p-3">
                                        <h1 className="jumbotron-heading">Hi, I'm Trista!</h1>
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 p-3 text-muted jumbotron-subtitle">
                                        I love building amazing websites!
                                    </Card.Subtitle>
                                    <Card.Text className="p-3">
                                        <p className="jumbotron-text">I love building amazing websites!</p>
                                    </Card.Text>
                                    <Button variant="light" size="lg">
                                        <a href="#about">Find out More...</a></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <Breadcrumb className="breadcrumb__container">
                <Breadcrumb.Item href='/' className="breadcrumb-item">Home</Breadcrumb.Item>
            </Breadcrumb>
        </>
    )
}

export default Home