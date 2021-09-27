import React from 'react';
import './SearchBar.scss';
import RevertImg from '../../assets/revert.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchBar = (props) => {

    return (
        <div className="container-fluid search">
            <Row className="mt-2">
                <Col xs={6}>
                    <img alt="revert-btn" src={RevertImg} className="revert float-start" />
                </Col>
                <Col xs={6}>
                    <p className="color-custom-gray float-end mb-0 small fw-500">Ans = 96</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <p className="float-end mb-0 small fw-normal font-2 fw-500">8 + 12</p>
                </Col>
            </Row>
        </div>
    );
}

export default SearchBar;