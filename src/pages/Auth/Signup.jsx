import React, { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components";
import "./Auth.css";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { signupFormReducer } from "../../reducers";
import { useTitle } from "../../hooks";

function Signup() {
  const [state, dispatch] = useReducer(signupFormReducer, {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [togglePassword, setTogglePassword] = useState(false);
  const { email, firstName, lastName, password, confirmPassword } = state;
  const [error, setError] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();
  useTitle("Signup");

  const signupHandler = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(`/api/auth/signup`, {
        email,
        firstName,
        lastName,
        password,
      });
      const { createdUser, encodedToken } = data;
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", encodedToken);
      setUser(createdUser);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
      setError("Something went wrong😞");
    }
  };

  return (
    <div className="px-2">
      <main className="center-div mt-2">
        <div className="card auth-card card-shadow m-1">
          <div className="card-section">
            <div className="card-header p-2">
              <h3 className="center-div">Signup</h3>
              <form onSubmit={signupHandler}>
                <div className="form-group my-2">
                  <Input
                    label="Email address"
                    type="email"
                    class_name="input-textbox p-1"
                    placeholder="Enter email"
                    value={email}
                    changeHandler={(event) =>
                      dispatch({ type: "SET_EMAIL", payload: event.target.value })
                    }
                    required={true}
                  />
                </div>
                <div className="form-group my-2">
                  <Input
                    label="First Name"
                    type="text"
                    class_name="input-textbox p-1"
                    placeholder="Enter first name"
                    value={firstName}
                    changeHandler={(event) =>
                      dispatch({
                        type: "SET_FIRST_NAME",
                        payload: event.target.value,
                      })
                    }
                    required={true}
                  />
                </div>
                <div className="form-group my-2">
                  <Input
                    label="Last Name"
                    type="text"
                    class_name="input-textbox p-1"
                    placeholder="Enter last name"
                    value={lastName}
                    changeHandler={(event) =>
                      dispatch({
                        type: "SET_LAST_NAME",
                        payload: event.target.value,
                      })
                    }
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
                    changeHandler={(event) =>
                      dispatch({
                        type: "SET_PASSWORD",
                        payload: event.target.value,
                      })
                    }
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
                <div className="form-group my-2">
                  <Input
                    label="Confirm Password"
                    type="password"
                    class_name="input-textbox p-1"
                    placeholder="Password"
                    value={confirmPassword}
                    changeHandler={(event) =>
                      dispatch({
                        type: "SET_CONFIRM_PASSWORD",
                        payload: event.target.value,
                      })
                    }
                    required={true}
                  />
                </div>
                {confirmPassword.length > 0 && password !== confirmPassword && (
                  <span className="input-err py-1">password not matching</span>
                )}

                {error && <span className="input-err p-1">{error}</span>}
                <button type="submit" className="btn btn-primary">
                  Create new account
                </button>
              </form>

              <Link to="/login" className="btn-link center-div">
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;
