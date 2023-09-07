import './App.css';
import SetState from './R025_SetState';
import ComponentClass from './R027_ComponentClass';
import Promise from './R064_Promise';
import PromiseBtn from './R066_Promise';
import ReactChange from './R067_onChange';
import React, {useState} from 'react';

function MyFunction(props) {
  const [a, aForSetState] = useState('값1');
  // aForSetState('변경된값');

  // let {title} = props;
  // let {content} = props;
  return (
    <div>
      <h2>함수형태 Component</h2>
      <div>{props.title}</div>
      <div>{props.content}</div>
      <button onClick={() => {console.log("클릭이벤트"); aForSetState("변경된값")}}>변경확인</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <SetState/>
      <ComponentClass/>
      <MyFunction title="ㅇㅅㅇ" content="올ㅋ"/>
      <Promise/>
      <PromiseBtn/>
      <ReactChange/>
    </div>
  );
}

export default App;
