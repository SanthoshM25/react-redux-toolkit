import { useState } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./Redux/user";

function App() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <div>{user.name}</div>
      <div>{user.email}</div>
      <input name="name" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
      <button onClick={() => dispatch(updateUser(userData))}>
        update data
      </button>
    </div>
  );
}

export default App;
