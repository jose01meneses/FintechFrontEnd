import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import EditProfile from './edit-profile';
import ChangeMail from './change-mail';
import ChangePassword from './change-password';
import Categories from './categories';

const Settings = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path={`${match.url}/edit-profile`} component={EditProfile} />
        <Route path={`${match.url}/change-mail`} component={ChangeMail} />
        <Route path={`${match.url}/change-password`} component={ChangePassword} />
        <Route path={`${match.url}/categories`} component={Categories} />
        <Redirect from={`${match.url}`} to={`${match.url}/edit-profile`} />
      </Switch>
    </Suspense>
  );
};

export default Settings;
