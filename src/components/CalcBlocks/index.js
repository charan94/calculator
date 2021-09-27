import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Block from '../Block';

const CalcBlocks = (props) => {

    return (
        <Container fluid>
            <Row>
                <Col xs={5}>
                    <Row>
                        <Block value="Rad" value2="Deg" seperate dark span="4" />
                        <Block value="x!" dark span="4" />
                    </Row>
                    <Row>
                        <Block value="Inv" dark span="4" />
                        <Block value="sin" dark span="4" />
                        <Block value="ln" dark span="4" />
                    </Row>
                    <Row>
                        <Block value="π" dark span="4" />
                        <Block value="cos" dark span="4" />
                        <Block value="log" dark span="4" />
                    </Row>
                    <Row>
                        <Block value="e" dark span="4" />
                        <Block value="tan" dark span="4" />
                        <Block value="root" dark span="4" />
                    </Row>
                    <Row>
                        <Block value="Ans" dark span="4" />
                        <Block value="EXP" dark span="4" />
                        <Block value="xy" dark span="4" />
                    </Row>
                </Col>
                <Col xs={5}>

                </Col>
                <Col xs={2}>

                </Col>
            </Row>
        </Container>
    )
}

export default CalcBlocks;