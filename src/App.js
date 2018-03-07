import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AdminRegister from './components/AdminRegister';
import AdminLogin from './components/AdminLogin';
import AdminDashBoard from './components/AdminDashBoard';
import ViewCategory from './components/ViewCategory';


const App = () => (
  
    
    <BrowserRouter>
      <div className="App">
      	<Switch>
      		<Route path="/register" component={AdminRegister}/>
      		<Route path="/login" component={AdminLogin} />
      		<Route path="/dashboard" component={AdminDashBoard}/>
      		<Route path="/categories" component={ViewCategory}/>
      	</Switch>
      </div>
    </BrowserRouter>
 
);

export default App;
