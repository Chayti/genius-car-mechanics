import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DocumentTitle from 'react-document-title';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import UpdateService from './Pages/updateService/UpdateService';


function App() {
  return (
    <DocumentTitle title='Genius Car Mechanics'>
      <div className="App">
        <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/booking/:serviceId">
                <Booking></Booking>
              </PrivateRoute>
              <Route path="/addService">
                <AddService></AddService>
              </Route>
              <Route path="/manageServices/:id">
                <UpdateService></UpdateService>
              </Route>
              <Route path="/manageServices">
                <ManageServices></ManageServices>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </AuthProvider>
      </div>
    </DocumentTitle>
  );
}

export default App;