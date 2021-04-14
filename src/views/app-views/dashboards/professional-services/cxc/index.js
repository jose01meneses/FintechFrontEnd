import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import MonthlyRevenueList from './monthly-revenue-list/MonthlyRevenueList';
import TransactionList from '../../../transaction-list';
import AddForm from '../../../addForm';

const Cxc = ({ match }) => {
  const title = "CXC";
  const viewTypeParam = "CXCPS";
  const keyConst = "CXCPS";

  return(
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>  
        <Route path={`${match.url}/cxc-monthly`} component={MonthlyRevenueList} />
        <Route path={`${match.url}/cxc-detail`} component={()  => <TransactionList key={keyConst} viewType={viewTypeParam}/>} />
        <Route path={`${match.url}/add-cxc`} component={() => <AddForm componentsView={title} />} />
        <Redirect from={`${match.url}`} to={`${match.url}/cxc-monthly`} />
      </Switch>
    </Suspense>
  )
};

export default Cxc;