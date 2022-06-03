//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Sub from './Sub';

//0.React엔진 - 데이터변경감지에서 UI그려주는 엔진
//1.실행방식 (index.html) -SPA
//2.JSX문법

//(1) return시에 하나의 Dom만 리턴할 수 있다.
//(2) 변수선언은 let 혹은 const로만 해야함.
//(3) if 사용 불가능 -> 삼항연산자 O (조건 ? 값(true) : 값(false))
//(4) 조건부 렌더링 -> (조건 && 값(true))
//(5) css디자인
//  - 내부에 적는 방법
//  - 외부 파일에 적는 방법
//  - 라이브러리 사용 (부트스트랩, component-styled)

function App() {
  // //let number = 1; //상태 값아님
  // const [number, setNumber] = useState(1); //React안에 hooks 라이브러리

  // const add = () => {
  //   setNumber(number + 1); //리엑트한테 number값 변경할게라고 요청하는 것이라 보면됨, 일반적인 변수변경은 UI 랜더링 X, SetNumber를 호출 할 때만 다시 return이 되는것
  // };

  // //랜더링 시점 = 상태값 변경
  // //랜더링 될 때 return문 전체 실행, 근데 보면 <Sub />라는 자식 component가 있음 이 자식도 랜더링이 되는데 Sub.js에서 return을 if문 같은걸로 제어 할 수 있음
  // //=> 즉 component화 해서 바뀌는 부분만 제어할 수 있도록 만드는게 중요
  // return (
  //   <div>
  //     <div>
  //       <h1>숫자:{number}</h1>
  //       <button onClick={add}>더하기</button>
  //       <Sub />
  //     </div>
  //   </div>
  // );

  console.log('App 실행됨');

  const [num, setNum] = useState(5);

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '코스' },
  ];

  //다운로드 받음
  const [users, setUsers] = useState(sample); //레퍼런스 변경되야 동작

  const download = () => {
    //sample.push({ id: 5, name: '조자룡' });   // 참조값 변경 안됨 ㄷㄷ
    //const a = sample.concat({ id: 5, name: '조자룡' }); 참조값 변경 O   ->참조값 변경되는 것 concat, slice, 전개연산자 ...
    setUsers([...sample, { id: num, name: '조자룡' }]);
    setNum(num + 1);

    //기존 data랑 동일하지만 참조값이 다르다 -> 데이터를 다르다고 인식하고 App이 실행됨(데이터는 동일하니 당연히 화면은 같겠지...)
    //즉, 래퍼런스가 변경되야 App이 실행되는 것이다.... 중요 (리액트는 변경감지가 핵심)
  };

  //랜더링 시점 = 상태값 변경
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id}. {u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
