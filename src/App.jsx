import React from 'react'
import { Route } from 'wouter';
import './App.css';
import { Header } from './Components/Header/Header';
import Home from './Pages/Home/Home';


function App() {

  return (
    <div className='App'>
      <section className='App-content'>
        <Header />
        <Route 
          component={Home}
          path='/'
        />
      </section>
    </div>
  );
}

export default App;
