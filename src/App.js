import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AdminRegister from './components/AdminRegister';
import AdminLogin from './components/AdminLogin';
import AdminDashBoard from './components/AdminDashBoard';


const App = () => (
  
    
    <BrowserRouter>
      <div className="App">
      	<Switch>
      		<Route path="/register" component={AdminRegister}/>
      		<Route path="/login" component={AdminLogin} />
      		<Route path="/dashboard" component={AdminDashBoard}/>
      	</Switch>
      </div>
    </BrowserRouter>
 
);

export default App;
