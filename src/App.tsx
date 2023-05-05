import './App.css';
import { Card } from './pages/card';
import { Home } from './pages/home';
import { Nav } from './pages/nav';

function App() {
  return (
    <><Nav />
      <Home />
      <Card />
    </>
  );
}

export default App;
