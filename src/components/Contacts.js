import React, { Fragment } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

function Contacts () {
    return (
        <Fragment>
            <Container id="contact">
                <h2>Contact Me</h2>
                <Row>
                    <Col className="img-container" md={6}>
                        <div className="img"></div>    
                    </Col>
                    <Col md={6}>
                        <form action="#" className="bg-light p-4 p-md-5 contact-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                            </div>
                            <div className="form-group">
                                <a href="mailto:info@elitecorp.com?subject" className="btn btn-primary py-2 px-4">Send Message</a>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Contacts;