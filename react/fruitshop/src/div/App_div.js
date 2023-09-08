import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './home';
import Insert from './insert';
import List from './list';

function App() {

  // fruitList 이름의 저장공간 생성 선언
  const [fruitList, setFruitList] = useState(
    [
      {
        id : '1',
        name : '기본이름1',
        price : '기본값1',
        count : '기본단위1'
      },
      {
        id : '2',
        name : '기본이름2',
        price : '기본값2',
        count : '기본단위2'
      },
    ]
  );

  useEffect(() => {
    const storedFruitList = JSON.parse(localStorage.getItem('fruitList'));
    if (storedFruitList) {
      setFruitList(storedFruitList);
    }
  }, []);
  
  // fruitList가 업데이트될 때 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('fruitList', JSON.stringify(fruitList));
  }, [fruitList]);

  const onClickDeleteHandler = (name) => {
    console.log(name);
    const updatedFruitList = fruitList.filter(fruit => fruit.name !== name);
    setFruitList(updatedFruitList);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List fruitList={fruitList} onClickDeleteHandler={onClickDeleteHandler} />} />
          <Route path="/insert" element={<Insert fruitList={fruitList} setFruitList={setFruitList} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
