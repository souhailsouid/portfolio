import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Notifiction
import { ToastContainer } from 'react-toastify';
// Components
import Routes from './components/routing/Routes'
import Header from './components/header/header.components'
// Redux

import { Provider } from 'react-redux';
import store  from './redux/store';
import { loadUser } from './redux/user/user.actions'
import setAuthToken from './utils/setAuthToken';


const App = () => {

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
  }, []);

  return (
      <Provider store={store}>
      <Router>
        <Fragment>
          <Header/>
          <ToastContainer/>
          <Switch>   
        
            {/* <Route exact path="/" component={SignInAndSignUp} /> */}
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App
