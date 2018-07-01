import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses given', () => {
  const returnedValue = expensesTotal([]);
  expect(returnedValue).toBe(0);
});

test('should correctly add up a single expense', () => {
  const singleExpense = expensesTotal([expenses[0]]);
  expect(singleExpense).toBe(1.95);
});

test('should correctly add up multiple expenses', () => {
  const multipleExpenses = expensesTotal(expenses);
  expect(multipleExpenses).toBe(1141.95);
});
