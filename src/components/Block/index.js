import React from 'react';
import './Block.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Block = (props) => {
    const { value, seperate, gray, value2, span, primary, bold } = props;

    const getSeperatedValues = () => {
        return (
            <Row className="position-relative">
                <Col xs={6} className="text-center value-left">
                    <p className="mb-0">{value}</p>
                </Col>
                <Col xs={6} className="text-center">
                    <p className="mb-0 text-secondary">{value2}</p>
                </Col>
            </Row>
        );
    }

    const color = gray ? 'gray' : primary ? 'primary' : '';

    console.log('color ', color);

    const isSeperate = seperate && value2;
    const rowSpan = isSeperate ? span * 2 : span;


    return (
        <Col xs={rowSpan} className={`m-1 p-2 custom-brd-radius bg-custom-${color} text-center ${bold ? 'fw-bold' : ''}`}>
            {isSeperate ? getSeperatedValues() : value}
        </Col>
    );
}

export default Block;