import './App.css';
import News from './components/news';
import Navbar from "./components/navbar";
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [progress, setProgress] = useState(0)

  return (
    <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
    <Switch>
    
    <Route path='/general' key="general" >
  <News setProgress={setProgress} category="general"/>
    </Route>
    <Route path='/business' key="business" >
  <News setProgress={setProgress} category="business"/>
    </Route>
    <Route path='/entertainment' key="entertainment" >
  <News setProgress={setProgress} category="entertainment"/>
    </Route>
    <Route path='/health' key="health" >
  <News setProgress={setProgress} category="health"/>
    </Route>
    <Route path='/technology' key="technology" >
  <News setProgress={setProgress} category="technology"/>
    </Route>
    <Route path='/sports' key="sports" >
  <News setProgress={setProgress} category="sports"/>
    </Route>
    <Route path='/science' key="science" >
  <News setProgress={setProgress} category="science"/>
    </Route>
    <Route path='/' key="default" >
  <News setProgress={setProgress} category="general"/> 
    </Route>
    </Switch>
    </Router>
  )
}

export default App;
