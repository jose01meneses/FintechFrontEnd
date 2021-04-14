import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import MonthlyExpenseList from './monthly-expenses-list/MonthlyExpensesList';
import TransactionList from '../../../transaction-list';
import AddForm from '../../../addForm';

const Expense = ({ match }) => {
  const title = "Expenses";
  const viewTypeParam = "ExpenPersonal";
  const keyConst = "ExpenPersonal";

  return(
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>  
        <Route path={`${match.url}/expense-monthly`} component={MonthlyExpenseList} />
        {/*<Route path={`${match.url}/expense-detail`} component={ExpenseDetail} />*/}
        {/*<Route path={`${match.url}/add-expense`} component={AddForm} componentsView={title} />*/}
        <Route path={`${match.url}/expense-detail`} component={()  => <TransactionList key={keyConst} viewType={viewTypeParam}/>} />
        <Route path={`${match.url}/add-expense`} component={() => <AddForm componentsView={title} />} />
        <Redirect from={`${match.url}`} to={`${match.url}/revenue-detail`} />
      </Switch>
    </Suspense>
  )
};

export default Expense;