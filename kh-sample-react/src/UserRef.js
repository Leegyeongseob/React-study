import { useEffect, useRef } from "react";

// UseRef : 컴포넌트 내부 변수값 유지
const ExCompnent = () => {
  const myBtnRef = useRef(null);
  console.log("랜더링 중이얌.ㅁ");
  useEffect(() => {
    if (myBtnRef.current) {
      myBtnRef.current.innerText = "클릭하세요.";
    }
  }, []);
  // 컴포넌트 내부 변수를 useRef를 사용하여 값을 유지
  const count = useRef(0);

  const handleClick = () => {
    count.current += 1;
    alert(`클릭 횟수 : ${count.current}`);
  };
  return (
    <div>
      <button ref={myBtnRef} onClick={handleClick}>
        초기 상태
      </button>
    </div>
  );
};
export default ExCompnent;
