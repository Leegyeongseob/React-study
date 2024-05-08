import { Link, useParams, useNavigate } from "react-router-dom";
const Age = () => {
  const { age } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>여기는 홈 입니다.</h1>
      <p>가장 먼저 보이는 페이지 입니다.</p>
      <Link to="/about">소개</Link>
      <p onClick={() => navigate(-1)}>소개페이지로 이동</p>
    </>
  );
};

export default Age;
