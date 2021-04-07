import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import Personal from './personal';
import Business from './business';
import ProfessionalServices from './professional-services';

const Dashboards = ({ match }) => {
  return(
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${match.url}/personal`} component={Personal} />
        <Route path={`${match.url}/business`} component={Business} />
        <Route path={`${match.url}/professional-services`} component={ProfessionalServices} />
        <Redirect from={`${match.url}`} to={`${match.url}/personal`} />
      </Switch>
    </Suspense>
  )
};

export default Dashboards;