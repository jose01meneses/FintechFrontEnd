import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import MonthlyRevenueList from './monthly-revenue-list/MonthlyRevenueList';
import TransactionList from '../../../transaction-list';
import AddForm from '../../../addForm';

const Cxp = ({ match }) => {
  const title = "CXP";
  const viewTypeParam = "CXPPS";
  const keyConst = "CXPPS";

  return(
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>  
        <Route path={`${match.url}/cxp-monthly`} component={MonthlyRevenueList} />
        <Route path={`${match.url}/cxp-detail`} component={()  => <TransactionList key={keyConst} viewType={viewTypeParam}/>} />
        <Route path={`${match.url}/add-cxp`} component={() => <AddForm componentsView={title} />} />
        <Redirect from={`${match.url}`} to={`${match.url}/cxp-monthly`} />
      </Switch>
    </Suspense>
  )
};

export default Cxp;