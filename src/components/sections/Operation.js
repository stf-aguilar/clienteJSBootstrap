import React, { Component } from 'react';
import Tabla from './Tabla';
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap';

export class Operation extends Component {
    render() {
        return (
            <Container>
                  <Row>
                  <Col xs={6} md={4}>
                        <Card>
                            <Card.Header as="h5">Operación</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Concepto</Form.Label>
                                        <Form.Control as="select">
                                            <option>Elegir...</option>
                                            <option>Transferencia</option>
                                            <option>Depósito</option>
                                            <option>Compra</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Monto</Form.Label>
                                        <Form.Control type="number" placeholder="$" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Fecha</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label as="legend" column sm={2}>
                                                Tipo
                                        </Form.Label>
                                            <Col sm={10}>
                                                <Form.Check
                                                    type="radio"
                                                    label="Ingreso"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    />
        
                                            </Col>
                                            <Col sm={10}>
                                                <Form.Check
                                                    type="radio"
                                                    label="Egreso"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    />
        
                                            </Col>
                                    </Form.Group> 
                                <Button type="submit" variant="primary" size="lg" block>
                                    Enviar
                                </Button>     
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                        <Tabla />               
                </Row>
            </Container>              
        )
    }
}

export default Operation
