import { Link } from "react-router-dom";

const Home = () => {
  const age = 40;
  return (
    <>
      <h1>여기가 홈입니다.</h1>
      <p>가장 먼저 보이는 페이지입니다.</p>
      <Link to="/about">소개 페이지로 이동</Link>
      <p>
        <Link to="/Profiles/frontend">Front-end 프로필 보기</Link>
      </p>
      <p>
        <Link to="/Profiles/backend">Back-end 프로필 보기</Link>
      </p>
      <p>
        <Link to="/Profiles/dba">DBA 프로필 보기</Link>
      </p>
      <p>
        <Link to={`/age/${age}`}>Age 보기</Link>
      </p>
      <p>
        <Link to="articles">게시판 목록</Link>
      </p>
    </>
  );
};

export default Home;
