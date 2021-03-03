import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer style={{ marginBottom: '10px' }}>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; C8 - Smart Grace Mark Calculator - 2021
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
