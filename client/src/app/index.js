import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Homepage, NavBar, JokeTable} from '../components'



function App() {
  return (

   <Router>
       <NavBar>
       </NavBar>
     <Switch>
         <Route path='/'  exact component={Homepage}/>
         <Route path='/jokes'  exact component={JokeTable}/>
     </Switch>
   </Router>
  );
}

export default App;
