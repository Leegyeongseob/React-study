//리액트에서의 배열과 맵 : 랜더링에 매우 중요한 역할을 함

const User = (props) => {
  return (
    <div>
      <p>{props.user.userName}</p>
      <span style={{ color: "red" }}>{props.user.email}</span>;<br></br>
    </div>
  );
};

const UserList = () => {
  const users = [
    {
      id: 100,
      userName: "이경섭",
      email: "1000won@gmail.com",
    },
    {
      id: 200,
      userName: "백마리",
      email: "2000won@gmail.com",
    },
    {
      id: 300,
      userName: "서민혁",
      email: "3000won@gmail.com",
    },
  ];
  return (
    <>{users && users.map((user, index) => <User key={index} user={user} />)}</>
  );
};

export default UserList;
