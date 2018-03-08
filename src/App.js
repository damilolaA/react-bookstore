import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AdminRegister from './components/AdminRegister';
import AdminLogin from './components/AdminLogin';
import AdminDashBoard from './components/AdminDashBoard';
import ViewCategory from './components/ViewCategory';
import EditCategory from './components/EditCategory';

const App = () => (
  
    
    <BrowserRouter>
      <div className="App">
      	<Switch>
      		<Route path="/register" component={AdminRegister}/>
      		<Route path="/login" component={AdminLogin} />
      		<Route path="/dashboard" component={AdminDashBoard}/>
      		<Route path="/categories" component={ViewCategory}/>
      		<Route path="/editCategory/:id" component={EditCategory}/>
      	</Switch>
      </div>
    </BrowserRouter>
 
);

export default App;
