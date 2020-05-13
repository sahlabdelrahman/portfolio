import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer () {
    return (
        <footer className="border-top mt-5">
            <Container >
                <Row className="justify-content-md-between p-3">
                    <Col className="p-0 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start" md={3} >
                        SAHL ABDELRAHMAN
                    </Col>
                    <Col className="p-0 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-end" md={3} >
                        &copy; 2020 SBA
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;