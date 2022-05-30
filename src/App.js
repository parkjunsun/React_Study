//import logo from './logo.svg';
import './App.css';

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
  let list = [1, 2, 3]; //가정: Spring연동하면 json으로 받은 데이터

  return (
    <div>
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
