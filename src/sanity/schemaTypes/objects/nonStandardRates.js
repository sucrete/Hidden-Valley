import { NonStandard } from "../../components/nonstandard";
import rateValidation from "../../utils/rateValidation";

export default {
  title: 'Non-Standard Rates',
  name: 'nonStandardRates',
  type: 'object',
  // Connect the custom component
  components: {
    input: NonStandard,
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
      name: 'ADMTitle',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'ADMTitleDef',
      type: 'string',
      validation: (rule) => rule.max(35),
    },
    {
      name: 'ADMPrice',
      type: 'string',
      validation: rateValidation,
    },

    //* ROW 2
    {
      name: 'collegeStudentTitle',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'collegeStudentTitleDef',
      type: 'string',
      validation: (rule) => rule.max(35),
    },
    {
      name: 'collegeStudentPrice',
      type: 'string',
      validation: rateValidation,
    },

    //* ROW 3
    {
      name: 'adultHandicapTitle',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'adultHandicapTitleDef',
      type: 'string',
      validation: (rule) => rule.max(35),
    },
    {
      name: 'adultHandicapPrice',
      type: 'string',
      validation: rateValidation,
    },
    //* ROW 4
    {
      name: 'juniorHandicapTitle',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'juniorHandicapTitleDef',
      type: 'string',
      validation: (rule) => rule.max(35),
    },
    {
      name: 'juniorHandicapPrice',
      type: 'string',
      validation: rateValidation,
    },
   
  ],
};
