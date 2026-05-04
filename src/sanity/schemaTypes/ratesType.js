export default {
  title: 'Greens Fees',
  name: 'rates',
  type: 'document',
  groups: [
    { name: 'standardRates', title: 'Standard Rates' },
    { name: 'miscRates', title: 'Misc. Rates' },
    { name: 'punchCardRates', title: 'Punch Cards' },
    { name: 'golfPass', title: 'Golf Pass' },
  ],
  preview: {
    prepare() {
      return {
        title: 'Greens Fees',
      };
    },
  },
  fields: [
    {
      title: 'Standard Rates',
      name: 'standard',
      type: 'standardRates',
      group: 'standardRates',
    },
    {
      title: 'Miscellaneous Rates',
      name: 'misc',
      type: 'miscRates',
      group: 'miscRates',
    },
    {
      title: 'Punch Cards',
      name: 'punchCardRates',
      type: 'punchCardRates',
      group: 'punchCardRates',
    },
    {
      title: 'Golf Pass',
      name: 'golfPass',
      type: 'golfPass',
      group: 'golfPass',
    },
  ],
};
