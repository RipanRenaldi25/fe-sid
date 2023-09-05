import React from 'react';
import { arrayOf, object, func } from 'prop-types';
import Accordion from '../Reusable/Accordion';

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
  onClickHandler: func.isRequired,
};

export default AccordionList;
