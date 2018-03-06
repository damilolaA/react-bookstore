import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AdminRegister from './components/AdminRegister';
import AdminLogin from './components/AdminLogin';


const App = () => (
  
    
    <BrowserRouter>
      <div className="App">
      	<Switch>
      		<Route path="/" component={AdminRegister}/>
      		<Route path="/login" component={AdminLogin} />
      	</Switch>
      </div>
    </BrowserRouter>
 
);

export default App;
