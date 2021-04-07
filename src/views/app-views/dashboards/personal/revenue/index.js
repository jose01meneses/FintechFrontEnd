import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import MonthlyRevenueList from './monthly-revenue-list/MonthlyRevenueList';
import RevenuesDetail from './revenue-detail';

const Revenue = ({ match }) => {
  return(
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>  
        <Route path={`${match.url}/revenue-monthly`} component={MonthlyRevenueList} />
        <Route path={`${match.url}/revenue-detail`} component={RevenuesDetail} />
        <Redirect from={`${match.url}`} to={`${match.url}/revenue-detail`} />
      </Switch>
    </Suspense>
  )
};

export default Revenue;