
import "./App.css";
import Home from './Container/Home';
import Signup from './Container/Signup'
import Signin from './Container/Signin'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Products from "./Container/Proddis";
import ProductDetail from "./Container/ProductDetail";
import CartPage from "./Container/Cart";
import ViewContract from "./Container/Contract";
import UploadContract from "./Container/Contract/uploadContract";
import Menu from "./Container/Menu/menu";
import Profile from "./Container/Profile";
import { useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { isUserLoggedIn } from './actions'

function App() {
  const dispatch=useDispatch();
  const auth=useSelector(state=>state.auth)
  useEffect(()=>{
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }
    // if(auth.authenticate){
    //   dispatch(getInitialData());
    // }
    
    
  },[auth.authenticate]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/cart" component={CartPage} />
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/contracts" component={ViewContract}/>
          <Route path="/uploadContract" component={ UploadContract}/>
          <Route path="/menu" component={ Menu}/>
          <Route path="/:productSlug/:productId/p" component={ProductDetail} />
          <Route path="/:slug" component={Products}/>
         
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
