import moment from 'moment';

// Get visivlenexpenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(e => {
      const createdAtMoment = moment(e.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const textMatch = e.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

export default getVisibleExpenses;
