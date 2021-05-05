import React, { Component } from 'react';
import { Row, Col, Container, Table } from 'react-bootstrap';

export class Tabla extends Component {
    render() {
        return (
            <Col xs={12} md={8}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Concepto</th>
                            <th>Monto</th>
                            <th>Fecha</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Compra</td>
                            <td>$500-</td>
                            <td>22/03/21</td>
                            <td>Egreso</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Depósito</td>
                            <td>$200-</td>
                            <td>01/04/21</td>
                            <td>Ingreso</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Transferencia</td>
                            <td>$50-</td>
                            <td>20/04/21</td>
                            <td>Egreso</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Compra</td>
                            <td>$500-</td>
                            <td>22/03/21</td>
                            <td>Egreso</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Compra</td>
                            <td>$500-</td>
                            <td>22/03/21</td>
                            <td>Egreso</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Compra</td>
                            <td>$500-</td>
                            <td>22/03/21</td>
                            <td>Egreso</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Compra</td>
                            <td>$500-</td>
                            <td>22/03/21</td>
                            <td>Egreso</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Compra</td>
                            <td>$500-</td>
                            <td>22/03/21</td>
                            <td>Egreso</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Compra</td>
                            <td>$500-</td>
                            <td>22/03/21</td>
                            <td>Egreso</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Compra</td>
                            <td>$500-</td>
                            <td>22/03/21</td>
                            <td>Egreso</td>
                        </tr>
                    </tbody>
                </Table>
              </Col>
            
        )
    }
}

export default Tabla
