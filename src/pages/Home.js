import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Breadcrumb} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import jumbotronPic from '../images/blackwomancodingsmall.jpg';
import '../style/App.css';

const Home = () => {
    return (
        <>
            <Jumbotron>
                <Container>
                    <h1>Hi, I'm Trista!</h1>
                    <p>I love building amazing websites!</p>
                </Container>
                <Container>
                    <Image src={jumbotronPic} />
                </Container>
            </Jumbotron>

            <Breadcrumb>
                <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
            </Breadcrumb>
        </>
    )
}

export default Home