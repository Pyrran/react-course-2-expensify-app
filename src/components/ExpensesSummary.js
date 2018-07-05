import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
  const expensesCount = props.expenses.length;
  const expensesTotalValue = expensesTotal(props.expenses);
  return (
    <div>
      <h1>
        {`Viewing ${expensesCount} `}
        {expensesCount === 1 ? 'expense' : 'expenses'}
        {` totalling ${numeral(expensesTotalValue).format('$0,0.00')}`}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
