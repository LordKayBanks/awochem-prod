import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//adding my imports
import Navbar from './component/navbar.jsx';
import Footer from './component/footer.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';

ReactDOM.render(
  <>
    <Navbar />
    <Footer />
  </>,
  document.getElementById('root')
);
