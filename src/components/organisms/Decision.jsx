import React from 'react';
import { FormGroup } from 'reactstrap';

import Option from 'components/molecules/Option/Option';
import { answerOptions } from 'constants/questionnaire';

const Decision = ({ questionNumber, answer, handleDecisionChoice }) => {
  return (
    <FormGroup>
      {answerOptions.map((option) => (
        <Option
          key={`${questionNumber}-${option.id}`}
          option={option.id}
          label={option.name}
          value={answer}
          onClick={handleDecisionChoice}
        />
      ))}
    </FormGroup>
  );
};

export default Decision;
