import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Counters from './Counters.component';
import Login from './Login.component';
import TodoList from './TodoList.component';
import Youtube from './Youtube.component';
import Users from './User/users.component';
import Todos from './Todo/todos.component';

class App extends React.Component {

  render(){
    return (
      <>
        <Routes>
          <Route path='/counters' element={<Counters />} />
          <Route path='/login' element={<Login />} />
          <Route path='/todos' element={<TodoList />} />
          <Route path='/youtube' element={ <Youtube /> } />
          <Route path='/users' element={ <Users /> } />
          <Route path="/todo-list" element={ <Todos /> } />
        </Routes>
      </>
    );
  }
}

export default App;
