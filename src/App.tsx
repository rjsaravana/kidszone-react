import './App.css';
import { Card } from './pages/card';
import { Contact } from './pages/contact';
import { Copyrights } from './pages/copyrights';
import { Gallery } from './pages/gallery';
import { Home } from './pages/home';
import { Navbar } from './pages/navbar';
import { Numeric } from './pages/numeric';
import { School } from './pages/school';
import { Selectionbox } from './pages/selectionbox';
import { Socialicon } from './pages/socialicon';
import { Timeline } from './pages/timeline';

function App() {
  return (
    <><Navbar />
      <Home />
      <Card />
      <School />
      <Numeric />
      <Gallery />
      <Selectionbox />
      <Timeline />
      <Contact />
      <Socialicon />
      <Copyrights />
    </>
  );
}

export default App;
