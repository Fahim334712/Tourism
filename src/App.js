import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Booking from './components/Booking/Booking';
import Destinations from './components/Destinations/Destinations';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Headers from './components/Headers/Headers';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Headers></Headers>
          <Switch>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/blog'>
              <Blogs></Blogs>
            </Route>
            <PrivateRoute path='/destination'>
              <Destinations></Destinations>
            </PrivateRoute>
            <Route path='/about'>
              <About></About>
            </Route>
            <PrivateRoute exact path='/order'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path='/order/details'>
              <Details></Details>
            </PrivateRoute>
            <Route exact path='/'>
              <Home></Home>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
