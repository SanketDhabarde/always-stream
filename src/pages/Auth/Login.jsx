import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input } from "../../components";
import { useUserLists } from "../../context";
import { useAuth } from "../../context/auth";
import { useTitle } from "../../hooks";
import "./Auth.css";
import { getBaseUrl } from "../../utils";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);
  const [error, setError] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { userListsDispatch } = useUserLists();
  useTitle("Login");

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(`${getBaseUrl()}/api/auth/login`, { email, password });
      const { foundUser, encodedToken } = data;
      setUser(foundUser);
      userListsDispatch({ type: "INIT_USER_LIST", payload: foundUser });
      localStorage.setItem("token", encodedToken);
      navigate(location.state?.from?.pathname || "/", { replace: true });
    } catch (error) {
      console.error(error);
      setError("Username/password is wrong😞");
    }
  };

  const setDummyUserHandler = () => {
    setEmail("adarshbalika@gmail.com");
    setPassword("adarshBalika123");
  };

  return (
    <div className="px-2">
      <main className="center-div">
        <div className="card card-shadow m-1">
          <div className="card-section">
            <div className="card-header p-2">
              <h3 className="center-div">Login</h3>
              <form onSubmit={loginHandler}>
                <div className="form-group my-2">
                  <Input
                    label="Email address"
                    type="email"
                    class_name="input-textbox p-1"
                    placeholder="Enter email"
                    value={email}
                    changeHandler={(event) => setEmail(event.target.value)}
                    required={true}
                  />
                </div>
                <div className="form-group my-2">
                  <Input
                    label="Password"
                    type={togglePassword ? "text" : "password"}
                    class_name="input-textbox p-1"
                    placeholder="Password"
                    value={password}
                    changeHandler={(event) => setPassword(event.target.value)}
                    required={true}
                  />
                  <span
                    className="show-password"
                    onClick={() => setTogglePassword((prevState) => !prevState)}
                  >
                    {togglePassword ? (
                      <i className="fas fa-eye"></i>
                    ) : (
                      <i className="fas fa-eye-slash"></i>
                    )}
                  </span>
                </div>
                {error && <span className="input-err p-1">{error}</span>}
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button
                  type="submit"
                  className="btn btn-dummy-user btn-secondary"
                  onClick={setDummyUserHandler}
                >
                  Login with dummy user
                </button>
              </form>
              <Link to="/signup" className="btn-link center-div">
                Create new account <i className="fas fa-arrow-right px-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
