import logo from './logo.svg';
import './App.css';
import Header from './MyComp/Header';
import {Footer} from './MyComp/Footer';
import {Todo} from './MyComp/Todo';
import {AddTodo} from './MyComp/AddTodo';
import React, { useState , useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './MyComp/About';


function App() {
  let title="My first react App";
  let initTodo=[];
  (localStorage.getItem("todos"))?initTodo=JSON.parse(localStorage.getItem("todos")):initTodo=[];
  const  onRemove=(todo)=>{
    console.log("Remove function for ",todo);
    UpdateTodoArr(todoArr.filter((elm)=>{
      return elm!==todo;
    }));

  };
  const addTodo=(title,desc)=>{
    const myTodo={
      id: new Date().getTime(),
      title: title,
      desc:desc
    }
    console.log(title); 
    UpdateTodoArr([...todoArr,myTodo]);
  }
  const [todoArr, UpdateTodoArr] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todoArr));
 }, [todoArr])
  return (
     <>
      <Router>
      <Header title="Todo App with react    " />
      <Switch> 
        <Route exact path="/" render={()=>{
          return (
            <>
          <AddTodo addTodo={addTodo}/>
          <Todo todoArr={todoArr} onRemove={onRemove}/>
            </>
          );
        }}></Route>
        <Route exact path="/about" render={()=>{
          return (
            <>
            <About></About>
            </>
          );
        }}>
        </Route>
      </Switch>
        <Footer/>
      </Router>
     </>
  );
}

export default App;
