import { useState } from "react";

const FruitSelect = () => {
  const [value, setValue] = useState("grape");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    alert("선택한 과일:" + value);
    e.preventDefault(); // submit 후 창이 새로고침 되는 걸 막음.
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        요즘 과일이 제철입니다. 과일을 선택하세요
        <select value={value} onChange={handleChange}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="kiwi">키위</option>
          <option value="watermelon">수박</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default FruitSelect;
