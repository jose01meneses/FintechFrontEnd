import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import MonthlyRevenueList from './monthly-revenue-list/MonthlyRevenueList';
import TransactionList from '../../../transaction-list';
import AddForm from '../../../addForm';

const Capex = ({ match }) => {
  const title = "CAPEX";
  const viewTypeParam = "capitalPS";
  const keyConst = "capitalPS";

  return(
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>  
        <Route path={`${match.url}/capitalexpenses-monthly`} component={MonthlyRevenueList} />
        <Route path={`${match.url}/capitalexpenses-detail`} component={()  => <TransactionList key={keyConst} viewType={viewTypeParam}/>} />
        <Route path={`${match.url}/add-capitalexpenses`} component={() => <AddForm componentsView={title} />} />
        <Redirect from={`${match.url}`} to={`${match.url}/capitalexpenses-monthly`} />
      </Switch>
    </Suspense>
  )
};

export default Capex;