import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import MonthlyRevenueList from './monthly-revenue-list/MonthlyRevenueList';
import TransactionList from '../../../transaction-list';
import AddForm from '../../../addForm';

const Sga = ({ match }) => {
  const title = "SG&A";
  const viewTypeParam = "SGAPS";
  const keyConst = "SGAPS";

  return(
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>  
        <Route path={`${match.url}/sga-monthly`} component={MonthlyRevenueList} />
        <Route path={`${match.url}/sga-detail`} component={()  => <TransactionList key={keyConst} viewType={viewTypeParam}/>} />
        <Route path={`${match.url}/add-sga`} component={() => <AddForm componentsView={title} />} />
        <Redirect from={`${match.url}`} to={`${match.url}/sga-monthly`} />
      </Switch>
    </Suspense>
  )
};

export default Sga;