import React from 'react';
import { arrayOf, object } from 'prop-types';
import Accordion from '../Reusable/Accordion';
import { func } from 'prop-types';

function AccordionList({ accordionList, onClickHandler }) {
  return (
    <>
      {accordionList.map((accordion, i) => (
        <Accordion
          description={accordion.description}
          isActive={accordion.isActive}
          title={accordion.title}
          key={accordion.description}
          onClickHandler={() => onClickHandler(i)}
        />
      ))}
    </>
  );
}

AccordionList.propTypes = {
  accordionList: arrayOf(object).isRequired,
  onClickHandler: func.isRequired
};

export default AccordionList;
