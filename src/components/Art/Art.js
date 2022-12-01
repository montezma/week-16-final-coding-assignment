import React from 'react'
import './ArtStyles.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function Art() {
    return (
      <Container>
        <Row style={{ margin: "0" , padding: "0"}}>
          <Col ><Image fluid src="https://cdn.myportfolio.com/69aa05b7-5095-45ad-a961-c41b3cfa9717/650dbe1b-6484-4d52-983b-bcd291e5490f.png?h=1dfe65607bae9478db79d5bb9953e2d4" alt="1" ></Image></Col>
          <Col ><Image fluid  src="https://cdn.myportfolio.com/69aa05b7-5095-45ad-a961-c41b3cfa9717/e36318e0-21b2-48c5-8d92-c0da0a2524ca.png?h=9800927ed91e79a3cc7c8701ff989ca8" alt="1"></Image></Col>
          <Col ><Image fluid  src="https://cdn.myportfolio.com/69aa05b7-5095-45ad-a961-c41b3cfa9717/66419923-da46-472d-99d0-9fd51681757c.png?h=c5ffee89d77250e6a2dbf03b19995aea" alt="1"></Image></Col>
        </Row>
        <Row>
          <Col ><Image fluid  src="https://cdn.myportfolio.com/69aa05b7-5095-45ad-a961-c41b3cfa9717/0f8034d7-3084-428c-ac12-b102f2e6bff8.png?h=544e57ab36f8ebeccca9978cac69f8e3" alt="1"></Image></Col>
          <Col ><Image fluid  src="https://cdn.myportfolio.com/69aa05b7-5095-45ad-a961-c41b3cfa9717/d1ac7aff-1618-499d-adaa-b5598f403c3d.png?h=2f62bc452b8f9def71d3b0526740a90c" alt="1"></Image></Col>
          <Col ><Image fluid  src="https://cdn.myportfolio.com/69aa05b7-5095-45ad-a961-c41b3cfa9717/1a292af3-228c-45f3-8d87-5939069c98ca.png?h=c481708a7019df1e2cb9268fcf00285a" alt="1"></Image></Col>
        </Row>
      </Container>
    );
  }


export default Art

