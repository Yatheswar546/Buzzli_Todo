import './App.css';

// Components
import Header from './components/Header';
import Inputform from './components/Inputform';
import Todos from './components/Todos';

function App() {
  return (  
    <div>
      <Header />
      <Inputform />
      <Todos />
    </div>
  );
}

export default App;
