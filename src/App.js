import './App.css';
import Navbar from './myComponents/Navbar';
import Todos from './myComponents/Todos';
import Footer from './myComponents/Footer';
import AddTodo from './myComponents/AddTodo';
import { useState } from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("i am onDelete", todo);
    setTodos(todos.filter((e)=>{
      return e!== todo;
    }));
  }

  // Add todo functi  on

  const addTodo=(title,desc)=>{
    console.log("I am adding a todos",title, desc);
    let sno=todos[todos.length-1].sno +1;

    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

 
  

  // let todos= [

  const [todos, setTodos]=useState([

  {
      sno :'1',
      title: 'Go To the market',
      desc:  " You need to go the market"
    },
    {
      sno :'2',
      title: 'Go To the Saloon',
      desc:  " You need to go the Saloon"
    },
    {
      sno :'3',
      title: 'Go To the mall',
      desc:  " You need to go the mall"
    }
  ])
  

  return (
    <>
    

    <Navbar title="Vishuu"/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
