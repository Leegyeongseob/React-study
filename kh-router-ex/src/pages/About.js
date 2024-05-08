import { Navigate, useLocation, useNavigate } from "react-router-dom";
// 쿼리스트링은 URL 파라미터와 달리 별도 설정이 필요 없음.

const About = () => {
  const location = useLocation();
  const id = localStorage.getItem("ID");
  if (id !== "can3487") {
    return <Navigate to="/Login" replace={true} />;
  }
  return (
    <>
      <h1>여기가 소개 입니다.</h1>
      <p>리엑트 라우트를 사용해 봅니다.</p>
      <p>쿼리스트링 : {location.search}</p>
    </>
  );
};

export default About;
