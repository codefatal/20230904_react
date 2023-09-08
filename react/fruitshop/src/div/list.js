import React from 'react';
import { Link } from 'react-router-dom';

function List({ fruitList, onClickDeleteHandler }) {
  return (
    <>
      <h1>리스트</h1>
      <nav>
        <ul>
          <li><Link to="/insert">과일추가</Link></li>
          <li><Link to="/">홈</Link></li>
        </ul>
      </nav>
      <table border="1">
        <thead>
          <tr>
            <td>이름</td>
            <td>가격</td>
            <td>단위</td>
            <td>삭제</td>
          </tr>
        </thead>
        <tbody>
          {
            fruitList.map(fruit => (
              <tr key={fruit.name}>
                <td>{fruit.name}</td>
                <td>{fruit.price}</td>
                <td>{fruit.count}</td>
                <td><button onClick={() => onClickDeleteHandler(fruit.name)}>삭제</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default List;