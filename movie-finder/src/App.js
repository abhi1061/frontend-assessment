import React from 'react';
import { fetchData } from './DataHelpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 justify-content-center my-5">
          <Home fetchData={fetchData} />
        </div>
      </div>
    </div>
  );
}

export default App;
