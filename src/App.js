import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AdminRegister from "./components/AdminRegister";


const App = () => (
  
    
    <BrowserRouter>
      <div className="App">
      	<Switch>
      		<Route path="/" component={AdminRegister}/>
      	</Switch>
      </div>
    </BrowserRouter>
 
);

export default App;
