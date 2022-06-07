import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
// import MarvelService from './services/MarvelService';

import './style/style.scss';

// const marvelService = new MarvelService();
// const characters = marvelService
//   .getAllCharacters()
//   .then((result) =>
//     result.data.results.filter(({ description }) => description !== '')
//   )
//   .then((data) => console.log(data));

// marvelService.getCharacterById(1011163).then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
