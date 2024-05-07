// UseRef
// 가끔 DOM의 위치로 jump해야 할 때 사용해야한다.
// 내부 값은 변경을 허용해야 하는데 rendering 이 일어나면 안돼! 근데 값은 저장되어야해! 그럴 때 쓰인다.
// id 선택자의 대체도 useRef

import { useRef } from "react";

const CreateRef = () => {
  const inputRef = useRef(null);
  const handleFocus = () => {
    //current : 값을 유지해주기 위해서 변수에 넣음.(useRef 변수)
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  return (
    <>
      <input disabled type="text" ref={inputRef} />
      <button onClick={handleFocus}>활성화</button>
    </>
  );
};

export default CreateRef;
