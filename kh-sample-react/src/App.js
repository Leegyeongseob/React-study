// JSX란? :  JavasScript에 XML을 추가 확장한 문법.
// html 태그 사용 시 반드시 닫힘 태그가 존재해야 함.
// 컴포넌트가 반환 될때 태그는 한개여야 함.
// 자바스크립트 코드를 중괄호를 사용해 데이터 바인딩 할 수 있음.
// 조건부 연산자 : {}내에서 조건부 연산자 사용 가능.
// 조건부 랜더링 : && 연산자의 특징을 이용 -> 앞이 참이면 뒤에도 확인 -> 랜더링함.

import Average from "./UseMemo";
//컴포넌트의 합성
function App() {
  return <Average />;
}

export default App;
