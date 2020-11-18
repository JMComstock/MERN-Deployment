import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router} from '@reach/router';
import Create from './views/Create';
import Main from './views/Main';
import Show from './views/Show';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center flex-column">
      </div>
      <Router>
        <Main path='/' />
        <Create path='/new' />
        <Show path="details/:id" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;