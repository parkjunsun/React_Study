//import logo from './logo.svg';
import { createRef, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import Sub from './Sub';
import { num } from './Sub'; //Sub에서 변수 import -> export default가 아니라는 뜻

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

//function App() {
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

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// console.log('App 실행됨');

// const [num, setNum] = useState(5);

// let sample = [
//   { id: 1, name: '홍길동' },
//   { id: 2, name: '임꺽정' },
//   { id: 3, name: '장보고' },
//   { id: 4, name: '코스' },
// ];

// //다운로드 받음
// const [users, setUsers] = useState(sample); //레퍼런스 변경되야 동작

// const download = () => {
//   //sample.push({ id: 5, name: '조자룡' });   // 참조값 변경 안됨 ㄷㄷ
//   //const a = sample.concat({ id: 5, name: '조자룡' }); 참조값 변경 O   ->참조값 변경되는 것 concat, slice, 전개연산자 ...
//   setUsers([...sample, { id: num, name: '조자룡' }]);
//   setNum(num + 1);

//   //기존 data랑 동일하지만 참조값이 다르다 -> 데이터를 다르다고 인식하고 App이 실행됨(데이터는 동일하니 당연히 화면은 같겠지...)
//   //즉, 래퍼런스가 변경되야 App이 실행되는 것이다.... 중요 (리액트는 변경감지가 핵심)
// };

// //랜더링 시점 = 상태값 변경
// return (
//   <div>
//     <button onClick={download}>다운로드</button>
//     {users.map((u) => (
//       <h1>
//         {u.id}. {u.name}
//       </h1>
//     ))}
//   </div>
// );

//   const [data, setData] = useState(0);
//   const [search, setSearch] = useState(0);

//   const download = () => {
//     //다운로드 받고 (통신)
//     let downloadData = 5; //가정
//     setData(downloadData);
//   };

//   // 실행시점:
//   // (1) App() 그림이 그려질 때
//   // (2) 상태변수가 변경될 때(그게 dependencyList에 등록되어 있어야함)
//   // (3) 의존리스트 관리를 할 수 있다.
//   useEffect(() => {
//     console.log('useEffect 실행됨');
//     download();
//   }, [search]);
//   // [] -> dependency List => 빈 리스트가 들어가면 어디에도 의존하지 않는 다는 의미로 최초 App() 실행될 때만 useEffect가 실행된다.
//   // [search] -> dependency List에 search 상태변수 들어가 있음 => 최초 App() 실행될 때 useEffect 실행 + search 상태변수가 변경될 때 useEffect 실행

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setSearch(2);
//         }}
//       >
//         검색하기
//       </button>
//       <h1>데이터:{data}</h1>
//       <button
//         onClick={() => {
//           setData(data + 1);
//         }}
//       >
//         더하기
//       </button>
//     </div>
//   );
// }

//------------------------------------------------------------
//useMemo => 메모라이제이션(기억)

// function App() {
//   const [list, setList] = useState([1, 2, 3, 4]);
//   const [str, setStr] = useState('합계');

//   const getAddResult = () => {
//     let sum = 0;
//     list.forEach((i) => (sum = sum + i));
//     console.log('sum 함수 실행됨:', sum);
//     return sum;
//   };

//   const addResult = useMemo(() => getAddResult(), [list]);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setStr(['안녕']);
//         }}
//       >
//         문자변경
//       </button>
//       <button
//         onClick={() => {
//           setList([...list, 10]);
//         }}
//       >
//         리스트값 추가
//       </button>
//       <div>
//         {list.map((i) => (
//           <h1>{i}</h1>
//         ))}
//       </div>
//       <div>
//         {str} : {addResult}
//       </div>
//     </div>
//   );
// }

//----------------------------------------------------------
//useRef(디자인)
//dom을 변경할 때 사용
function App() {
  const myRef = useRef(null);

  const [list, setList] = useState([
    { id: 1, name: '길동' },
    { id: 2, name: '꺽정' },
  ]);

  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <div>
      <button
        onClick={() => {
          console.log(myRef);
          //myRef.current.style.backgroundColor = 'red';

          myRefs[1].current.style.backgroundColor = 'red';
        }}
      >
        색 변경
      </button>
      <div ref={myRef}> 박스 </div>
      {list.map((user, index) => (
        <h1 ref={myRefs[index]}>{user.name}</h1>
      ))}
    </div>
  );
}

export default App;
