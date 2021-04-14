import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import generalBalance from './general-balance/';
import revenue from './revenue'
import Capex from './capex';
import Cogs from './cogs'
import Cxc from './cxc'
import Cxp from './cxp'
import Payroll from './payroll'
import Sga from './sga';
import AddForm from '../../addForm';

const ProfessionalServices = ({ match }) => {
  const title = "Taxation";

  return(
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route
          path={`${match.url}/general-balance`}
          component={generalBalance}
        />
        <Route path={`${match.url}/revenue`} component={revenue} />
        <Route path={`${match.url}/capitalexpenses`} component={Capex} />
        <Route path={`${match.url}/cxc`} component={Cxc} />
        <Route path={`${match.url}/cxp`} component={Cxp} />
        <Route path={`${match.url}/cogs`} component={Cogs} />
        <Route path={`${match.url}/sga`} component={Sga} />
        <Route path={`${match.url}/payroll`} component={Payroll} />
        <Route path={`${match.url}/taxation`} component={() => <AddForm componentsView={title} />} />
        <Redirect from={`${match.url}`} to={`${match.url}/general-balance`} />
      </Switch>
    </Suspense>
  );
};

export default ProfessionalServices;
