import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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

  const InsertFruit = () => {
    // 과일추가
    // 과일목록보기
    // 홈으로

    // newFruit 이름의 저장공간 생성 선언
    const [newFruit, setNewFruit] = useState( 
      {
        id : '',
        name : '',
        price : '',
        count : ''
      }
    );

    const insertHandler = (fruit) => {
      console.log("insertHandler 함수실행");
      console.log(fruit); 
      // TODO id 중복값 없게
      
      // 빈칸 없게
      if (!newFruit.name || !newFruit.price || !newFruit.count) {
        alert("모든 필드를 입력하세요"); // 동작 후 fruitList 초기화 ;;
        return;
      }
  
      // name 중복값 체크
      const isNameDuplicate = fruitList.some(fruitList => fruitList.name === newFruit.name);
      if (isNameDuplicate) {
        alert("동일한 이름이 이미 존재합니다"); // 동작 후 fruitList 초기화 ;;
        // name 중복 시 value 제거
        setNewFruit({...newFruit, ['name']:''});
        return;
      }
  
      // 기존 fruitList에 동일한 것이 없다면 추가
      setFruitList([...fruitList, newFruit]);
      console.log(fruitList);
  
      setNewFruit({name:'', price:'', count:''}); // 왜 안돼지...?
    }

    const onChangeInput = (event) => {
      console.log(event.target);
      const {name, value} = event.target;
      console.log(name);
      console.log(value);
      setNewFruit({...newFruit, [name]:value}); 
    }

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
          <form>
            <>
              <div><span>이름:</span><input type="text" onChange={onChangeInput} value={newFruit.name} placeholder='과일이름'  name="name"/></div>
              <div><span>가격:</span><input type="text" onChange={onChangeInput} value={newFruit.price} placeholder='과일가격' name="price"/></div>
              <div><span>단위:</span><input type="text" onChange={onChangeInput} value={newFruit.count} placeholder='과일단위' name="count"/></div>
              <div><button onClick={insertHandler} >추가</button></div>
            </>
          </form>
        </div>
        <List/>
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
                  <tr key={fruit.name}>
                    <td>{fruit.name}</td>
                    <td>{fruit.price}</td>
                    <td>{fruit.count}</td>
                    <td><button onClick={() => onClickDeleteHandler(fruit.name)}>삭제</button></td>
                  </tr>
                )
              } )
            }
          </tbody>
        </table>
      </>
    );
  }

  const onClickDeleteHandler = (name) => {
    console.log(name);
    const updatedFruitList = fruitList.filter(fruitList => fruitList.name !== name);
    setFruitList(updatedFruitList);
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