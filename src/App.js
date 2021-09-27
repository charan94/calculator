import './App.scss';
import Container from 'react-bootstrap/Container';
import SearchBar from './components/SearchBar';
import CalcBlocks from './components/CalcBlocks';

function App() {
  // return (
  //   <Container className="p-5">
  //     <Col xs={12}>
  //       <Row>
  //         <SearchBar />
  //       </Row>
  //     </Col>
  //     <Col xs={6}>
  //       <CalcBlocks />
  //     </Col>
  //     <Col xs={6}>

  //     </Col>
  //   </Container>
  // );
  return (
    <Container className="mt-5">
      <SearchBar />
      <CalcBlocks />
    </Container>
  )
}

export default App;
