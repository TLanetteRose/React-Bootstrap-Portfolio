import React from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const Footer = () => {
    return (
        <>
            <div className="footer bg-dark">
                <Container className="container mt-auto">
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </div>
        </>
    )
}

export default Footer