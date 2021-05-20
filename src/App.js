import React, { lazy,useState,useEffect } from 'react'
import { UserContext } from "./lib/UserContext";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
// Import Magic-related things
import { magic } from "./lib/magic";

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Callback = lazy(() => import('./pages/Callback'))






function App() {
  // Create a hook to check whether or not user has lifetime acess
  const [lifetimeAccess, setLifetimeAccess] = useState(true);

  // Create a hook to prevent infinite loop in useEffect inside of /components/premium-content
  const [
    lifetimeAccessRequestStatus,
    setLifetimeAccessRequestStatus,
  ] = useState("");
  // Create a hook to help us determine whether or not the  user is logged in
  const [user, setUser] = useState();

  // If isLoggedIn is true, set the UserContext with user data
  // Otherwise, set it to {user: null}
  useEffect(() => {
    setUser({ loading: true });
    setUser({ user: null })
    // magic.user.isLoggedIn().then(isLoggedIn => {
    //   return isLoggedIn ? magic.user.getMetadata().then(userData => setUser(userData)) : setUser({ user: null });
    // });
  }, []);

  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <UserContext.Provider value={[user, setUser]}>
            <Route path="/login" component={Login} />
            <Route path="/create-account" component={CreateAccount} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/callback" component={Callback} />

            {/* Place new routes over this */}
            <Route path="/app" component={Layout} />
            {/* If you have an index page, you can remothis Redirect */}
            <Redirect exact from="/" to="/app/dashboard" />
          </UserContext.Provider>
        </Switch>
      </Router>
    </>
  )
}

export default App
