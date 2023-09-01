import ACCORDION_ACTION_TYPE from './AccordionActionType';

const initialState = [
  {
    title: 'Accordion Title 1',
    description: 'Accordion Description 1',
    isActive: false,
  },
  {
    title: 'Accordion Title 2',
    description: 'Accordion Description 2',
    isActive: false,
  },
  {
    title: 'Accordion Title 3',
    description: 'Accordion Description 3',
    isActive: false,
  },
];

const accordionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACCORDION_ACTION_TYPE.toggleAccordion:
      return state.map((accordion, accordionIndex) => {
        if (accordion.isActive && accordionIndex === action.payload.index) {
          return {
            ...accordion,
            isActive: false,
          };
        }
        return {
          ...accordion,
          isActive: accordionIndex === action.payload.index,

        };
      });
    default:
      return state;
  }
};

export default accordionReducer;
