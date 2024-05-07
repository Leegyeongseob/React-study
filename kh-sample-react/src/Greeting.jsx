import "./App.css";
const member = {
  name: "스누피누피",
  job: "주니어 개발자",
  addr: "서울특별시 용산구 청파동",
  gender: "남성",
};
const getMember = (user) => {
  return user ? (
    <h1>환영합니다. '{member.name}'님</h1>
  ) : (
    <h1>환영합니다. 방문자님</h1>
  );
};
const Greeting = () => {
  return (
    <div className="App">
      <p className="className">안녕하세요. 저는 {member.name} 입니다.</p>
      <p className="className">직업은 {member.job}입니다.</p>
      <p className="className">주소는 {member.addr}입니다.</p>
      <p className="className">성별은 {member.gender}입니다.</p>
      <div>{getMember(true)}</div>
    </div>
  );
};

export default Greeting;
