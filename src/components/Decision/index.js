import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Caption from 'components/Decision/Caption';
import Options from 'components/Decision/Options';

const Decision = () => {
  return (
    <Container fluid="true" className="decision">
      <Row className="align-items-center">
        <Caption agree>Concordo</Caption>
        <Col xs="auto">
          <Row>
            <Options />
          </Row>
          <Row className="decision mobile d-md-none align-items-center justify-content-between mt-2">
            <Caption agree mobile>
              Concordo
            </Caption>
            <Caption disagree mobile>
              Discordo
            </Caption>
          </Row>
        </Col>
        <Caption disagree>Discordo</Caption>
      </Row>
    </Container>
  );
};

export default Decision;
