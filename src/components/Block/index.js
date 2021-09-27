import React from 'react';
import './Block.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Block = (props) => {
    const { value, seperate, dark, value2, span } = props;

    const getSeperatedValues = () => {
        return (
            <Row>
                <Col xs={6} className="text-center value-left">
                    <p className="mb-0">{value}</p>
                </Col>
                <Col xs={6} className="text-center">
                    <p className="mb-0">{value2}</p>
                </Col>
            </Row>
        );
    }

    const isSeperate = seperate && value2;
    const rowSpan = isSeperate ? span * 2 : span;


    return (
        <Col xs={rowSpan} className={`my-2 p-2 custom-brd-radius ${dark ? 'bg-custom-gray' : ''} text-center`}>
            {isSeperate ? getSeperatedValues() : value}
        </Col>
    );
}

export default Block;