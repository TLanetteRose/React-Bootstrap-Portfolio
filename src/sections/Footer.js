import React from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Footer = () => {
    return (
        <>
            <Container className="container mt-auto fixed-bottom">
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </>
    )
}

export default Footer