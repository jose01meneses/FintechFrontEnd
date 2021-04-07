import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import MonthlyExpenseList from './monthly-expenses-list/MonthlyExpensesList';
import ExpenseDetail from './expense-detail';

const Expense = ({ match }) => {
  return(
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>  
        <Route path={`${match.url}/expense-monthly`} component={MonthlyExpenseList} />
        <Route path={`${match.url}/expense-detail`} component={ExpenseDetail} />
        <Redirect from={`${match.url}`} to={`${match.url}/revenue-detail`} />
      </Switch>
    </Suspense>
  )
};

export default Expense;