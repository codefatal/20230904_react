import '../App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import reactRouter from './component/R089_reactRouter';
import reactRouter2 from './component/R089_reactRouter2';

function App() {
    return (
      <div className="App">
        <Routes>
          <Route exact path='/' Component={reactRouter} element={<Home></Home>}/>
          <Route exact path='/home' element={<Home></Home>}/>
          <Route exact path='/reactRouter2'  Component={reactRouter2}/>
          <Route exact path='/insert'  element={<Insert></Insert>}/>
        </Routes>
      </div>
    );
}

function Home() {
  return (
    <>
      <h1>홈페이지</h1>
      <a href="/insert">추가</a>
    </>
  )
}

function Insert() {
  return (
    <h1>추가</h1>
  )
}

export default App;