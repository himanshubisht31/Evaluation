
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div >

      <Navbar />
      <Route exact path='/login'>

        <Login />

      </Route>
      <Route exact path='/signup'>

        <Signup />

      </Route>

      <Route exact path='/dashboard'>

        <Dashboard />

      </Route>

    </div>
  );
}

export default App;
