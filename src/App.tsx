import './App.css';
import { Masthead } from './components/Nav';
import { Nameplate } from './components/Hero';
import { About } from './components/About';
import { PullQuote } from './components/Photo';
import { Experience } from './components/Experience';
import { SelectedWork } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Contact';

function App() {
  return (
    <div id="app">
      <Masthead />
      <Nameplate />
      <About />
      <PullQuote />
      <Experience />
      <SelectedWork />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
