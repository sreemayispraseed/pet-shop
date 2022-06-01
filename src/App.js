import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Shared/Components/Footer';
import Overview from './Shared/Components/Overview';
import Shops from './Shops/Pages/Shops';
import User from './Users/Pages/User';
import Pet from './Shops/Pages/Pet';
import Shop from './Shops/Pages/Shop';
import SignUp from './Shops/Pages/SignUp';
import Login from './Shops/Pages/Login';
import AddPets from './Shops/Pages/AddPets';
import Profile from './Shops/Pages/Profile';
import SignIn from './Users/Pages/SignIn';
import Orders from './Shops/Pages/Orders';
import MyPets from './Shops/Pages/MyPets';
import Menu from './Shared/Components/Menu';
import PopUp from './Shared/PopUp';
import ForgetPassword from './Shared/ForgetPassword';
import EnterOtp from './Shared/Components/EnterOtp';
import ResetPassword from './Shared/Components/ResetPassword';

const App = () => {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path = "/" component = {Overview} exact />
            <Route path = "/shops" component = {Shops} exact />
            <Route path = "/user" component = {User} />
            <Route path = "/shops/pets/:name" component = {Pet} exact />
            <Route path = "/shops/:name" component = {Shop} exact/>
            <Route path = "/signup" component = {SignUp} exact />
            <Route path = "/login" component = {Login} exact />
            <Route path = "/add-pet" component = {AddPets} exact />
            <Route path = "/profile" component = {Profile} exact />
            <Route path = "/signin" component = {SignIn} exact />
            <Route path = "/orders" component = {Orders} exact />
            <Route path = "/mypets" component = {MyPets} exact />
            <Route path = "/menu" component = {Menu} exact />
            <Route path = "/popup" component = {PopUp} exact />
            <Route path = "/forget-password" component = {ForgetPassword} exact />
            <Route path = "/otp" component = {EnterOtp} exact />
            <Route path = "/reset-password" component = {ResetPassword} exact />
          </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
