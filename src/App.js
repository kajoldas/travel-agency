import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Home/Header/Header';
import Detail from './component/Detail/Detail';
import Footer from './component/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ManageAllOrder from './component/ManageAllOrder/ManageAllOrder';
import AddService from './component/AddService/AddService';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      
        <BrowserRouter>
              <Header> </Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/myorders">

            </PrivateRoute>
            <Route path="/manage-all-order">
              <ManageAllOrder></ManageAllOrder>
            </Route>
            <Route path="/addnewservices">
              <AddService></AddService>
              </Route>
            <Route  path="/login">
              <Login></Login>
            </Route>
            
            <Route path="/appointbook/:id">
              <Detail></Detail>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;

