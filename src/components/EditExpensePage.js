import React from 'react';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = props => {
  console.log(props);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={e => {
          props.dispatch(editExpense(props.expense.id, e));
          props.history.push('/');
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(e => {
      return e.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditExpensePage);
