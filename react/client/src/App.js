import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

/*
url mapping 페이지 구성
나타낼 속성들을 모아서 entity 별로 묶기
이름, 가격, 단위 == 과일
TODO delete - 목록화면에서 버튼 만들어서 1개 삭제
TODO info - id 활용해서 보기
*/

function App() {
  //const [a1, a2] = useState([10, 20, 30]);  // a1 저장공간생성
  //const [a,seta] = useState();

  const [newId, setNewId] = useState(3);
  
  // fruitList 이름의 저장공간 생성 선언
  const [fruitList, setFruitList] = useState(
    [
      {
        id: 1,
        name: '사과',
        price: '1000',
        count: '10'
      },
      {
        id: 2,
        name: '바나나',
        price: '2000',
        count: '5'
      }
    ]
  );

  // newFruit 이름의 저장공간 생성 선언
  const [newFruit, setNewFruit] = useState( 
    {
      id : '',
      name : '',
      price : '',
      count : ''
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault(); // 폼의 기본 동작을 막습니다.
    console.log(event.target)
    const formData = new FormData(event.target); // 폼 데이터를 가져옵니다.
    const newFruit = {};
    
    formData.forEach((value, name) => {
      newFruit[name] = value;
    });
    
    insertHandler(newFruit);
  }

  const insertHandler = (newFruit) => {
    
    console.log("insertHandler 함수실행");
    console.log(newFruit);
    // const fruitId = newFruit.id;
    // const fruitName = newFruit.name;
    // const fruitPrice = newFruit.price;
    // const fruitCount = newFruit.count;

    // setNewFruit({...newFruit, fruitId, fruitName, fruitPrice, fruitCount});
    // setNewFruit({...newFruit, ["id"]:fruitId});
    // setNewFruit({...newFruit, ["name"]:fruitName});
    // setNewFruit({...newFruit, ["price"]:fruitPrice});
    // setNewFruit({...newFruit, ["count"]:fruitCount});
    // null값 체크

    if (!newFruit.name || !newFruit.price || !newFruit.count) {
      console.error("모든 필드를 입력하세요");
      return;
    }

    // id 중복값 체크
    const isIdDuplicate = fruitList.some(fruitList => fruitList.id === newId);
    if (isIdDuplicate) {
      console.error("중복된 ID가 있습니다");
      return;
    }

    // name 중복값 체크
    const isNameDuplicate = fruitList.some(fruitList => fruitList.name === newFruit.name);
    if (isNameDuplicate) {
      console.error("동일한 이름이 이미 존재합니다");
      return;
    }

    // 새 과일 추가
    const updatedFruitList = [...fruitList, newFruit];
    setFruitList(updatedFruitList);
    localStorage.setItem('fruitList', JSON.stringify(updatedFruitList));
    console.log(updatedFruitList);
    
    setNewId(newId + 1);
  }

  const deleteHandler = (id) => {
    console.log("deleteHandler 함수실행");
    console.log(newFruit);
    const updatedFruitList = fruitList.filter(fruitList => fruitList.id !== id);
    setFruitList(updatedFruitList);
    console.log(fruitList);
  }

  const InsertFruit = () => {
    // 과일추가
    // 과일목록보기
    // 홈으로
    
    return (
      <>
          <h1>과일추가</h1>
          <nav>
            <ul>
              <li><Link to="/list">과일목록보기</Link></li>
              <li><Link to="/">홈</Link></li>
            </ul>
          </nav>
          <div>
            <form onSubmit={handleSubmit}>
              <div><span>번호:</span><input type="text" value={newId} name="id" readOnly/></div>
              <div><span>이름:</span><input type="text" defaultValue={newFruit.name}  name="name" /></div>
              <div><span>가격:</span><input type="text" defaultValue={newFruit.price} name="price" /></div>
              <div><span>단위:</span><input type="text" defaultValue={newFruit.count} name="count" /></div>
              <button type="submit" >추가</button>
            </form>
          </div>
      </>
    );
  }


  const List = (props) => {
    // const n1 = props.n1;
    // const n2 = props.n2;
    // const {n1} = props;
    // const {n2} = props;
    const { n1, n2 } = props;
    console.log(n1);
    console.log(n2);

    // 리스트
    // 과일추가
    // 홈으로
    return (
      <>
        <h1>리스트</h1>
        <nav>
          <ul>
            <li><Link to="/insert">과일추가</Link></li>
            <li><Link to="/">홈</Link></li>
          </ul>
        </nav>
        <table>
          <thead>
            <tr>
              <td>번호</td>
              <td>이름</td>
              <td>가격</td>
              <td>단위</td>
              <td>삭제</td>
            </tr>
          </thead>
          <tbody>
            {
              fruitList.map( (fruit)=> { 
                console.log(fruit);
                return (
                  <tr key={fruit.id}>
                    <td>{fruit.id}</td>
                    <td>{fruit.name}</td>
                    <td>{fruit.price}</td>
                    <td>{fruit.count}</td>
                    <td><button onClick={() => deleteHandler(fruit.id)} >삭제</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/list" element={<List n1="v1" n2={1000} ></List>} />
          <Route path="/insert" element={<InsertFruit></InsertFruit>} />
          <Route path="/delete" element="{<DeleteFruit></DeleteFruit>}" />
          <Route path="/info" element="" />
          <Route path="/update" element="" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
const Home = () => {
  // 홈
  // 과일목록보기
  // 과일추가
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

// const f0 = function () { console.log(); }
// const f1 = function (data, a) { console.log(); }
// const f2 = (data, a) => { console.log(); console.log(); }
// const f3 = (data) => { console.log(); }
// const f4 = data => console.log();
// const f5 = () => console.log();

export default App;