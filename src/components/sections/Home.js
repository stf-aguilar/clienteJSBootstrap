import React, { Component } from 'react';
import { Row, Col, Container, Table } from 'react-bootstrap';
import Tabla from './Tabla';
import Valor from './Valor';

export class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Valor />
                    <Tabla />
                </Row>
            </Container>
        )
    }
}

export default Home
