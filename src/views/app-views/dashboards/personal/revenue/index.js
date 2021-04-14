import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import MonthlyRevenueList from './monthly-revenue-list/MonthlyRevenueList';
import TransactionList from '../../../transaction-list';
import AddForm from '../../../addForm';

const Revenue = ({ match }) => {
  const title = "Revenue";
  const titleEditRevenue = "Revenue-Editable";
  const viewTypeParam = "RevPersonal";
  const keyConst = "RevPersonal";

  return(
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>  
        <Route path={`${match.url}/revenue-monthly`} component={MonthlyRevenueList} />
        <Route path={`${match.url}/revenue-detail`} component={()  => <TransactionList key={keyConst} viewType={viewTypeParam}/>} />
        <Route path={`${match.url}/add-revenue`} component={() => <AddForm componentsView={title} />} />
        <Route path={`${match.url}/edit-revenue`} component={() => <AddForm componentsView={titleEditRevenue} />} />
        <Redirect from={`${match.url}`} to={`${match.url}/revenue-monthly`} />
      </Switch>
    </Suspense>
  )
};

export default Revenue;