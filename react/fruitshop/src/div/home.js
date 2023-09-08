import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
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

export default Home;