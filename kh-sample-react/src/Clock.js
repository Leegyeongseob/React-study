import { useEffect, useState } from "react";

const Clock = () => {
  // 현재 시간을 초기값으로
  const [date, setDate] = useState(new Date());

  // 생명주기를 관리 : 화면에 나타나고 사라지는 것!(나타남, 갱신됨, 사라짐)
  useEffect(() => {
    //정해진 간격에 맞춰 콜백 함수를 호출
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []); //의존성 배열 : 값에 따라서 불려진다. 빈 배열이면 화면을 부르고(랜더링)하고 나서 바로 다음 호출.

  return (
    <>
      <h1>현재 시간을 표시합니다.</h1>
      <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
    </>
  );
};

export default Clock;
