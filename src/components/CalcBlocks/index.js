import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Block from '../Block';

const CalcBlocks = (props) => {

    return (
        <Container fluid className="mt-3">
            <Row className="flex-nowrap">
                <Col xs={5}>
                    <Row className="flex-nowrap">
                        <Block value="Rad" value2="Deg" seperate gray span="4" />
                        <Block value="x!" gray span="4" />
                    </Row>
                    <Row className="flex-nowrap">
                        <Block value="Inv" gray span="4" />
                        <Block value="sin" gray span="4" />
                        <Block value="ln" gray span="4" />
                    </Row>
                    <Row className="flex-nowrap">
                        <Block value="π" gray span="4" />
                        <Block value="cos" gray span="4" />
                        <Block value="log" gray span="4" />
                    </Row>
                    <Row className="flex-nowrap">
                        <Block value="e" gray span="4" />
                        <Block value="tan" gray span="4" />
                        <Block value="√ " gray span="4" />
                    </Row>
                    <Row className="flex-nowrap">
                        <Block value="Ans" gray span="4" />
                        <Block value="EXP" gray span="4" />
                        <Block value="x" gray span="4" sup="y" />
                    </Row>
                </Col>
                <Col xs={6} className="mx-4">
                    <Row className="flex-nowrap">
                        <Block value="(" gray span="3" />
                        <Block value=")" gray span="3" />
                        <Block value="%" gray span="3" />
                        <Block value="CE" gray span="3" />
                    </Row>
                    <Row className="flex-nowrap">
                        <Block value="7" span="3" />
                        <Block value="8" span="3" />
                        <Block value="9" span="3" />
                        <Block value="÷" gray span="3" />
                    </Row>
                    <Row className="flex-nowrap">
                        <Block value="4" span="3" />
                        <Block value="5" span="3" />
                        <Block value="6" span="3" />
                        <Block value="×" gray span="3" />
                    </Row>
                    <Row className="flex-nowrap">
                        <Block value="1" span="3" />
                        <Block value="2" span="3" />
                        <Block value="3" span="3" />
                        <Block value="-" gray span="3" />
                    </Row>
                    <Row className="flex-nowrap">
                        <Block value="0" span="3" />
                        <Block value="." span="3" bold />
                        <Block value="=" primary span="3" />
                        <Block value="+" gray span="3" />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default CalcBlocks;