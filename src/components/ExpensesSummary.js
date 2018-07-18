import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
  const expensesCount = props.expenses.length;
  const expensesTotalValue = expensesTotal(props.expenses);
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing<span>{` ${expensesCount} `}</span>
          {expensesCount === 1 ? 'expense ' : 'expenses '}
          totalling <span>{`${numeral(expensesTotalValue).format('$0,0.00')}`}</span>
        </h1>
        <div className="page-header__actions">
          <Link
            className="button"
            to="/create"
          >
          Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
