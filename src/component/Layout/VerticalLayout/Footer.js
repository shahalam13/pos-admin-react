import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                    <footer className="footer">
                        <Container fluid>
                            <Row>
                                <Col sm="12">
                                    © {new Date().getFullYear()} Bronox <span className="d-none d-sm-inline-block"> - Crafted with <i className="mdi mdi-heart text-danger"></i> by Shah Alam.</span>
                                </Col>
                            </Row>
                        </Container>
                    </footer>
            </React.Fragment>
        );
    }
}

export default Footer;