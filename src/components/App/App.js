import { HashRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';

import './App.scss';
import Content from '../Content/Content';

const App = () => {
  return (
    <Router>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <Content />
      </main>
    </Router>
  );
};

export default App;
