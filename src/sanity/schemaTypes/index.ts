import { SchemaTypeDefinition } from 'sanity';

// DOCUMENTS
import ratesType from './ratesType';
import tickerType from './tickerType';

// OBJECTS
import weekdayRates from './objects/weekdayRates';
import golfPass from './objects/golfPass';
import miscRates from './objects/miscRates';
import punchCards from './objects/punchCards';
import standardRates from './objects/standardRates';
import weekendRates from './objects/weekendRates';
import twilightRates from './objects/twilightRates';
import nonStandardRates from './objects/nonStandardRates';

export const schemaTypes: SchemaTypeDefinition[] = [
  // Documents
  ratesType,
  tickerType,
  // Objects
  golfPass,
  miscRates,
  punchCards,
  standardRates,
  weekdayRates,
  weekendRates,
  twilightRates,
  nonStandardRates,
];
