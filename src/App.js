import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"; 
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercises-list.components";
import EditExercise from "./components/edit-exercises.components";
import CreateExercise from "./components/create-exercise.components";
import CreateUser from "./components/create-user.component";



function App() {
  return (
    <Router>
      <div className=" container">
       <Navbar />
       <br />
       <Route path="/" exact component ={ExerciseList} />
       <Route path="/edit/:id" component ={EditExercise} />
       <Route path="/create" component ={CreateExercise} />
       <Route path="/user" component ={CreateUser} />
       </div>
    </Router>
   
  );
}

export default App;
