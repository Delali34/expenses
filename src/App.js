import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
import { Container,Row,Col } from "react-bootstrap";
import AddExpenses from './components/AddExpenses';
import AllExpenses from './components/AllExpenses';
import './myStyles.css'
function App() {

  

  return (
   <>
   <Container>
    <Row>
      <Col className='addNotes'>
      <AddExpenses/>
      </Col>
    </Row>

    <Row>
    <Col>
     <AllExpenses />
      </Col>
    </Row>
   </Container>
   </>
  );
}

export default App;