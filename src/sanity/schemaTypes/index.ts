import { SchemaTypeDefinition } from 'sanity';

// DOCUMENTS
import ratesType from './ratesType';
import tickerType from './tickerType';

// OBJECTS
import golfPass from './objects/golfPass';
import miscRates from './objects/miscRates';
import punchCards from './objects/punchCards';
import standardRates from './objects/standardRates';

export const schemaTypes: SchemaTypeDefinition[] = [
  // Documents
  ratesType,
  tickerType,
  // Objects
  golfPass,
  miscRates,
  punchCards,
  standardRates,
];
