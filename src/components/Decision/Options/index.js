import React from 'react';
import { Col } from 'reactstrap';
import Option from 'components/Decision/Options/Option';

const Options = () => {
  return (
    <Col className="options d-flex align-items-center justify-content-between">
      <Option agree max />
      <Option agree min />
      <Option disagree min />
      <Option disagree max />
    </Col>
  );
};

export default Options;
