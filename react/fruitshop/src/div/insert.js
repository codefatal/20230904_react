import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Insert({ fruitList, setFruitList }) {
    const [newFruit, setNewFruit] = useState({
      id: '',
      name: '',
      price: '',
      count: ''
    });

    const insertHandler = () => {
        console.log("insertHandler 함수실행");
        console.log(newFruit); 
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

        setNewFruit({name:'', price:'', count:''});
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
                <div><span>이름:</span><input type="text" onChange={onChangeInput} value={newFruit.name} placeholder='과일이름' name="name" /></div>
                <div><span>가격:</span><input type="text" onChange={onChangeInput} value={newFruit.price} placeholder='과일가격' name="price" /></div>
                <div><span>단위:</span><input type="text" onChange={onChangeInput} value={newFruit.count} placeholder='과일단위' name="count" /></div>
                <div><button onClick={() => insertHandler(newFruit)}>추가</button></div>
              </>
            </form>
          </div>
        </>
      );
}

export default Insert;