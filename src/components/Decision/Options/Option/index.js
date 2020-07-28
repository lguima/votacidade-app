import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const Option = ({ agree, disagree, max, min }) => {
  const agreeClass = agree ? ' agree' : '';
  const disagreeClass = disagree ? ' disagree' : '';
  const maxClass = max ? ' max' : '';
  const minClass = min ? ' min' : '';

  const handleClick = (e) => {
    e.preventDefault();

    e.currentTarget.classList.toggle('active');
  };

  return (
    <div
      className={
        `option rounded-circle d-flex align-items-center justify-content-center mx-3` +
        agreeClass +
        disagreeClass +
        maxClass +
        minClass
      }
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={'check'} color="#fff" />
    </div>
  );
};

export default Option;
