import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../lib/customHooks";
import { storeTokenInLocalStorage } from "../lib/common";
import { API_ROUTES, APP_ROUTES } from "../utils/constants";

// const LOGIN_URL = "/auth";

const Login = () => {

  const navigate = useNavigate();
  const { user, authenticated } = useUser();
  if ( user || authenticated ) {
    navigate(APP_ROUTES.MENU_LIST)
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const logIn = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: 'post',
        url: API_ROUTES.LOG_IN,
        data: {
          email,
          password,
        }
      });
      if (!response?.data.token) {
        console.log("Something went wrong during the log in process", response);
        return;
      }
      storeTokenInLocalStorage(response.data.token);
      navigate(APP_ROUTES.MENU_LIST)
    }
    catch (err) {
      console.log("Something happened during the login process", err);
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <section className="login-form">
        <h1>Log In </h1>
        <form className="form-content">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <br />
          <button type="submit" onClick={logIn}>
            Log In
          </button>
          {isLoading ? <div className="loader" /> : null}
        </form>
      </section>
    </>
  );
};

export default Login;

// -- Notes --

// useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   setErrMessage("");
  // }, [user, pass]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate("/menu-list");
  // };

// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//     .then(data => data.json())
// }

// const { setAuth } = useContext(AuthContext);
  // const userRef = useRef();
  // const errRef = useRef();
