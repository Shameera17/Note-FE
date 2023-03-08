import { useState } from "react";
//useDispatch hook dispatch actions
import { useDispatch, useSelector } from "react-redux";
import { login } from "../auth.slice";

const Login = () => {
  const [newusername, setNewUsername] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.auth.value.username);
  return (
    <div>
      <h1>
        THis {username} is Login page
        <input
          onChange={(e) => {
            setNewUsername(e.target.value);
          }}
        />
        <button onClick={() => dispatch(login({ username: newusername }))}>
          Submit login
        </button>
        <button>Logout</button>
      </h1>
    </div>
  );
};

export default Login;
