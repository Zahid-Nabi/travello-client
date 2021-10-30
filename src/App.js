
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddPackage from './components/AddPackage/AddPackage';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import ManageBookings from './components/ManageBookings/ManageBookings/ManageBookings';
import MyBookings from './components/MyBookings/MyBookings';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/add">
            <AddPackage></AddPackage>
          </Route>
          <PrivateRoute exact path="/manage_bookings">
            <ManageBookings></ManageBookings>
          </PrivateRoute>
          <PrivateRoute exact path="/mybookings">
            <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute exact path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
