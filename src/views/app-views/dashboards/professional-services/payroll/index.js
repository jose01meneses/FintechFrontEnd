import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import MonthlyRevenueList from './monthly-revenue-list/MonthlyRevenueList';
import TransactionList from '../../../transaction-list';
import AddForm from '../../../addForm';

const Payroll = ({ match }) => {
  const title = "Payroll";
  const viewTypeParam = "PayrollPS";
  const keyConst = "PayrollPS";

  return(
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>  
        <Route path={`${match.url}/payroll-monthly`} component={MonthlyRevenueList} />
        <Route path={`${match.url}/payroll-detail`} component={()  => <TransactionList key={keyConst} viewType={viewTypeParam}/>} />
        <Route path={`${match.url}/add-payroll`} component={() => <AddForm componentsView={title} />} />
        <Redirect from={`${match.url}`} to={`${match.url}/payroll-monthly`} />
      </Switch>
    </Suspense>
  )
};

export default Payroll;