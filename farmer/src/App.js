import Home from './containers/Home/Home'
import Signup from './containers/Signup'
import Signin from './containers/Signin'
import Category from './containers/category'
import Products from './containers/Products'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Menu from './containers/Menu/menu'
import viewContract from './containers/Contract'
import { getInitialData } from './actions/idata'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import "./App.css"
import UploadContract from './containers/Contract/uploadContract'
import Profile from './containers/Profile/Profile'
import { isUserLoggedIn } from './actions'
import ReqPost from './containers/ReqPost'
function App() {
  const dispatch=useDispatch();
  // dispatch(getReqPost());
  const auth=useSelector(state=>state.auth)
    useEffect(()=>{

      if(!auth.authenticate){
        dispatch(isUserLoggedIn())
      }
      if(auth.authenticate){
        dispatch(getInitialData());
      }
      
    },[auth.authenticate]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/category" component= {Category} />
          <Route path="/products" component= {Products} />
          <Route path="/menu" component= {Menu} />
          <Route path="/contract" component= {viewContract} />
          <Route path="/uploadcontract" component= {UploadContract} />
          <Route path="/reqPost" component= {ReqPost} />
          <Route path="/profile" component= {Profile} />
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
