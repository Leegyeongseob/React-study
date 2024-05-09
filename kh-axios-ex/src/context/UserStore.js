import { createContext, useState } from "react";
//createContext 함수를 사용해 UserContext라는 새로운 Context 객체를 생성
export const UserContext = createContext(null);

const UserStore = (props) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        password,
        setPassword,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
