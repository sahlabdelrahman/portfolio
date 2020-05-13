import React, { Fragment } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

function About () {
    return (
        <Fragment>
            <Container className="about-container">
                <Row>
                    <Col md={6}>
                        <div className="img"></div>
                    </Col>
                    <Col className="info" md={6}>
                        <h2>About Me</h2>
                        <p>My name's Sahl. I'm looking for a Front-End developer position to use my programming skills in developing applications</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. sed do eiusmod tempor incididunt.</p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default About;