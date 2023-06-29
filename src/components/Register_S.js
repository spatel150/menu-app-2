import { useState } from "react";
import axios from 'axios';
import { API_ROUTES, APP_ROUTES } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const register = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: 'POST',
        url: API_ROUTES.REGISTER,
        data: {
          email,
          password,
          firstname, 
          lastname
        }
      });
      if (!response?.data?.token) {
        console.log('Something went wrong when registering', response);
        return;
      }
      navigate(APP_ROUTES.LOG_IN);
    }
    catch (err) {
      console.log('An error occurred during the registration process')
    }
    finally {
      setIsLoading(false);
    }
  }

  const handleFirstName = (e) => {
    setFirstname(e.target.value);
  };
  
  const handleLastName = (e) => {
    setLastname(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <section className="register-form">
        <h1>Register</h1>
        <form className="form-content-2">
          <label htmlFor="name"> First Name</label>
          <input
            type="text"
            id="name"
            value={firstname}
            onChange={handleFirstName}
            required
          />
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastname}
            onChange={handleLastName}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmail}
            required
          />
          <label htmlFor="name">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePass}
            required
          />
          <button type="submit" onClick={register}>
            Register
          </button>
          { isLoading ? <div className="loader" /> : null}
        </form>
      </section>
    </>
  );
};

export default Register;
