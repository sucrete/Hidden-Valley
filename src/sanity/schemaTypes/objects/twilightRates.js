import { Twilight } from "../../components/twilight";
import rateValidation from "../../utils/rateValidation";

export default {
  title: 'Twilight Rates',
  name: 'twilightRates',
  type: 'object',
  // Connect the custom component
  components: {
    input: Twilight,
  },
  fields: [
    {
      name: 'ratesHeading',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'ratesDescription',
      type: 'text',
      validation: (rule) => rule.max(300),
    },
    //* ROW 1 
    {
      name: 'walkTitle',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'walkTitleDef',
      type: 'string',
      validation: (rule) => rule.max(35),
    },
    {
      name: 'walk9',
      type: 'string',
      validation: rateValidation,
    },
    {
      name: 'walk18',
      type: 'string',
      validation: rateValidation,
    },
    //* ROW 2
    {
      name: 'rideTitle',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'rideTitleDef',
      type: 'string',
      validation: (rule) => rule.max(35),
    },
    {
      name: 'ride9',
      type: 'string',
      validation: rateValidation,
    },
    {
      name: 'ride18',
      type: 'string',
      validation: rateValidation,
    },
   
  ],
};
