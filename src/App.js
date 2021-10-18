
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { Route } from 'react-router-dom'

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

    </div>
  );
}

export default App;
