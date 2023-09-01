import ACCORDION_ACTION_TYPE from './AccordionActionType';

export const toggleAccordionACtioncreator = (index) => ({
  type: ACCORDION_ACTION_TYPE.toggleAccordion,
  payload: {
    index,
  },
});
