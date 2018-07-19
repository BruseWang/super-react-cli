import React from 'react'
import { Route, Switch } from 'react-router'
import Loadable from 'react-loadable'
import NavBar from '../components/NavBar'


const MyLoadingComponent = ({isLoading, error}) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

const AsyncHome = Loadable({
  loader: () => import("../components/Home"),
  loading: MyLoadingComponent,
  delay: 300, // 0.3 seconds,
  timeout: 10000, // 10 seconds
});


const AsyncHello = Loadable({
  loader: () => import("../components/Hello"),
  loading: MyLoadingComponent,
  delay: 300, // 0.3 seconds
});

const AsyncNoMatch = Loadable({
  loader: () => import("../components/NoMatch"),
  loading: MyLoadingComponent,
  delay: 300, // 0.3 seconds
});

const AsyncCounter = Loadable({
  loader: () => import("../components/Counter"),
  loading: MyLoadingComponent,
  delay: 300, // 0.3 seconds
});

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={AsyncHome} />
      <Route path="/hello" component={AsyncHello} />
      <Route path="/counter" component={AsyncCounter} />
      <Route component={AsyncNoMatch} />
    </Switch>
  </div>
)

export default routes
