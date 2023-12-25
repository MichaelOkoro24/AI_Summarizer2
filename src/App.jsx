import Hero from './components/Hero.jsx';
import Demo from './components/Demo.jsx';
import './App.css';
import { useLazyGetSummaryQuery } from './services/article.js';

const App = () => {
  return (
    <main>
        <div className="main">
            <div className="gradient" />
        </div>
        <div className="app">
            <Hero />
            <Demo />
        </div>
    </main>
  )
}

export default App