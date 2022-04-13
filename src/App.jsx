import React from 'react'
import { Route } from 'wouter';
import './App.css';
import { Header } from './Components/Header/Header';
import Detail from './Pages/Detail/Detail';
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
        <Route path='/tv/:id'><Detail type='tv' /></Route>
        <Route path='/movie/:id'><Detail type='movie' /></Route>
      </section>
    </div>
  );
}

export default App;
