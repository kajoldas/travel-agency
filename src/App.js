import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Home/Header/Header';
import Footer from './component/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import ManageAllOrder from './component/ManageAllOrder/ManageAllOrder';
import AddService from './component/AddService/AddService';
import Booking from './component/Booking/Booking';
import Places from './component/Places/Places';
import MyOrders from './component/MyOrders/MyOrders';


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
              <Route path="/booking/:ServiceId">
                <Booking></Booking>
              </Route>
              <Route path="/manage-all-order">
                <MyOrders></MyOrders>
              </Route>
              {/* <PrivateRouteRoute path="/myorders">
                <MyOrde></MyOrders>
              </PrivateRoute> */}
              <Route path="/myorders">
                <ManageAllOrder></ManageAllOrder>
              </Route>
              <Route path="/destinations">
                <Places></Places>
              </Route>
              <Route path="/addnewservices">
                <AddService></AddService>
                </Route>
              <Route  path="/login">
                <Login></Login>
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

