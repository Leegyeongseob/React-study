//useMeno : 컴포넌트의 성능을 최적화하기 위해 사용
//Memo는 'memoized'를 의미하며, 이전에 계산 한 값을 재사용한다는 의미

const { useState, useMemo } = require("react");
const getAverage = (numbers) => {
  // 방어코드
  if (numbers.length === 0) return 0;
  console.log("평균값 계산 중");
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => setNumber(e.target.value);

  const onInsert = (e) => {
    // 입력받는 타입 : 문자열을 정수타입으로 형변환
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <p>
        <b>평균값 : </b>
        {avg}
      </p>
    </>
  );
};
export default Average;
