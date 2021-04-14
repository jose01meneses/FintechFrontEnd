import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import MonthlyRevenueList from './monthly-revenue-list/MonthlyRevenueList';
import TransactionList from '../../../transaction-list';
import AddForm from '../../../addForm';

const Cogs = ({ match }) => {
  const title = "COGS";
  const viewTypeParam = "COGSPS";
  const keyConst = "COGSPS";

  return(
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>  
        <Route path={`${match.url}/cogs-monthly`} component={MonthlyRevenueList} />
        <Route path={`${match.url}/cogs-detail`} component={()  => <TransactionList key={keyConst} viewType={viewTypeParam}/>} />
        <Route path={`${match.url}/add-cogs`} component={() => <AddForm componentsView={title} />} />
        <Redirect from={`${match.url}`} to={`${match.url}/cogs-monthly`} />
      </Switch>
    </Suspense>
  )
};

export default Cogs;