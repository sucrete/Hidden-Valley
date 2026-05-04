export default {
  title: 'Ticker',
  name: 'ticker',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Ticker',
      };
    },
  },
  fields: [
    { 
      name: 'tickerQuestion',
      title: 'Display Ticker?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'tickerArray',
      title: 'Ticker Content',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ document }) => !document?.tickerQuestion,
    },
  ],
};
