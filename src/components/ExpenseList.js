import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

const getTotals = (props) => {
  if (props.expenses.length === 0) {
    return (<p>No expenses</p>);
  }
  return (
    <div>
      <p>{`There are ${props.expenses.length} expenses, totalling `}
        {numeral(expensesTotal(props.expenses)).format('$0,0.00')}
      </p>
    </div>
  );
};

export const ExpenseList = (props) => (
  <div>
    {
      <div>
        {getTotals(props)}
        <p>{props.expenses.map((expense) => (
          <ExpenseListItem key={expense.id} {...expense} />))}
        </p>
      </div>
    }
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
