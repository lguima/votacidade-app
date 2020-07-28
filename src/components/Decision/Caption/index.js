import React from 'react';
import { Col } from 'reactstrap';

import './index.scss';

const Caption = ({ agree, disagree, mobile, children }) => {
  const agreeClass = agree ? ' agree text-left' : '';
  const disagreeClass = disagree ? ' disagree text-right' : '';
  const desktopClass = !mobile ? ' d-none d-md-block' : '';

  return (
    <Col
      xs="auto"
      className={`caption` + agreeClass + disagreeClass + desktopClass}
    >
      {children}
    </Col>
  );
};

export default Caption;
