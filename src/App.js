import Home from './components/Home';
import CreatePet from './components/CreatePet';
import UpdatePet from './components/UpdatePet';
import Details from './components/Details';
import { Router } from '@reach/router';

function App() {
  return (
    <div>
      <h1>Pet Shelter</h1>
      <Router>
        <Home path="/"/>
        <CreatePet path="/pets/new"/>
        <UpdatePet path="/pets/:id/edit"/>
        <Details path="/pets/:id"/>
      </Router>
    </div>
  );
}

export default App;
