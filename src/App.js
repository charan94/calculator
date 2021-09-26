import './App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Block from './components/Block';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Container className="p-5">
      <Col xs={6}>
        <Row>
          <SearchBar />
        </Row>
        <Row>
          <Col xs={2} className="m-2">
            <Block value="2" dark span={3} />
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default App;
