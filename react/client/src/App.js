import React from 'react';
import './App.css';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import { useState, newFruit, onChangeInput, insertHandler } from 'react';

function App() {
      // const [a1, a2] = useState([10, 20, 30]);
      // const [a, seta] = useState ();

      const [fruitList, setfruitList] = useState (
        [
          {
            name : '기본이름1',
            price : '기본값1',
            count : '기본수량1'
          },
          {
            name : '기본이름2',
            price : '기본값2',
            count : '기본수량2'
          },
          {
            name : '기본이름3',
            price : '기본값3',
            count : '기본수량3'
          }
        ]
      );

      const [newFruit, setNewFruit] = useState (
        {
          name : '기본이름',
          price : '기본값',
          count : '기본수량'
        }
      );

    const insertHandler = () => {
      console.log("insertHandler 함수실행");
      console.log(newFruit);
      // 기존 fruitList에 동일한 것이 없다면 추가
      setfruitList = ([...fruitList, newFruit]);
    }
    const onChangeInput = (event) => {
      console.log(event.target);
      const {name, value} = event.target;
      console.log(name);
      console.log(value);
      setNewFruit = {...newFruit, [name]:value};
    }
}

const Home = () => {
  return (
    <>
      <h1>홈</h1>
      <nav>
        <ul>
          <li><Link to="/list">과일목록보기</Link></li>
          <li><Link to="/insert">과일추가</Link></li>
        </ul>
      </nav>
    </>
  );
}

const f0 = function() {console.log();}
const f1 = function(data, a) {console.log();}
const f2 = (data, a) => {console.log();}
const f3 = (data) => {console.log();}
const f4 = data => {console.log();} // 괄호 생략 가능
const f5 = () => {console.log();}

const List = (props) => {
  const {n1, n2} = props;

  console.log(n1, n2);
  return (
    <>
      <h1>리스트</h1>
      <ul>
        <li>{n1}</li>
        <li>{n2}</li>
      </ul>
    </>
  );
}

const InsertFruit = () => {
  return (
    <>
      <nav>
        <h1>과일추가</h1>
        <ul>
          <li><Link to="/list">과일목록보기</Link></li>
          <li><Link to="/">홈</Link></li>
        </ul>
      </nav>
      <div>
        <form>
          <div><span>이름 : </span><input type="text" onChange={onChangeInput} value={newFruit.name} name="name"/></div>
          <div><span>가격 : </span><input type="text" onChange={onChangeInput} value={newFruit.price} name="price"/></div>
          <div><span>개수 : </span><input type="text" onChange={onChangeInput} value={newFruit.count} name="count"/></div>
        </form>
        <button onClick={insertHandler}>추가</button>
      </div>
    </>
  );
}

const DeleteFruit = () => {
  return (
    <>
      <h1>과일삭제</h1>
      <ul>
        <li><Link to="/list">과일목록보기</Link></li>
        <li><Link to="/">홈</Link></li>
      </ul>
    </>
  );
}

export default App;