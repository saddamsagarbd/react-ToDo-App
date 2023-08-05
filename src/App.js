import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Counters from './Counters.component';
import Login from './Login.component';
import TodoList from './TodoList.component';

class App extends React.Component {

  render(){
    return (
      <>
        <Routes>
          <Route path='/counters' element={<Counters />} />
          <Route path='/login' element={<Login />} />
          <Route path='/todos' element={<TodoList />} />
        </Routes>
      </>
    );
  }
}

export default App;
