import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Banner () {
    return (
        <Fragment>
            <Container className="banner-container" fluid={true}>
                <Row>
                    <Col>
                        <h3>HEY! I AM</h3>
                        <h1>Sahl Abdelrahman</h1>
                        <h2>I'm a <span>Front-End Developer</span></h2>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Banner;
