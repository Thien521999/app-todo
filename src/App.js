import { Route } from 'react-router';
import './App.css';
import TodoFeatures from './features/Todo';

function App() {
  return (
    <div className="App">
        <Route path="/" component={TodoFeatures} />
    </div>
  );
}

export default App;
