import { useState } from "react";
//useDispatch hook dispatch actions
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const [newusername, setNewUsername] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.auth.value.username);
  return <div></div>;
};

export default SignUp;
